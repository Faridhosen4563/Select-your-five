let nameArray = [];

function selectedCart(array) {

    const displayName = document.getElementById("display-name");
    displayName.innerHTML = '';


    for (let i = 0; i < array.length; i++) {
        const li = document.createElement('li');
        li.innerText = ` ${array[i].name}`
        displayName.appendChild(li);
        // if (array.length <= 5) {
        //     // const li = document.createElement('li');
        //     li.innerText = ` ${array[i].name}`
        //     console.log(li);

        //     console.log(displayName);
        // }
        // else {

        // }
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

    selectedCart(nameArray);

}

document.getElementById("calculate-btn").addEventListener('click', function () {
    const perPlayerCost = getInputValueById("per-player");

    const displayName = document.getElementById("display-name");

    const players = displayName.getElementsByTagName("li");
    const totalPlayerCost = perPlayerCost * players.length;
    console.log(totalPlayerCost);

    setTextValue("palyer-expenses", totalPlayerCost);
})