require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.BOT_TOKEN;
if (!token) throw new Error('BOT_TOKEN is not set');
const bot = new TelegramBot(token, { polling: true });

// Хранилище состояний пользователей
const userStates = {};

console.log('Бот запущен...');

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  console.log(`Получено сообщение /start от ${chatId}`);
  userStates[chatId] = { step: 'select_item' };
  bot.sendMessage(chatId, 'Добро пожаловать в цветочный магазин! Выберите товар:', {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Букет "Розовый сон" (2500 ₽)', callback_data: 'bouquet1' }],
        [{ text: 'Букет "Солнечный микс" (3500 ₽)', callback_data: 'bouquet2' }],
        [{ text: 'Букет "Нежность" (2000 ₽)', callback_data: 'bouquet3' }],
        [{ text: 'Букет "Вечерний шарм" (2800 ₽)', callback_data: 'bouquet4' }],
        [{ text: 'Роза (100 ₽/шт)', callback_data: 'rose' }],
        [{ text: 'Тюльпан (80 ₽/шт)', callback_data: 'tulip' }],
      ],
    },
  });
});

bot.on('callback_query', (callbackQuery) => {
  const chatId = callbackQuery.message.chat.id;
  const data = callbackQuery.data;
  console.log(`Получен callback: ${data} от ${chatId}`);

  if (userStates[chatId]?.step === 'select_item') {
    if (data.startsWith('bouquet')) {
      const bouquets = {
        bouquet1: 'Розовый сон (2500 ₽)',
        bouquet2: 'Солнечный микс (3500 ₽)',
        bouquet3: 'Нежность (2000 ₽)',
        bouquet4: 'Вечерний шарм (2800 ₽)',
      };
      userStates[chatId] = {
        step: 'address',
        order: { type: 'bouquet', item: bouquets[data], quantity: 1 },
      };
      bot.sendMessage(chatId, `Вы выбрали ${bouquets[data]}. Укажите адрес доставки:`);
    } else if (data === 'rose' || data === 'tulip') {
      const flowers = { rose: 'Роза (100 ₽/шт)', tulip: 'Тюльпан (80 ₽/шт)' };
      userStates[chatId] = {
        step: 'quantity',
        order: { type: 'flower', item: flowers[data] },
      };
      bot.sendMessage(chatId, `Вы выбрали ${flowers[data]}. Укажите количество (например, 5):`);
    }
  }
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === '/start') return;

  if (userStates[chatId]?.step === 'quantity') {
    const quantity = parseInt(text, 10);
    if (isNaN(quantity) || quantity <= 0) {
      bot.sendMessage(chatId, 'Пожалуйста, укажите корректное количество (например, 5):');
      return;
    }
    userStates[chatId] = {
      step: 'address',
      order: { ...userStates[chatId].order, quantity },
    };
    bot.sendMessage(chatId, 'Укажите адрес доставки:');
  } else if (userStates[chatId]?.step === 'address') {
    userStates[chatId] = {
      step: 'name',
      order: { ...userStates[chatId].order, address: text },
    };
    bot.sendMessage(chatId, 'Укажите ваше имя:');
  } else if (userStates[chatId]?.step === 'name') {
    userStates[chatId] = {
      step: 'phone',
      order: { ...userStates[chatId].order, name: text },
    };
    bot.sendMessage(chatId, 'Укажите ваш номер телефона:');
  } else if (userStates[chatId]?.step === 'phone') {
    const order = { ...userStates[chatId].order, phone: text };
    delete userStates[chatId];

    const totalPrice =
      order.type === 'bouquet'
        ? parseInt(order.item.match(/\d+/)[0], 10)
        : order.quantity * (order.item.includes('Роза') ? 100 : 80);
    const orderMessage = `
      Ваш заказ:
      Товар: ${order.item}
      ${order.type === 'flower' ? `Количество: ${order.quantity}\n` : ''}
      Сумма: ${totalPrice} ₽
      Адрес: ${order.address}
      Имя: ${order.name}
      Телефон: ${order.phone}
    `;

    bot.sendMessage(chatId, `Ваш заказ отправлен менеджеру!\n${orderMessage}\nМы свяжемся с вами скоро!`);
    
  } else {
    bot.sendMessage(chatId, 'Пожалуйста, начните с команды /start');
  }
});

bot.on('polling_error', (error) => {
  console.error('Ошибка polling:', error);
});