import { useState, useRef } from "react";
import "../../styling/tiles.css"

import { wordsDE } from "../../localStorageDE"

function ReverseTrnslMode() {

    const [wordToPractice, setWordToPractice] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('orange');
    const [article, setArticle] = useState('');
    const [noun, setNoun] = useState('');
    const [plural, setPlural] = useState('');

    const arrayRef = useRef(null);
    const articleRef = useRef(null);
    const pluralRef = useRef(null);
    const nounRef = useRef(null);

    const changeArticle = (e) => setArticle(e.target.value);
    const changeNoun = (e) => setNoun(e.target.value);
    const changePlural = (e) => setPlural(e.target.value);
    

    const getWord = () => {
        setBackgroundColor('orange');
        const length = wordsDE.pieter.length;
        arrayRef.current = Number(Math.floor(Math.random() * length));
        const newWord = wordsDE.pieter[arrayRef.current].tsl;
        articleRef.current = wordsDE.pieter[arrayRef.current].art;
        pluralRef.current = wordsDE.pieter[arrayRef.current].pll;
        nounRef.current = wordsDE.pieter[arrayRef.current].wrd;
        setWordToPractice(newWord)
    }

    const check = () => {
        setBackgroundColor(
            article.toLowerCase() === articleRef.current && 
            plural.toLowerCase() === pluralRef.current && 
            noun.toLowerCase() === nounRef.current ? 'green' : 'red');
        setArticle(''); setPlural(''); setNoun('');
    }


    if (wordToPractice === '') {
        return (
            <main>
                <div className="wrapper">
                    <button onClick={getWord}>Practice <i className="icon-undo"></i></button>
                </div>
            </main>
        )
    } else {
        return(
            <main>
                <div className="wrapper">
                    <div className="main-tile" style={{backgroundColor: backgroundColor}}><p>{wordToPractice}</p></div>
                    <div className="tiles" style={{flexDirection: 'column'}}>
                        <input type="text" placeholder="Enter article DE" value={article} onChange={changeArticle}/>
                        <input type="text" placeholder="Enter singular DE" value={noun} onChange={changeNoun}/>
                        <input type="text" placeholder="Enter plural DE" value={plural} onChange={changePlural} />
                    </div>
                    <button className="checkBtn" onClick={check}>Check</button>
                    <button className="nextBtn" onClick={getWord}>Next word</button>
                </div>
           </main>
        )
    }
}

export default ReverseTrnslMode;