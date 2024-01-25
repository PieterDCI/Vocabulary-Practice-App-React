import AddMode from "./modes/AddMode";
import PracticeMode from "./modes/PracticeMode";
import TranslateMode from "./modes/TranslateMode";
import ReverseTrnslMode from "./modes/ReverseTrnslMode";

function Main({ mode }) {
    
    return (
        (mode === 'add')? <AddMode /> : 
          (mode === 'pract')? <PracticeMode /> :
            (mode === 'transl')? <TranslateMode /> :
              (mode === 'rtransl')? <ReverseTrnslMode /> : 
                <main>
                    <div className="wrapper" style={{backgroundColor: 'transparent'}}>
                        <p><i className="icon-arrow-up"></i> Please select one of the options above! <i className="icon-arrow-up"></i></p>
                    </div>
                </main>
    )
}

export default Main;