// Тестовый пользователь
let currentUser = {
  id: 8287041036,
  first_name: "German",
  balance: 50,
  subscription: "Free"
};

// Функция обновления верхней панели
function updateTopBar(user){
  document.getElementById('username').innerText = user.first_name || 'Игрок';
  document.getElementById('userid').innerText = 'ID: ' + user.id;
  document.getElementById('balance').innerText = user.balance;
  document.getElementById('sub').innerText = user.subscription;
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', ()=>{
  updateTopBar(currentUser);
});

// Пример функции тратить осколки
function spendShard(amount){
  currentUser.balance -= amount;
  updateTopBar(currentUser);
}

// Пример функции смены подписки
function upgradeSubscription(type){
  currentUser.subscription = type;
  updateTopBar(currentUser);
}
