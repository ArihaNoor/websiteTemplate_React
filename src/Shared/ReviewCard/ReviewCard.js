import './ReviewCard.css';

function ReviewCard({img,comment,clientname}){
    return(
        <div id="rCard">
            <div class="rImage"><img src={img} height="60px" width="60px"></img></div>
            <div class="rLeft">
                <p>{comment}</p>
                <h6>{clientname}</h6>
            </div>
        </div>
    );
}

export default ReviewCard;