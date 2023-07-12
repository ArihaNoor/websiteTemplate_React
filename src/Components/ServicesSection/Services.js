import "./Services.css";
import Card from "../../Shared/Cards/Card.js";

function Services() {
  return (
    <div id="services-main">
      <div class="upper">
        <h1 class="services-heading">Our Services</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
          dapibus leonec.
        </p>
      </div>
      <div class="services">
      <div class="first">
        <Card
          img="https://cdn-icons-png.flaticon.com/128/10653/10653514.png"
          title="Custom Software Development"
          description="We design and develop tailor-made software solutions to meet your unique business requirements. Our team works closely with you to ensure the software aligns perfectly with your goals and processes."
        />
        <Card
          img="https://cdn-icons-png.flaticon.com/128/6584/6584876.png"
          title="Cloud Computing"
          description="We offer cloud computing services to help you leverage the power of the cloud. Whether you need cloud migration, infrastructure setup, or ongoing management, we have you covered."
        />
        <Card
          img="https://cdn-icons-png.flaticon.com/128/5608/5608615.png"
          title="Mobile App Development"
          description="Our mobile app development team creates engaging and user-friendly applications for iOS and Android devices. From concept to launch, we ensure a smooth and seamless development process."
        />
      </div>
      <div class="second">
        <Card
          img="https://cdn-icons-png.flaticon.com/128/6797/6797109.png"
          title="Database Management"
          description="We provide efficient and secure database management services to organize and optimize your data. Our experts ensure the integrity and reliability of your databases, enabling better decision-making."
        />
        <Card
          img="https://cdn-icons-png.flaticon.com/128/11211/11211612.png"
          title="IT Consulting"
          description="Our IT consulting services help businesses make strategic technology decisions. We analyze your current setup, identify areas for improvement, and provide recommendations to enhance efficiency and productivity."
        />
        <Card
          img="https://cdn-icons-png.flaticon.com/128/2344/2344657.png"
          title="Maintenance & Support"
          description="We offer comprehensive maintenance and support services to keep your software running smoothly. Our dedicated support team is available to address any issues and provide timely assistance."
        />
      </div>
      </div>
    </div>
  );
}

export default Services;
