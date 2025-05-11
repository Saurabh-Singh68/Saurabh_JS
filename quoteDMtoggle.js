function changeHeading() {
    const options = [
        "Be kind",
        "Be honest",
        "Be good",
        "Honesty is the best policy",
        "Be noble",
        "Trust the process",
        "Believe in yourself",
        "Success is not final",
        "Work harder",
        "Mind should be in the right place"
    ];
    const randomIndex = Math.floor(Math.random() * options.length);
    document.getElementById("domHeading").innerText = options[randomIndex];
}

function addNewParagraph() {
    const p = document.createElement("p");
    p.innerText = "This is a new paragraph!";
    document.getElementById("domContent").appendChild(p);
}

// ✅ Dark mode toggle
document.addEventListener('DOMContentLoaded', function () {
    const darkModeButton = document.getElementById('darkmodetoggle');
    darkModeButton.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
    });
});
