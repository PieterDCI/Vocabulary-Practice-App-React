import { useState } from "react";
import "../../styling/tiles.css"

function ReverseTrnslMode() {

    const [wordToPractice, setWordToPractice] = useState('');
    const getWord = () => setWordToPractice('TestWord')

    if (wordToPractice === '') {
        return (
            <main>
                <div className="wrapper">
                    <button onClick={getWord}>Reverse Practice </button>
                </div>
            </main>
        )
    } else {
        return(
            <main>
                <div className="wrapper">
                    <div className="main-tile"><p>{wordToPractice}</p></div>
                    <div className="tiles">
                     <div className="tile"><p>DER</p></div>
                     <div className="tile"><p>DIE</p></div>
                     <div className="tile"><p>DAS</p></div>
                    </div>
                </div>
           </main>
        )
    }
}

export default ReverseTrnslMode;