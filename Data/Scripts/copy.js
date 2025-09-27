const copied = document.getElementById("copied")
copied.style.display = "none"

function copy(text) {
    navigator.clipboard.writeText(text)

    copied.style.display = "flex";
    setTimeout(() => {
        copied.style.display = "none";
    }, "2000")
}