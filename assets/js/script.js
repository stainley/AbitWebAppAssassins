const main = () => {

}

const sendMail = () => {
    document.getElementById("mail_to");
    const email = "info@abit.com"
    const mailto_link = 'mailto:' + email
    window = window.open(mailto_link, 'emailWindow')
   /* if (window && window.open && !window.closed){
        window.close();
    }*/
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