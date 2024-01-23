import "../styling/buttons.css"

const menuStyle = {
    height: '150px',
    backgroundColor: 'rgba(39, 55, 77, 0.9)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px'
}

function SelectionMenu({ setMode }) {

    function changeMode(e) {
        setMode(e.target.value)
    }
    
    return(
        <nav style={menuStyle} className="modeSelector">
            <button onClick={changeMode} value={'add'}><i className="icon-plus"></i> Add words</button>
            <button onClick={changeMode} value={'pract'}><i className="icon-th-large"></i> Practice</button>
            <button onClick={changeMode} value={'transl'}><i className="icon-repeat"></i> Translate</button>
            <button onClick={changeMode} value={'rtransl'}><i className="icon-undo"></i> Reverse</button>
        </nav>
    )
}

export default SelectionMenu;