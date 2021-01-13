const input = document.querySelector('#input');
const check = document.querySelector('#check');
const logs = document.querySelector('#logs');

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let answer = [];

for (let n = 0; n < 4; n++) {
    const index = Math.floor(Math.random() * numbers.length);
    answer.push(numbers[index]);
    numbers.splice(index, 1);
}
console.log(answer);

let count = 0;
check.addEventListener('click', () => {
    const value = input.value;
    if (value && value.length === 4) {
        if (answer.join('') === value) {
            logs.appendChild(document.createTextNode('HR'));
        } else {
            console.log('false');
            let strike = 0;
            let ball = 0;
            for (const [aIndex, aNumber] of answer.entries()) {
                for (const [iIndex, iString] of input.value
                    .split('')
                    .entries()) {
                    if (aNumber === Number(iString)) {
                        if (aIndex === iIndex) {
                            strike += 1;
                        } else {
                            ball += 1;
                        }
                    }
                }
            }
            const message = document.createTextNode(
                `${input.value}: ${strike} strike ${ball} ball`
            );
            logs.appendChild(message);
            logs.appendChild(document.createElement('br'));
            if (count > 8) {
                logs.appendChild(
                    document.createTextNode(`Game Over: ${answer.join('')}`)
                );
            } else {
                count += 1;
            }
        }
    }
});
