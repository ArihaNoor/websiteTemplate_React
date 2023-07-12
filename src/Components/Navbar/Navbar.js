import './Navbar.css';

function Navbar(){
    return(
        <div class="container-fluid">
            <nav class="navbar fixed">
            <div class="logo">
                <p>CYBER NEXIS TECH</p>
            </div>
            <div class="nav-links">
            <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            </div>
    </nav>
        </div>
    );
}

export default Navbar;