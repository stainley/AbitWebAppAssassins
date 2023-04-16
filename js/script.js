
const main = () => {

    alert("Welcome Javascript")
}

const copyright = () => {
    const year = new Date().getFullYear();
    document.getElementById("copyright").textContent = `© ${year} Copyright`;
    alert(year);
}


copyright();