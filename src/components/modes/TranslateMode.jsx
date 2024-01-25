import { useState, useRef } from "react";
import "../../styling/tiles.css"

import { wordsDE } from "../../localStorageDE"

function TranslateMode() {

    const [wordToPractice, setWordToPractice] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('orange');
    const [article, setArticle] = useState('');
    const [plural, setPlural] = useState('');
    const [translation, setTranslation] = useState('');

    const arrayRef = useRef(null);
    const articleRef = useRef(null);
    const pluralRef = useRef(null);
    const translationRef = useRef(null);

    const changeArticle = (e) => setArticle(e.target.value);
    const changeTranslation = (e) => setTranslation(e.target.value);
    const changePlural = (e) => setPlural(e.target.value);
    

    const getWord = () => {
        setBackgroundColor('orange');
        const length = wordsDE.pieter.length;
        arrayRef.current = Number(Math.floor(Math.random() * length));
        const newWord = wordsDE.pieter[arrayRef.current].wrd;
        articleRef.current = wordsDE.pieter[arrayRef.current].art;
        pluralRef.current = wordsDE.pieter[arrayRef.current].pll;
        translationRef.current = wordsDE.pieter[arrayRef.current].tsl;
        setWordToPractice(newWord)
    }

    const check = () => {
        setBackgroundColor(article === articleRef.current && plural === pluralRef.current && translation === translationRef.current ? 'green' : 'red');
        setArticle(''); setPlural(''); setTranslation('');
    }


    if (wordToPractice === '') {
        return (
            <main>
                <div className="wrapper">
                    <button onClick={getWord}>Start Practice</button>
                </div>
            </main>
        )
    } else {
        return(
            <main>
                <div className="wrapper">
                    <div className="main-tile" style={{backgroundColor: backgroundColor}}><p>{wordToPractice}</p></div>
                    <div className="tiles" style={{flexDirection: 'column'}}>
                        <input type="text" placeholder="article" value={article} onChange={changeArticle} />
                        <input type="text" placeholder="plural" value={plural} onChange={changePlural}/>
                        <input type="text" placeholder="translation" value={translation} onChange={changeTranslation} />
                    </div>
                    <button onClick={check}>Check</button>
                    <button onClick={getWord}>Next word</button>
                </div>
           </main>
        )
    }
}

export default TranslateMode;