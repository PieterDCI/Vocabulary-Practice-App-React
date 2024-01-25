
let wordsDE;

function addWordDE (user, wordObj) {wordsDE[user].push(wordObj)};
function getData() {wordsDE = JSON.parse(localStorage.getItem('wordsObj')) || {}};
function saveData() {localStorage.setItem('wordsObj', JSON.stringify(wordsDE))};


export {addWordDE, wordsDE, getData, saveData};


// {
//     users: {pieter: "admin", johndoe: "pass1"},
//     pieter: [
//     {wrd:"Tisch",art:"der",pll:"Tische",tsl:"Table",ct1:0,ct2:0},
//     ],
//     johndoe: [
//         {wrd:"Tisch",art:"der",pll:"Tische",tsl:"Table",ct1:0,ct2:0},
//        {wrd:"Auto",art:"das",pll:"Autos",tsl:"Car",ct1:0,ct2:0}
//     ]
    
// }