import './Gallery.css';
import Image from '../../Shared/Image/Image.js';

function Gallery(){
    return (
        <div class="gallery-main">
            <h1 class="gallery-heading">GALLERY</h1>
            <p>Discover Our Vast and Diverse Portfolio of Innovative Projects</p>
            <div id="gallery-images">
                <Image img="https://cyber-nexis-tech.netlify.app/img/portfolio/01-large.jpg" />
                <Image img="https://cyber-nexis-tech.netlify.app/img/portfolio/02-large.jpg" />
                <Image img="https://cyber-nexis-tech.netlify.app/img/portfolio/03-large.jpg" />
                <Image img="https://cyber-nexis-tech.netlify.app/img/portfolio/04-large.jpg" />
                <Image img="https://cyber-nexis-tech.netlify.app/img/portfolio/05-large.jpg" />
                <Image img="https://cyber-nexis-tech.netlify.app/img/portfolio/06-large.jpg" />
                <Image img="https://cyber-nexis-tech.netlify.app/img/portfolio/07-large.jpg" />
                <Image img="https://cyber-nexis-tech.netlify.app/img/portfolio/08-large.jpg" />
                <Image img="https://cyber-nexis-tech.netlify.app/img/portfolio/09-large.jpg" />
            </div>
        </div>
    );
}
export default Gallery;