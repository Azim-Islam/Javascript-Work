
const loaderBar = document.getElementById('loader-bar-after');
const loaderContainer = document.getElementById('loader-container');
const actionBtn = document.getElementById('actionBtn');
const resetBtn = document.getElementById('resetBtn');
const text = document.getElementById('text');

const animationTime = 3000;

function showAnimation(animationTime) {
    loaderBar.style.animationDuration = `${animationTime / 1000}s`;
    console.log(loaderBar);
    loaderContainer.classList.replace('d-none', 'd-block');
}

function hideAnimation() {
    loaderContainer.classList.replace('d-block', 'd-none');
    text.style.background = 'black';
    text.style.color = 'white';
}


// actionBtn.addEventListener('click', () => {
//     showAnimation(animationTime);
//     setTimeout(hideAnimation, animationTime);
//     // await waitFuynction(2000);
//     // hideAnimation();
// });

function genSleep(animationTime) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => { resolve('Sleep Time Ended') }, animationTime);
    });
}

async function asyncStart(animationTime) {
    showAnimation(animationTime);
    await genSleep(animationTime); // animationTime is the amount pause the exection
    hideAnimation();
    console.log("Await Ended");
}

actionBtn.addEventListener('click', () => {
    console.log("Before Await");
    asyncStart(animationTime);
    console.log("After Await");

});

resetBtn.addEventListener('click', () => {
    text.style.background = 'white';
    text.style.color = 'black';
});