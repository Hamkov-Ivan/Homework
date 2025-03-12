// Создаем объект с описанием
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