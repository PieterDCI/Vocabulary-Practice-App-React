import "../styling/header.css"

function Header(){
    return (
        <header>
            <div className="brand">Artikelz practice app</div>
            <p>Choose language</p>
            <button className="loginBtn">Login</button>
        </header>
    )
}

export default Header;