const main = () => {

}

const copyright = () => {
    const year = new Date().getFullYear();
    document.getElementById("copyright").textContent = `© ${year} Abit. All Rights Reserved.`;
}


copyright();