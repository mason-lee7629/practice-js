const r = document.querySelector('#result');

document.querySelector('#click').addEventListener('click', () => {
    const a = document.querySelector('#firstnumber').value;
    const b = document.querySelector('#secondnumber').value;
    if (a) {
        if (b) {
            const c = a * b;
            r.textContent = c;
        } else {
            r.textContent = '두 번째 값을 입력하세요.';
        }
    } else {
        r.textContent = '첫 번째 값을 입력하세요.';
    }
});
