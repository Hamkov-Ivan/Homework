!function(){let s=document.getElementById("tasks"),e=document.getElementById("diplom"),t=document.getElementById("tasksBlock"),l=document.getElementById("diplomBlock"),i=document.getElementById("burger"),o=document.getElementById("sidebar"),c=document.getElementById("overlay"),d=document.getElementById("body");s.onclick=function(){e.classList.remove("active"),this.classList.add("active"),t.classList.remove("hidden"),l.classList.add("hidden"),o.classList.remove("show"),c.classList.remove("show")},e.onclick=function(){s.classList.remove("active"),this.classList.add("active"),l.classList.remove("hidden"),t.classList.add("hidden"),o.classList.remove("show"),c.classList.remove("show")},i.onclick=function(){d.classList.toggle("overflow"),c.classList.toggle("show"),o.classList.toggle("show")}}();
const myProfile = {
    name: "IvanHamkov",
    age: 34,
    role: "Teacher",
    
    // Метод для приветствия
    greet: function(name) {
        return `Hello ${name}`;
    }
};

// Создаем массив объектов с описанием пользователей
const users = [
    { name: "Alice", age: 25, role: "user" },
    { name: "Bob", age: 30, role: "admin" },
    { name: "Charlie", age: 22, role: "user" },
    { name: "David", age: 28, role: "user" },
    { name: "Eve", age: 35, role: "admin" }
];

// Переменная для хранения количества простых пользователей
let simpleUsersCount = 0;

// Обходим массив пользователей
users.forEach(user => {
    if (user.role !== "admin") {
        simpleUsersCount++;
    }
});

// Выводим количество простых пользователей
console.log(`Количество простых пользователей: ${simpleUsersCount}`);

// Пример использования метода greet
console.log(myProfile.greet("Alice")); // Вывод: Hello Alice
