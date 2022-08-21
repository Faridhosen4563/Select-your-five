let nameArray = [];

function selectedCart(array) {

    const displayName = document.getElementById("display-name");
    displayName.innerHTML = '';


    for (let i = 0; i < array.length; i++) {
        const li = document.createElement('li');
        li.innerText = ` ${array[i].name}`
        console.log(li);
        displayName.appendChild(li);
        console.log(displayName);
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
    console.log(name);

    const playerObj = {
        name: name,
    }

    nameArray.push(playerObj);
    console.log(nameArray);
    if (nameArray.length > 5) {
        alert("You can not select more then 5 players.");
        return;
    }

    selectedCart(nameArray);




}