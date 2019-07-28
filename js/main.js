const winnerCombination = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,4,8]];
const players = ["O", "X"];
let winnerBool = true;

let table = document.querySelector('table');
let resetBtn = document.querySelector('.resetBtn');

// console.log("table console.log(): ", table);

table.addEventListener('click', tableClickHandler);
resetBtn.addEventListener('click', handleResetGame);

let turn = 0;
function tableClickHandler(evt) {
    // console.log(`evt.x: ${evt.x} \n evt.y ${evt.y}`);
    // console.log("evt.target.id: ", evt.target.id);
    let td = document.getElementById(`${evt.target.id}`);
    if(!td.innerText && winnerBool) {
        turn++;
        td.innerText = players[turn % 2];
        handleWinner(players[turn%2]);
    }
}

function handleWinner(winner) {
    for(let i = 0; i <= winnerCombination.length; i++){
        if(document.getElementById(winnerCombination[i][0]).innerText === winner && 
        document.getElementById(winnerCombination[i][1]).innerText === winner &&
        document.getElementById(winnerCombination[i][2]).innerText === winner){
            winnerBool = false;
            document.querySelector(".placard").innerText = `Player ${winner} Won`
            document.querySelector(".placard").style.display = "block";
        }
    }
}

function handleResetGame(){
    document.querySelector('.placard').style.display = "none";
    winnerBool = true;
    for(let i = 0; i < 9; i++) {
        document.getElementById(i).innerText = "";
    }
}

// =================OBJECT IN JS==============
// var adib = {girlFriend: "arina", car: {
//     engine: "V6",
//     name: "Challenger",
//     workingCondition: true,
//     color: "Gray"
// }, friend: "meisam"};

// console.log(adib.car.workingCondition);

console.log("commit changes")

/*
git add -A
git commit -m"added a new button"
git push origin master

*/