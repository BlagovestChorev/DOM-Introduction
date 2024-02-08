function toggle() {
    var extraContent = document.getElementById("extra");
    var buttonText = document.querySelector(".head .button");

    if (extraContent.style.display === "none" || extraContent.style.display === "") {
        extraContent.style.display = "block";
        buttonText.textContent = "Less";
    } else {
        extraContent.style.display = "none";
        buttonText.textContent = "More";
    }
}