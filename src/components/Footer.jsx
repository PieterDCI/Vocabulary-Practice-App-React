import "../styling/footer.css"

const aStyle = {
    color: 'white',
    marginLeft: '5px'
}

function Footer() {
    return (
        <footer style={{display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem'}}>
            <p><i className="icon-code"></i> <a style={aStyle} href="https://github.com/PieterDCI/SPA-project" target="_blank" rel="noopener noreferrer">Link to Code</a></p>
            <p>All rights reserved 2024</p>
            <nav >
                <ul style={{display: 'flex', textDecoration: 'none', color: 'white'}}>
                   <li><a href="#" style={aStyle}><i className="icon-info-sign"></i> T&C</a></li>
                   <li><a href="#" style={aStyle}><i className="icon-question-sign"></i> FAQ </a></li>
                   <li><a href="#" style={aStyle}><i className="icon-comment"></i> Contact</a></li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;