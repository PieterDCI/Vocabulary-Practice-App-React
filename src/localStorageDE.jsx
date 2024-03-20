
let wordsDE;

/** Takes a (username, not ready yet) and a new word as arguments. Adds the word to the user-linked saved words*/

// function addWordDE (user, newWordObj) {
function addWordDE (newWordObj) {
    // wordsDE[user].push(newWordObj)
    wordsDE.defaultUser.push(newWordObj)
};

/** This sets wordsDE variable to localStorage data if there is any, otherwise starter object */
function getData() {
    wordsDE = JSON.parse(localStorage.getItem('wordsObj')) || {defaultUser: []}
};

/** This saves the current wordsDE(object) data into the localstorage as 'wordsObj' */
function saveData() {
    localStorage.setItem('wordsObj', JSON.stringify(wordsDE))
};


export {addWordDE, wordsDE, getData, saveData};


