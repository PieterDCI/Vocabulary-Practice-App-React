import { useContext } from 'react';
import UserModeContext from './contexts/UserModeContext';

import AddMode from "./modes/AddMode";
import PracticeMode from "./modes/PracticeMode";
import TranslateMode from "./modes/TranslateMode";
import ReverseTrnslMode from "./modes/ReverseTrnslMode";
import Filler from './modes/Filler';

function Main() {

  const {mode} = useContext(UserModeContext);
    
    return (
        (mode === 'add')? <AddMode /> : 
          (mode === 'pract')? <PracticeMode /> :
            (mode === 'transl')? <TranslateMode /> :
              (mode === 'rtransl')? <ReverseTrnslMode /> : <Filler /> 
    )
}

export default Main;