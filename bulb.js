function toggleLight() {
    let lightbulb = document.getElementById("lightbulb");
    if (lightbulb.src.includes("https://i.pinimg.com/564x/e0/fd/25/e0fd25f9127a9a109a0648c83ee61643.jpg")) {
        lightbulb.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBjIqomV_U0yzzlg3NlB5qtbYCJQRj3AulUA&s";
    } else {
        lightbulb.src = "https://i.pinimg.com/564x/e0/fd/25/e0fd25f9127a9a109a0648c83ee61643.jpg";
    }
}
