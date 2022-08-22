document.getElementById("see-btn").addEventListener('click', function () {
    const elemnts = document.getElementsByClassName("view");
    for (const elemnt of elemnts) {
        elemnt.style.display = "block";
    }
})