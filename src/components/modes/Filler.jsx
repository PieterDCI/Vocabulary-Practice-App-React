// import { useContext } from 'react';
// import UserModeContext from '../contexts/UserModeContext';

function Filler() {

    // const {user} = useContext(UserModeContext);

    return (
        <main>
            <div className="wrapper" style={{backgroundColor: 'transparent'}}>
                <p>
                {/* {user? ' Please select one of the options above!' : 'Please log-in in order to use the app!'}  */}
                    Please select one of the options above!
                </p>
            </div>
        </main>
    )
};

export default Filler;