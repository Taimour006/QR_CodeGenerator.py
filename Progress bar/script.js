const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentStep = 1;

next.addEventListener("click", () => {
    if (currentStep < circles.length) {
        currentStep++;
        update();
    }
});

prev.addEventListener("click", () => {
    if (currentStep > 1) {
        currentStep--;
        update();
    }
});

function update() {
    circles.forEach((circle, index) => {
        if (index < currentStep) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });

    const progressPercentage = ((currentStep - 1) / (circles.length - 1)) * 100;
    progress.style.width = progressPercentage + "%";

    prev.disabled = currentStep === 1;
    next.disabled = currentStep === circles.length;
}
