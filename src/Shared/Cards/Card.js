import './Cards.css';

function Card({img,title,description}) {
  return (
    <div id="card">
        <div class="avatar">
          <img src={img} height="50px" width="50px"></img>
        </div>
        <h4>{title}</h4>
        <p>{description}</p>
    </div>
  );
}

export default Card;
// 