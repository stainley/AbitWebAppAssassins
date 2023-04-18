const main = () => {

}

const sendMail = () => {
    document.getElementById("mail_to");
    const email = "info@abit.com";
    const mailto_link = 'mailto:' + email;
    window = window.open(mailto_link, 'emailWindow');

    if (window.orientation > 1) {
        window.open(mailto_link, "intent://127.0.0.1#Intent;scheme=my_scheme;action=android.intent.action.VIEW;end");
    }

   /* if (window && window.open && !window.closed){
        window.close();
    }*/
}

const mobileWeb = () => {
    if (window.orientation > 1) {
        alert("Mobile device");
    }
}

const copyright = () => {
    const year = new Date().getFullYear();
    document.getElementById("copyright").textContent = `© ${year} Abit. All Rights Reserved.`;
}

copyright();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(r => {
    });
}