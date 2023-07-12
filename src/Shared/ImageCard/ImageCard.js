import './ImageCard.css';

function ImageCard({img,name,desgination}){
    return(
        <div id="image-card">
            <img src={img}></img>
            <h5>{name}</h5>
            <p>{desgination}</p>
        </div>
    );
}

export default ImageCard;