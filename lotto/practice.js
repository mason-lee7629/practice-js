const candidate = Array(45)
    .fill()
    .map((v, i) => i + 1);
const shuffle = [];
while (candidate.length > 0) {
    const random = Math.floor(Math.random() * candidate.length);
    const spliceArray = candidate.splice(random, 1);
    const value = spliceArray[0];
    shuffle.push(value);
}
console.log(shuffle);

const winballs = shuffle.slice(0, 6).sort((p, c) => p - c);
const bonus = shuffle[6];
console.log(winballs);
console.log(bonus);

function colorize(number, tag) {
    if (number <= 10) {
        tag.style.backgroundColor = 'red';
        tag.style.color = 'white';
    } else if (number <= 20) {
        tag.style.backgroundColor = 'orange';
    } else if (number <= 30) {
        tag.style.backgroundColor = 'yellow';
    } else if (number <= 40) {
        tag.style.backgroundColor = 'blue';
        tag.style.color = 'white';
    } else {
        tag.style.backgroundColor = 'green';
        tag.style.color = 'white';
    }
}

const resultTag = document.querySelector('#result');
// for (let i = 0; i < 6; i++) {
//     setTimeout(() => {
//         const ball = document.createElement('div');
//         ball.className = 'ball';
//         colorize(winballs[i], ball);
//         ball.textContent = winballs[i];
//         resultTag.appendChild(ball);
//     }, 1000 * (i + 1));
// }

winballs.forEach((number, index) => {
    setTimeout(() => {
        const ball = document.createElement('div');
        ball.className = 'ball';
        colorize(number, ball);
        ball.textContent = number;
        resultTag.appendChild(ball);
    }, 1000 * (index + 1));
});

const bonusTag = document.querySelector('#bonus');
setTimeout(() => {
    const bonusBall = document.createElement('div');
    bonusBall.className = 'ball';
    colorize(bonus, bonusBall);
    bonusBall.textContent = bonus;
    bonusTag.appendChild(bonusBall);
}, 7000);
