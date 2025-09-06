function questionsSort(stringToSplit, separator) {
    var arrayOfStrings = stringToSplit.split(separator);

    console.log('Оригинальная строка: "' + stringToSplit + '"');
    console.log('Разделитель: "' + separator + '"');
    console.log(
        "Массив содержит " +
        arrayOfStrings.length +
        " элементов: " +
        arrayOfStrings.join(" / "),
    );

    for (let i = 0; i < arrayOfStrings.length; i++) {
        arrayOfStrings[i] += separator
    }

    return arrayOfStrings
}

function checkColor(value) {
    if (value == "grey-green") {
        return "rgb(73, 136, 119)"
    } else if (value == "black") {
        return "rgba(41, 41, 41, 1)"
    } else {
        return "rgba(245, 240, 231, 1)"
    }
}

document.querySelector(".main_button").addEventListener("click", e => {
    let que = questionsSort(String(document.querySelector(".main_input-qut").value), "?");
    let ans = questionsSort(String(document.querySelector(".main_input-ans").value), ";");
    let bcr = checkColor(document.querySelector(".main_input-block-color").value)
    let tcr = checkColor(document.querySelector(".main_input-text-color").value)
    document.querySelector(".generate-code").innerText = `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        :root {
            --baseColor: url("${document.querySelector(".main_input-pic").value}");
            --blockColor: ${bcr};
            --textColor: ${tcr};
        }

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: var(--baseColor); 
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
}

.main {
    position: relative;
    width: 100%;
    height: 100%;
}

.start,
.game {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
}

.start {
    top: -100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    color: var(--textColor);
    transform: rotate(20deg);
    transition: all 1s;
}

.start_discription {
    padding: 10px;
    border-radius: 20px;
    background-color: var(--blockColor);
    text-wrap: nowrap;
    margin-left: 130%;
    font-size: 60px;
    transition: all 1s;
}


.start_create-by {
    background-color: var(--blockColor);
    padding: 5px;
    border-radius: 10px;
    text-wrap: nowrap;
    margin-right: 130%;
}

.game {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    top: 100%;
    transition: all 1s;
    padding: 40px;
}

.game_score {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    width: 100%;
    height: 10%;
    margin-bottom: 5px;
}

.game_team {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    border-radius: 10px;
    font-size: 40px;
    color: white;
}

.red {
    background-color: red;
}

.blue {
    background-color: blue;
}

.main_matrix {
color: var(--textColor);
    width: 1088px;
    height: 626px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
}

.matrix_floor {

    width: 100%;
    height: 19%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
}

.start_create-by {
    opacity: 1;
    transition: all 1s;
}

.matrix_item {
    background-color: var(--blockColor);
    width: 16%;
    height: 100%;
    border-radius: 10px;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}
    </style>
</head>
<body>
    <div class="main">
        <div class="main_start start">
            <h1 class="start_discription">${document.querySelector(".main_input-main-tit").value}</h1>
            <span class="start_create-by">сделано: 911-duck(<a style="color: rgb(103, 103, 103);" href="https://github.com/911-duck">https://github.com/911-duck</a>)</span>
        </div>
        <div class="main_game game">
            <div class="game_score">
                <div class="game_team red">0</div>
                <div class="game_team blue">0</div>
            </div>
        
        <div class="main_matrix matrix">
            <div class="matrix_floor">
                <div class="matrix_item">${document.querySelectorAll(".main_input-tit")[0].value}</div>
                <div class="matrix_item">1</div>
                <div class="matrix_item">2</div>
                <div class="matrix_item">3</div>
                <div class="matrix_item">4</div>
                <div class="matrix_item">5</div>
            </div>
            <div class="matrix_floor">
                <div class="matrix_item">${document.querySelectorAll(".main_input-tit")[1].value}</div>
                <div class="matrix_item">1</div>
                <div class="matrix_item">2</div>
                <div class="matrix_item">3</div>
                <div class="matrix_item">4</div>
                <div class="matrix_item">5</div>
            </div>
            <div class="matrix_floor">
                <div class="matrix_item">${document.querySelectorAll(".main_input-tit")[2].value}</div>
                <div class="matrix_item">1</div>
                <div class="matrix_item">2</div>
                <div class="matrix_item">3</div>
                <div class="matrix_item">4</div>
                <div class="matrix_item">5</div>
            </div>
            <div class="matrix_floor">
                <div class="matrix_item">${document.querySelectorAll(".main_input-tit")[3].value}</div>
                <div class="matrix_item">1</div>
                <div class="matrix_item">2</div>
                <div class="matrix_item">3</div>
                <div class="matrix_item">4</div>
                <div class="matrix_item">5</div>
            </div>
            <div class="matrix_floor">
                <div class="matrix_item">${document.querySelectorAll(".main_input-tit")[4].value}</div>
                <div class="matrix_item">1</div>
                <div class="matrix_item">2</div>
                <div class="matrix_item">3</div>
                <div class="matrix_item">4</div>
                <div class="matrix_item">5</div>
            </div>
        </div>
        </div>
    </div>
    <script>
    //game

const item = document.querySelectorAll(".matrix_item")

const red = document.querySelector(".red")
const blue = document.querySelector(".blue")

let questions = [
    [
        "${que[0]}",
        "${que[1]}",
        "${que[2]}",
        "${que[3]}",
        "${que[4]}"
    ],
    [
        "${que[5]}",
        "${que[6]}",
        "${que[7]}",
        "${que[8]}",
        "${que[9]}"
    ],
    [
        "${que[10]}",
        "${que[11]}",
        "${que[12]}",
        "${que[13]}",
        "${que[14]}"
    ],
    [
        "${que[15]}",
        "${que[16]}",
        "${que[17]}",
        "${que[18]}",
        "${que[19]}"
    ],
    [
        "${que[20]}",
        "${que[21]}",
        "${que[22]}",
        "${que[23]}",
        "${que[24]}"
    ]
];

let answers = [
    [
        "${ans[0]}",
        "${ans[1]}",
        "${ans[2]}",
        "${ans[3]}",
        "${ans[4]}"
    ],
    [
        "${ans[5]}",
        "${ans[6]}",
        "${ans[7]}",
        "${ans[8]}",
        "${ans[9]}"
    ],
    [
        "${ans[10]}",
        "${ans[11]}",
        "${ans[12]}",
        "${ans[13]}",
        "${ans[14]}"
    ],
    [
        "${ans[15]}",
        "${ans[16]}",
        "${ans[17]}",
        "${ans[18]}",
        "${ans[19]}"
    ],
    [
        "${ans[20]}",
        "${ans[21]}",
        "${ans[22]}",
        "${ans[23]}",
        "${ans[24]}"
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
    </script>
</body>
</html>
    `

})