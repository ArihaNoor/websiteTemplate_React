import FooterCard from "../../Shared/FooterCard/FooterCard";
import "./Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  return (
    <div id="main-div">
      <div id="footer-main">
        <div id="left">
          <h1 class="left-heading">GET IN TOUCH</h1>
          <p>
            Please fill out the form below to send us an email and we will get
            back to you as soon as possible.
          </p>
          <div id="form">
            <input type="text" placeholder="Name" id="name"></input>
            <input type="email" placeholder="Email" id="email"></input>
            <br></br>
            <textarea
              id="textarea"
              rows="5"
              cols="84"
              placeholder="Message"
            ></textarea>
            <br></br>
            <button class="formbtn">SEND MESSAGE</button>
          </div>
        </div>
        <div id="right">
          <h4>Contact Info</h4>
          <FooterCard
            icon="https://cdn-icons-png.flaticon.com/128/8756/8756155.png"
            title="Address"
            desc="123 Main St, Anytown, USA"
          />
          <FooterCard
            icon="https://cdn-icons-png.flaticon.com/128/10496/10496781.png"
            title="Phone"
            desc="+1 123 456 7890"
          />
          <FooterCard
            icon="https://cdn-icons-png.flaticon.com/128/2164/2164967.png"
            title="Email"
            desc="info@Cyber Nexis"
          />
          <p>Techsoftwaresolutions.com</p>
        </div>
      </div>
      <div id="social-icons">
        <div class="circle">
          <i class="fas fa-brands fa-facebook icon"></i>
        </div>
        <div class="circle">
          <i class="fa-brands fa-twitter icon"></i>
        </div>
        <div class="circle">
          <i class="fa-brands fa-youtube icon"></i>
        </div>
      </div>
    </div>
  );
}

export default Footer;
