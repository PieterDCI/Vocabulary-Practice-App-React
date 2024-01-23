import "../styling/aside.css"

function Aside() {
    return (
        <aside className="nav-social">
        <div className="sociallogo"><a href="https://www.facebook.com" target="_blank"><i className="icon-facebook-sign"></i></a></div>
        <div className="sociallogo"><a href="https://www.twitter.com" target="_blank"><i className="icon-twitter-sign"></i></a></div>
        <div className="sociallogo"><a href="https://www.instagram.com" target="_blank"><i className="icon-instagram"></i></a></div>
      </aside>
    )
}

export default Aside;