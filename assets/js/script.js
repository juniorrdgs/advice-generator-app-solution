window.onload = loadAdvice();

async function loadAdvice() {
    let req = await fetch('https://api.adviceslip.com/advice');
    let json = await req.json();
    buildAdvice(json);
}

let buildAdvice = (advice) => {
    document.getElementById('adviceId').innerText = advice.slip.id;
    document.getElementById('adviceText').innerText = advice.slip.advice;
}