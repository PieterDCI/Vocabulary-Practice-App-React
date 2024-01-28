import { useState } from "react";
import "../styling/dictionary.css"



function Dictionary() {

    const[searchWord, setSearchWord] = useState('');

    const updateSearchWord = (e) => {
        setSearchWord(e.target.value)
    }

    return (
        <div className="mailer">
            <form>
               <input type="text" id="mailer" value={searchWord} onChange={updateSearchWord} required />
               <label htmlFor="mailer">Look up word...</label>
               <button className="sendBtn" name="submit"><i className="icon-arrow-right"></i></button>
            </form>
        </div>
    )
}

export default Dictionary;