import { useState } from "react";
import "../../styling/inputs.css";
import "../../styling/buttons.css";

function AddMode() {

    const [noun, setNoun] = useState('');
    const [article, setArticle] = useState('');
    const [plural, setPlural] = useState('');
    const [translation, setTranslation] = useState('');

    const changeNoun = (e) => setNoun(e.target.value);
    const changeArticle = (e) => setArticle(e.target.value);
    const changeTranslation = (e) => setTranslation(e.target.value);
    const changePlural = (e) => setPlural(e.target.value);

    const addWordToStorage = () => {
        return (null)
    }

    return(
        <main>
            <div className="wrapper">
                <input type="text" placeholder="Enter Noun" value={noun} onChange={changeNoun}/>
                <input type="text" placeholder="Enter Article" value={article} onChange={changeArticle} />
                <input type="text" placeholder="Enter Plural" value={plural} onChange={changePlural} />
                <input type="text" placeholder="Enter Translation" value={translation} onChange={changeTranslation} />
                <button onClick={addWordToStorage} style={{marginTop: '15px'}}><i className="icon-plus"></i></button>
            </div>
       </main>
    )
}

export default AddMode;