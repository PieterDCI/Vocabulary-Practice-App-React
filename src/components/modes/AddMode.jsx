import { useState } from "react";
import { addWordDE, wordsDE } from "../../localStorageDE"

import "../../styling/inputs.css";
import "../../styling/buttons.css";

function AddMode() {

    const [message, setMessage] = useState('');
    const [noun, setNoun] = useState('');
    const [article, setArticle] = useState('');
    const [plural, setPlural] = useState('');
    const [translation, setTranslation] = useState('');

    const changeNoun = (e) => setNoun(e.target.value);
    const changeArticle = (e) => setArticle(e.target.value);
    const changeTranslation = (e) => setTranslation(e.target.value);
    const changePlural = (e) => setPlural(e.target.value);

    const addWordToStorage = () => {
        if (wordsDE.pieter.find(x => x.wrd === noun.toLowerCase())) {
            setMessage('');
            alert('This word already exists, please add other word');
            setArticle(''); setNoun(''); setPlural(''); setTranslation('');
        } else {
            addWordDE('pieter', {wrd: noun.toLowerCase(), art: article.toLowerCase(), pll: plural.toLowerCase(), tsl: translation.toLowerCase(), ct1: 0, ct2: 0});
            setMessage(`${noun} was correctly added! You saved ${wordsDE.pieter.length} words`);
            setArticle(''); setNoun(''); setPlural(''); setTranslation('');
        }
    }

    return(
        <main>
            <div className="wrapper">
                <input type="text" placeholder="Enter Noun" value={noun} onChange={changeNoun}/>
                <input type="text" placeholder="Enter Article" value={article} onChange={changeArticle} />
                <input type="text" placeholder="Enter Plural" value={plural} onChange={changePlural} />
                <input type="text" placeholder="Enter Translation" value={translation} onChange={changeTranslation} />
                <button onClick={addWordToStorage} style={{marginTop: '15px'}}><i className="icon-plus"></i></button>
                <p style={{color: "green", marginTop: '10px', fontSize: '1.6rem'}}>{message}</p>
            </div>
       </main>
    )
}

export default AddMode;