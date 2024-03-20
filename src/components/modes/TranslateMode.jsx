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
        const length = wordsDE.defaultUser.length;
        arrayRef.current = Number(Math.floor(Math.random() * length));
        const newWord = wordsDE.defaultUser[arrayRef.current].wrd;
        articleRef.current = wordsDE.defaultUser[arrayRef.current].art;
        pluralRef.current = wordsDE.defaultUser[arrayRef.current].pll;
        translationRef.current = wordsDE.defaultUser[arrayRef.current].tsl;
        setWordToPractice(newWord.charAt(0).toUpperCase() + newWord.slice(1))
    }

    const check = () => {
        setBackgroundColor(article.toLowerCase() === articleRef.current && plural.toLowerCase() === pluralRef.current && translation.toLowerCase() === translationRef.current ? 'green' : 'red');
        setArticle(''); setPlural(''); setTranslation('');
    }


    if (wordToPractice === '') {
        return (
            <main>
                <div className="wrapper">
                    <button onClick={getWord}>Practice <i className="icon-repeat"></i></button>
                </div>
            </main>
        )
    } else {
        return(
            <main>
                <div className="wrapper">
                    <div className="main-tile" style={{backgroundColor: backgroundColor}}><p>{wordToPractice}</p></div>
                    <div className="tiles" style={{flexDirection: 'column'}}>
                        <input type="text" placeholder="Enter article DE" value={article} onChange={changeArticle} />
                        <input type="text" placeholder="Enter plural DE" value={plural} onChange={changePlural}/>
                        <input type="text" placeholder="Enter translation EN" value={translation} onChange={changeTranslation} />
                    </div>
                    <button className="checkBtn" onClick={check}>Check</button>
                    <button className="nextBtn" onClick={getWord}>Next word</button>
                </div>
           </main>
        )
    }
}

export default TranslateMode;