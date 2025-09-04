//game

const item = document.querySelectorAll(".matrix_item")

const red = document.querySelector(".red")
const blue = document.querySelector(".blue")

let questions = [
    // Алгебра
    [
        "Что такое квадратное уравнение?",
        "Как называется график квадратичной функции?",
        "Что означает дискриминант в квадратном уравнении?",
        "Как раскрыть скобки в выражении (a + b)^2?",
        "Что такое арифметическая прогрессия?"
    ],
    // Физика
    [
        "Что измеряется в Ньютонах?",
        "Как называется закон, определяющий силу тока?",
        "Что такое кинетическая энергия?",
        "Как направлена сила трения скольжения?",
        "Что определяет плотность вещества?"
    ],
    // Геометрия
    [
        "Сколько градусов в сумме углов треугольника?",
        "Как называется отрезок, соединяющий центр окружности с любой точкой на ней?",
        "Что такое теорема Пифагора?",
        "Как называется параллелограмм с равными сторонами?",
        "Что такое биссектриса угла?"
    ],
    // Фильмы
    [
        "В каком фильме главный герой путешествует на ДеЛореане?",
        "Как звали волшебника в фильме «Властелин Колец»?",
        "Какой фильм рассказывает о мальчике-волшебнике Хогвартса?",
        "Кто сыграл Железного Человека в MCU?",
        "Какой фильм стал самым кассовым в истории кино?"
    ],
    // IT
    [
        "Что означает аббревиатура HTML?",
        "Какой язык программирования чаще используют для веб-разработки?",
        "Что такое алгоритм?",
        "Как называется устройство для постоянного хранения данных?",
        "Что такое кибербезопасность?"
    ]
];

let answers = [
    // Алгебра
    [
        "Уравнение вида ax² + bx + c = 0",
        "Парабола",
        "Количество корней уравнения",
        "a² + 2ab + b²",
        "Последовательность чисел с постоянной разницей"
    ],
    // Физика
    [
        "Сила",
        "Закон Ома",
        "Энергия движения тела",
        "Против направления движения",
        "Массу единицы объема"
    ],
    // Геометрия
    [
        "180°",
        "Радиус",
        "a² + b² = c² для прямоугольного треугольника",
        "Ромб",
        "Луч, делящий угол пополам"
    ],
    // Фильмы
    [
        "Назад в будущее",
        "Гэндальф",
        "Гарри Поттер",
        "Роберт Дауни-младший",
        "Аватар"
    ],
    // IT
    [
        "HyperText Markup Language",
        "JavaScript",
        "Последовательность шагов для решения задачи",
        "Жесткий диск",
        "Защита систем от цифровых атак"
    ]
];

//start game

let state = 1

function chooseTeam() {
    if (state == 1) {
        document.querySelector(".red").style.boxShadow = "0  0 10px 2px rgb(255, 132, 132)"
        document.querySelector(".blue").style.boxShadow = "none"
        document.querySelector(".red").style.transform = "scale(1.1)"
        document.querySelector(".blue").style.transform = "scale(1)"
    } else {
        document.querySelector(".blue").style.boxShadow = "0  0 10px 2px rgba(132, 171, 255, 1)"
        document.querySelector(".red").style.boxShadow = "none"
        document.querySelector(".blue").style.transform = "scale(1.1)"
        document.querySelector(".red").style.transform = "scale(1)"
    }
}

let weight = 0;

startAnimation()
chooseTeam()

function startAnimation() {
    setTimeout(() => {
        document.querySelector(".start").style.top = "0%"
        document.querySelector(".start_discription").style.marginLeft = "0%"
        document.querySelector(".start_create-by").style.marginRight = "0%"
        setTimeout(() => {
            document.querySelector(".start").style.transform = "rotate(0deg)"
            // document.querySelector(".start").style.top = "-100%"
        }, 2000);
        setTimeout(() => {
            // document.querySelector(".start").style.transform = "rotate(0deg)"
            document.querySelector(".start").style.top = "-100%"
            document.querySelector(".game").style.top = "0%"
            document.querySelector(".start_create-by").style.opacity = "0"

        }, 6000);
    }, 2000);
}

function continueGame(e) {
    state =!state
    chooseTeam()
    document.querySelector("body").removeEventListener("click", continueGame)
    document.querySelector(".start_create-by").style.opacity = "0"
    document.querySelector(".start").style.top = "-100%"
    document.querySelector(".game").style.top = "0%"
}

function getAnswer(e) {
    document.querySelector(".start_create-by").style.opacity = "1"
    document.querySelector("body").removeEventListener("click", getAnswer)
    setTimeout(() => {
        document.querySelector("body").addEventListener("click", continueGame)
    }, 1000);
}

function getQuethions(e) {
    e.target.removeEventListener('click', getQuethions)
    e.target.style.background = "rgba(123, 123, 123, 1)"
    weight = Number(e.target.innerText)

    for (let i = 0; i < item.length; i++) {
        const element = item[i];
        if (element == e.target) {
            document.querySelector(".start_discription").innerText = questions[Math.floor(i / 6)][i % 6 - 1]
            document.querySelector(".start_create-by").innerText = answers[Math.floor(i / 6)][i % 6 - 1]
            document.querySelector(".start_create-by").style.opacity = "0"
            document.querySelector(".start_discription").style.fontSize = "30px"
            document.querySelector(".start_create-by").style.fontSize = "20px"
            document.querySelector(".start").style.top = "0"
            document.querySelector(".game").style.top = "100%"
        }
    }
    setTimeout(() => {
        document.querySelector("body").addEventListener("click", getAnswer)
    }, 1000);
}

for (let i = 0; i < item.length; i++) {
    const element = item[i];
    if (i % 6 != 0) element.addEventListener('click', getQuethions)
}

document.querySelector(".red").addEventListener('click', e => {
    document.querySelector(".red").innerHTML = Number(document.querySelector(".red").innerHTML) + weight
    weight = 0
})

document.querySelector(".blue").addEventListener('click', e => {
    document.querySelector(".blue").innerHTML = Number(document.querySelector(".blue").innerHTML) + weight
    weight = 0
})