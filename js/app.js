let nameArray = [];

function selectedCart(array) {

    const displayName = document.getElementById("display-name");
    displayName.innerHTML = '';

    const palyerCount = document.getElementById("palyer-count");
    palyerCount.innerText = array.length;


    for (let i = 0; i < array.length; i++) {
        const li = document.createElement('li');
        li.innerText = ` ${array[i].name}`
        displayName.appendChild(li);

    }


}

function addToSelect(elemnt) {

    const name = elemnt.parentNode.parentNode.children[0].innerText;


    const playerObj = {
        name: name,
    }

    nameArray.push(playerObj);

    if (nameArray.length > 5) {
        alert("You can not select more then 5 players.");


        return;
    }

    elemnt.setAttribute('disabled', true);

    selectedCart(nameArray);

}

document.getElementById("calculate-btn").addEventListener('click', function () {
    const perPlayerCost = getInputValueById("per-player");
    if (isNaN(perPlayerCost) === true) {
        alert("Please enter per players cost");
        return;
    }
    if (perPlayerCost <= 0) {
        alert("Please provide per player cost positive value.");
        return;
    }

    const displayName = document.getElementById("display-name");

    const players = displayName.getElementsByTagName("li");

    if (players.length === 0) {
        alert("Please select players");
        return;
    }
    const totalPlayerCost = perPlayerCost * players.length;

    console.log(totalPlayerCost);

    setTextValue("palyer-expenses", totalPlayerCost);
})

document.getElementById("total-cost").addEventListener('click', function () {
    const playerTotalCostElemnet = document.getElementById("palyer-expenses");
    const playerTotalCostString = playerTotalCostElemnet.innerText;
    const playerTotalCost = parseFloat(playerTotalCostString);

    if (playerTotalCost === 0) {
        alert("Please calculate player cost.");
        return;
    }

    const mangerCost = getInputValueById("manager");

    if (isNaN(mangerCost) === true) {
        alert("Please enter manager cost.");
        return;
    }
    if (mangerCost <= 0) {
        alert("Please provide manager cost positive value.");
        return;
    }

    const coachCost = getInputValueById("coach");

    if (isNaN(coachCost) === true) {
        alert("Please enter coach cost.");
        return;
    }
    if (coachCost <= 0) {
        alert("Please provide coach cost positive value.")
    }

    const totalCost = playerTotalCost + mangerCost + coachCost;

    setTextValue("total", totalCost);
})
