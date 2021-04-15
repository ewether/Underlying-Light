// page header text

let pageText = document.querySelector('.page-header');
let pageHeaderText = pageText.textContent;

const splitPageText = pageHeaderText.split("");
pageText.textContent = "";
console.log(splitPageText);

for(let i=0; i < splitPageText.length; i++) {
  pageText.innerHTML += "<span>" + splitPageText[i] + "</span>";
}

let pageChar = 0;
let pageTimer = setInterval(onTick, 50);

function onTick() {
  const span = pageText.querySelectorAll('span')[pageChar];
  span.classList.add('fade');
  pageChar++;
  if (pageChar === splitPageText.length) {
    complete();
  }
}

function complete() {
  clearInterval(pageTimer);
  pageTimer = null;
}
