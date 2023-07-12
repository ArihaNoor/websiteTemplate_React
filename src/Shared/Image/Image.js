import './Image.css'

function Image({img}){
    return(
        <div class="image">
            <img src={img}></img>
            <div class="overlay"></div>
        </div>
    );
}

export default Image;