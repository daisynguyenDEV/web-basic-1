//Pop up login

function popup () {
    let popup = document.getElementsByClassName("container")
    if (popup.style.display === "none") {
        popup.style.display = "block";
    } else {
        popup.style.display = "none"
    }
}