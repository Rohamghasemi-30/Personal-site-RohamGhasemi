function openModal() {
    document.getElementById("modal").style.display = "flex";
    document.body.style.pointerEvents = "none";
    document.body.style.overflow = "hidden";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.body.style.pointerEvents = "auto";
    document.body.style.overflow = "auto";
}

let copyButton = document.getElementById('copyButton');
let copyMessage = document.getElementById('copyMessage');

copyButton.addEventListener('click', () => {
    let textToCopy = document.getElementById('textToCopy').innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
        copyMessage.style.display = 'block';
        setTimeout(() => {
            copyMessage.style.display = 'none'; 
        }, 3000);
    });
});


// bankCard


function openModalBankCard() {
    document.getElementById("modalBankCard").style.display = "flex";
    document.body.style.pointerEvents = "none";
    document.body.style.overflow = "hidden";
}

function closeModalBankCard() {
    document.getElementById("modalBankCard").style.display = "none";
    document.body.style.pointerEvents = "auto";
    document.body.style.overflow = "auto";
}





let copyButtonNumber = document.getElementById('copyButtonNumber');
let copyMessageNumber = document.getElementById('copyMessageNumber');

copyButtonNumber.addEventListener('click', () => {
    let textToCopyNumber = document.getElementById('textToCopyNumber').innerText;
    navigator.clipboard.writeText(textToCopyNumber).then(() => {
        copyMessageNumber.style.display = 'block';
        setTimeout(() => {
            copyMessageNumber.style.display = 'none'; 
        }, 3000);
    });
});



document.querySelector('.hamburger-button button').addEventListener('click', function() {
    var topMenu = document.querySelector('.top-menu');
    topMenu.classList.toggle('active');
    this.classList.toggle('menu-closed');
});


// dark mode


let exchangeDark = document.querySelector(".i");
let exchangeWhite = document.querySelector(".i-2");
let dark = document.querySelector("#switch");

dark.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");

    if (exchangeDark.style.display === 'none') {
        exchangeDark.style.display = 'block';
        exchangeWhite.style.display = 'none';
    } else {
        exchangeDark.style.display = 'none';
        exchangeWhite.style.display = 'block';
    }
});


let darkRes = document.querySelector("#switch-res");

darkRes.addEventListener("click", () => {
    document.body.classList.toggle("darkres");
    document.body.classList.toggle("lightres");

});



