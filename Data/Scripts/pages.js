const navcontent = document.getElementById("navcontrol");



const home = document.createElement("a");
const home2 = document.createElement("h4");
home2.textContent = "Watercup";
home.href = `#`;
home.appendChild(home2);
navcontent.appendChild(home);



pages.slice(1).forEach(p => {
    const link = document.createElement("a");
    link.href = `#${p.id}`;
    link.textContent = p.title;
    link.className = "navitem";
    navcontent.appendChild(link);
});

const back = document.createElement("a");
back.href = `/`;
back.textContent = "Back";
back.className = "navitem";
navcontent.appendChild(back);

function showPage() {
    const hash = window.location.hash.substring(1) || pages[0].id;
    document.querySelectorAll("div.page").forEach(p => p.style.display = "none");
    const page = document.getElementById(hash);
    if (page) page.style.display = "block";
}

window.addEventListener("hashchange", showPage);
window.addEventListener("load", showPage);
