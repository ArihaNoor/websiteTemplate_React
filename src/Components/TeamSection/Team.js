import './Team.css';
import '../../Shared/ImageCard/ImageCard.js'
import ImageCard from '../../Shared/ImageCard/ImageCard.js';

function Team(){
    return(
        <div id="Team-Main">
             <h1 class="team-heading">MEET THE TEAM</h1>
            <p>Introducing Our Highly Skilled and Dedicated Team of Software Professionals</p>
            <div id="team-members">
                <ImageCard img="https://cyber-nexis-tech.netlify.app/img/team/01.jpg" name="John Doe" desgination="CEO & Founder" />
                <ImageCard img="https://cyber-nexis-tech.netlify.app/img/team/02.jpg" name="Mike Smith" desgination="CTO" />
                <ImageCard img="https://cyber-nexis-tech.netlify.app/img/team/03.jpg" name="Sarah Johnson" desgination="Lead Developer" />
                <ImageCard img="https://cyber-nexis-tech.netlify.app/img/team/04.jpg" name="Karen Brown" desgination="Project Manager" />
            </div>
        </div>
    );
}

export default Team;