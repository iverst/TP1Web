
window.onload = init;
function init() {
    const soloCheckBox = document.getElementById("check-solo");
    const multiCheckBox = document.getElementById("check-multi");
    const ordre = document.getElementById("ordre");

    updateList(soloCheckBox.checked, multiCheckBox.checked);
    sortGames(false);

    soloCheckBox.addEventListener('change',(event) => {
        updateList(soloCheckBox.checked, multiCheckBox.checked);
    })
    multiCheckBox.addEventListener('change',(event) => {
        updateList(soloCheckBox.checked, multiCheckBox.checked);

    })

    ordre.addEventListener('change',(event) => {
        if(ordre.value == 'alphabetique') {
            sortGames(false);
        }
        else{
            sortGames(true);
        }
    });
}

function updateList(isSoloChecked, isMultiChecked) {
    var gameList = document.getElementById("list-jeux-ul").children;
    for (var i = 0; i < gameList.length; i++) {
        gameList[i].style.display = 'none';
    }
    for (var i = 0; i < gameList.length; i++) {
        if(isSoloChecked && gameList[i].classList.contains("solo")) {
            gameList[i].style.display = 'block';
        }   
    }
    for (var i = 0; i < gameList.length; i++) {
        if(isMultiChecked && gameList[i].classList.contains("multi")) {
            gameList[i].style.display = 'block';
        }   
    }
    
}

function sortGames(isInverted) {
    var gameList = document.getElementById("list-jeux-ul").children;
    var ul = document.getElementById("list-jeux-ul");
    var gameListName = [];
    for(var i = 0; i < gameList.length; i++) {
        gameListName.push(gameList[i].children[0].getAttribute("alt"));
    }
    gameListName = gameListName.sort();
    
    var correctOrderGame = [];
    for (var i = 0; i < gameList.length; i++) {
        for (var j = 0; j < gameList.length; j++) {
            if (gameListName[i] == gameList[j].children[0].getAttribute("alt")) {
                correctOrderGame.push(gameList[j]);
            }
        }
    }

    if (isInverted) {
        correctOrderGame.reverse();
    }

    for (var i = 0; i < correctOrderGame.length; i++) {
        ul.removeChild(ul.children[0]);
    }
    
    for (var i = 0; i < correctOrderGame.length; i++) {
        ul.append(correctOrderGame[i]);
    }  
}
