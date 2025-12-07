const para = document.querySelector('p');
const spotlight = document.querySelector('.spotlight');

let text = para.innerText;
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let interval = null;


window.addEventListener('mousemove', (event) => {
    document.documentElement.style.setProperty('--X', event.clientX + 'px');
    document.documentElement.style.setProperty('--Y', event.clientY + 'px');
});

function matrixTextEffect() {
    let iterations = 0;
    clearInterval(interval);

    interval = setInterval(() => {
        const str = text
            .split('')
            .map((char, idx) => {
                if (idx < iterations) {
                    return char;
                }
                return letters[Math.floor(Math.random() * letters.length)];
            })
            .join('');

        para.innerText = str;

        iterations += 1 / 4;

        if (iterations >= text.length) {
            clearInterval(interval);
        }
    },30);
}


para.addEventListener('mouseenter', () => {
    para.style.opacity = '1';
    matrixTextEffect();
    setTimeout(() => {
        para.style.opacity = '0';
        
    }, 2800);
});

