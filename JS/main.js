const text = document.querySelector(".text");
text.innerHTML = text.textContent.replace(/\S/g, '<span class="move">$&</span>');

const element = document.querySelectorAll(".move");
for (let i = 0; i < element.length; i++) {
    element[i].style.animationDelay = i * .07 + "s";
}