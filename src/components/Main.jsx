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
                      <div className="wrapper">
                          <p>select pls</p>
                      </div>
                </main>
    )
}

export default Main;