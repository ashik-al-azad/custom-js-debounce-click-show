// jotobar click korbo totobar show korba

// const button = document.getElementById("button");

// button.addEventListener("click", function () {
// console.log("clicked");
// });

// jotobar click korbo totobar show korba

// jotobar click korbo totobar show korba settimeout

// const button = document.getElementById("button");

// function debounce(fn, delay) {
//     return function () {
//         setTimeout(() => {
//             fn();
//         }, delay);
//     };
// }

// button.addEventListener("click", debounce(function () {
//     console.log("clicked");
// }, 1000));

// jotobar click korbo totobar show korba settimeout

// aksata jotobar click korbo akbar show korba 

const button = document.getElementById("button");

function debounce(fn, delay) {
    let timeoutId;
    return function () {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn();
        }, delay);
    };
}

button.addEventListener("click", debounce(function () {
    console.log("clicked");
}, 500));

// aksata jotobar click korbo akbar show korba 