function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function changeTitle(newTitle) {
    document.getElementById('profile-title').innerText = newTitle;
}

function resetTitle() {
    document.getElementById('profile-title').innerText = 'Kerby Salandanan';
}