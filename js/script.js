const main = () => {

}

const copyright = () => {
    const year = new Date().getFullYear();
    document.getElementById("copyright").textContent = `© ${year} Copyright`;
}


copyright();