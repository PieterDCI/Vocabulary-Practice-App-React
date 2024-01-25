import { useState, useRef } from "react";
import "../../styling/tiles.css"

import { wordsDE } from "../../localStorageDE"

function PracticeMode() {

    const [wordToPractice, setWordToPractice] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('orange');
    const articleRef = useRef(null);
    const arrayRef = useRef(null);

    const getWord = () => {
        setBackgroundColor('orange');
        const length = wordsDE.pieter.length;
        arrayRef.current = Number(Math.floor(Math.random() * length));
        const newWord = wordsDE.pieter[arrayRef.current].wrd;
        articleRef.current = wordsDE.pieter[arrayRef.current].art;
        setWordToPractice(newWord)
    }

    const checkArticle = (e) => {
        setBackgroundColor(e.target.value === articleRef.current? 'green' : 'red');
        wordsDE.pieter[arrayRef.current].ct1 += 1;
        wordsDE.pieter[arrayRef.current].ct2 += e.target.value === articleRef.current? 1 : 0;
        console.log(wordsDE.pieter[arrayRef.current]);
    }

    if (wordToPractice === '') {
        return (
            <main>
                <div className="wrapper">
                    <button onClick={getWord}>Start Article Practice </button>
                </div>
            </main>
        )
    } else {
        return(
            <main>
                <div className="wrapper">
                    <div className="main-tile" style={{backgroundColor: backgroundColor}}><p>{wordToPractice}</p></div>
                    <div className="tiles">
                     <button className="tile" onClick={checkArticle} value={'der'}>DER</button>
                     <button className="tile" onClick={checkArticle} value={'die'}>DIE</button>
                     <button className="tile" onClick={checkArticle} value={'das'}>DAS</button>
                    </div>
                    <button onClick={getWord}>Next word</button>
                </div>
           </main>
        )
    }

    
}

export default PracticeMode;