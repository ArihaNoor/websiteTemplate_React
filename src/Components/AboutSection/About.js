import './About.css';

function About(){
    return(
        <div class="main-div">
            <div class="img-about">
                <img src="https://cyber-nexis-tech.netlify.app/img/about.jpg" height="600px" width="600px"></img>
            </div>
            <div class="about-content">
                <h1>ABOUT US</h1>
                <p>Cyber Nexis Tech Software Solutions is a leading software development company specializing in creating cutting-edge solutions for businesses. Our team of experts is dedicated to delivering high-quality software that meets the unique needs of our clients.</p>
                <h3>Why Choose Us?</h3>
                <div class="bullets">
                    <div class="left-list">
                        <ul>
                            <li>Customized Solutions</li>
                            <li>Industry Expertise</li>
                            <li>Reliable Support</li>
                            <li>Agile Development</li>
                        </ul>
                    </div>
                    <div class="right-list">
                        <ul>
                            <li>Scalable Infrastrcture</li>
                            <li>User-Friendly Interfaces</li>
                            <li>Continuous Improvement</li>
                            <li>Data Security</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;