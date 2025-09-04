//game

const item = document.querySelectorAll(".matrix_item")

const red = document.querySelector(".red")
const blue = document.querySelector(".blue")

let questions = [
  // Биология
  [
    "Какой процесс обеспечивает превращение АТФ в АДФ с выделением энергии?",
    "Какие органоиды клетки отвечают за синтез белка?",
    "Что такое хемосинтез и у каких организмов он встречается?",
    "Как называется деление клетки, при котором образуются половые клетки?",
    "Что такое фенотип и как он связан с генотипом?"
  ],
  // Химия
  [
    "Какие типы гибридизации электронных орбиталей существуют в органической химии?",
    "Что такое закон сохранения массы веществ и кто его сформулировал?",
    "Как изменяется активность металлов в электрохимическом ряду напряжений?",
    "Что такое аллотропия и приведите примеры аллотропных модификаций углерода",
    "Какие виды изомерии характерны для органических соединений?"
  ],
  // Физика
  [
    "Сформулируйте второй закон Ньютона и напишите его математическое выражение",
    "Что такое КПД простого механизма и почему он всегда меньше 100%?",
    "Объясните явление электромагнитной индукции и сформулируйте правило Ленца",
    "Какие превращения энергии происходят при свободных колебаниях пружинного маятника?",
    "Что такое абсолютный показатель преломления среды и от чего он зависит?"
  ],
  // География
  [
    "Объясните механизм образования бризов и муссонов",
    "Какие факторы влияют на формирование климата в пределах климатического пояса?",
    "Что такое цунами и каковы причины его возникновения?",
    "Опишите круговорот воды в природе с указанием основных процессов",
    "Какие виды миграции населения существуют и чем они вызваны?"
  ],
  // История (всемирная)
  [
    "Каковы были основные причины и последствия Великих географических открытий?",
    "Охарактеризуйте основные идеи Просвещения и их влияние на общество",
    "Что такое Реформация и Контрреформация в Европе?",
    "Каковы были основные причины и этапы Первой мировой войны?",
    "Опишите процесс формирования колониальной системы и его последствия"
  ]
];

let answers = [
  // Биология
  [
    "Гидролиз АТФ",
    "Рибосомы",
    "Процесс синтеза органических веществ за счет энергии химических реакций; у хемосинтезирующих бактерий",
    "Мейоз",
    "Совокупность внешних признаков организма; определяется генотипом и влиянием среды"
  ],
  // Химия
  [
    "sp, sp², sp³",
    "Масса веществ, вступивших в реакцию, равна массе веществ, образовавшихся в результате реакции; М.В. Ломоносов",
    "Активность металлов увеличивается слева направо и снизу вверх в ряду напряжений",
    "Явление существования элемента в виде нескольких простых веществ; алмаз, графит, фуллерен",
    "Структурная (углеродного скелета, положения функциональной группы, межклассовая) и пространственная"
  ],
  // Физика
  [
    "Ускорение тела прямо пропорционально равнодействующей сил и обратно пропорционально его массе: a = F/m",
    "Отношение полезной работы к затраченной; из-за наличия сил трения и сопротивления",
    "Возникновение тока в замкнутом контуре при изменении магнитного потока; индукционный ток направлен так, чтобы противодействовать причине его вызвавшей",
    "Кинетическая энергия переходит в потенциальную и обратно",
    "Отношение скорости света в вакууме к скорости света в среде; зависит от плотности и оптических свойств среды"
  ],
  // География
  [
    "Бризы - из-за разницы температуры суши и моря; муссоны - из-за сезонного изменения давления",
    "Рельеф, удаленность от океана, океанические течения, высота над уровнем моря",
    "Гигантские волны; вызываются подводными землетрясениями, извержениями вулканов, оползнями",
    "Испарение → конденсация → осадки → поверхностный и подземный сток",
    "Внешние и внутренние, сезонные и маятниковые; вызваны экономическими, политическими, экологическими причинами"
  ],
  // История (всемирная)
  [
    "Поиск новых торговых путей; развитие торговли, колониализм, культурный обмен",
    "Разум, свобода, равенство; повлияли на буржуазные революции и формирование правового государства",
    "Реформация - движение за реформу католической церкви; Контрреформация - борьба католической церкви с Реформацией",
    "Империалистические противоречия, убийство Франца Фердинанда; 1914-1918 годы",
    "Захват и эксплуатация европейскими странами территорий; привел к экономическому неравенству и культурным изменениям"
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