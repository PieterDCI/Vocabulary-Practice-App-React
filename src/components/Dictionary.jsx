import { useState } from "react";
import "../styling/dictionary.css"

import {wordsDE } from "./../localStorageDE"

function Dictionary() {

    const[searchWord, setSearchWord] = useState('');
    const [result, setResult] = useState('');

    const updateSearchWord = (e) => {setSearchWord(e.target.value)};

    const displaySearch = (e) => {
        e.preventDefault();
        if (searchWord !== '' && wordsDE.pieter.find(x => x.wrd === searchWord.toLowerCase() || x.tsl === searchWord.toLowerCase())) {
            let resultArray = wordsDE.pieter.find(x => x.wrd === searchWord.toLowerCase()) || wordsDE.pieter.find(x => x.tsl === searchWord.toLowerCase()) ;
            setResult(`The word ${resultArray.tsl.toUpperCase()} is translated to ${resultArray.art.toUpperCase() +' '+resultArray.wrd.toUpperCase()} in German`);
            setSearchWord('');
        } else if (searchWord !== '') {
            setResult(`Word not found`);
            setSearchWord('');
        } else {setResult('');}
    }

    return (
        <div className="mailer">
            <form>
               <input type="text" id="mailer" value={searchWord} onChange={updateSearchWord} required />
               <label htmlFor="mailer">Look up word...</label>
               <button className="sendBtn" onClick={displaySearch}><i className="icon-arrow-right"></i></button>
            </form>
            <div className="results">
                <h3>{result}</h3>
            </div>
        </div>
    )
}

export default Dictionary;