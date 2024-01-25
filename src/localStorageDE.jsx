
let wordsDE;

function addWordDE (user, wordObj) {wordsDE[user].push(wordObj)};
function getData() {wordsDE = JSON.parse(localStorage.getItem('wordsObj')) || {}};
function saveData() {localStorage.setItem('wordsObj', JSON.stringify(wordsDE))};

export {addWordDE, wordsDE, getData, saveData};


// {
//     users: {pieter: "admin", johndoe: "pass1"},
//     pieter: [
//     {wrd:"tisch",art:"der",pll:"tische",tsl:"table",ct1:0,ct2:0},
//     ],
//     johndoe: [
//         {wrd:"tisch",art:"der",pll:"tische",tsl:"table",ct1:0,ct2:0},
//        {wrd:"auto",art:"das",pll:"autos",tsl:"car",ct1:0,ct2:0}
//     ]
    
// };
