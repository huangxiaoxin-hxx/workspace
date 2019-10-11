const wrap = document.getElementById('wrap');

let images = [
    './images/h1.jpg',
    './images/h2.jpg',
    './images/h3.jpg',
    './images/h4.jpg',
    './images/h5.jpg',
    './images/h6.jpg',
    './images/h1.jpg',
    './images/h2.jpg',
    './images/h3.jpg',
    './images/h4.jpg',
    './images/h5.jpg',
    './images/h6.jpg',
]
let count = 0;
images.sort((a, b) => 0.5 - Math.random());
console.log(images);
init();

function init() {
    for (let i = 0; i < 12; i++) {
        let img = document.createElement('img');
        img.src = './images/BC75A7116ACDCE07891510B3AE8C7C52.jpg'
        img.onclick = function () {
            changeImage(img, i);
        }
        wrap.appendChild(img);
    }
}

const allImg = document
    .querySelectorAll('#wrap img');

let firstCard = null;
let firstIndex = null;
function changeImage(imgNode, i) {
    if (count == 0) {
        imgNode.src = images[i];
        imgNode.classList.add('rotate-animation');
        firstCard = images[i];
        firstIndex = i;

    } else if (count == 1) {
        imgNode.src = images[i];
        imgNode.classList.add('rotate-animation');
        setTimeout(() => {
            if (images[i] == firstCard && i != firstIndex) {
                wrap.removeChild(allImg[firstIndex]);
                wrap.removeChild(allImg[i]);
            } else {
                allImg[firstIndex].src = './images/BC75A7116ACDCE07891510B3AE8C7C52.jpg';
                allImg[i].src = './images/BC75A7116ACDCE07891510B3AE8C7C52.jpg';
                allImg[firstIndex].className = '';
                allImg[i].className = '';
            }
            count = 0;
            firstIndex = null;
            firstCard = null;
        }, 1100);

    } else {

    }
    count++;
}

// var arr = [1, 2, 3, 4, 5];
// arr.sort((a, b) => b - a);
// //乱序  随机排序 伪随机 不是真正的随机
// arr.sort((a, b) => 0.5 - Math.random());
// console.log(arr);