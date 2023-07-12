import "./FooterCards.css";

function FooterCard({ icon, title, desc }) {
  return (
    <div id="footer-card">
      <div class="card-top">
        <img src={icon} height="30px" width="30px"></img>
        <p>{title}</p>
      </div>
      <p>{desc}</p>
    </div>
  );
}

export default FooterCard;
