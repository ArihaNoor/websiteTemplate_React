import "./Features.css";
import Card from '../../Shared/Cards/Card.js';

function Features() {
  return (
    <div id="features">
      <h1 class="features-heading">FEATURES</h1>
      <div id="cards">
      <Card
        img="https://cdn-icons-png.flaticon.com/128/599/599419.png"
        title="Effective Communication"
        description="We prioritize clear and open communication throughout the development process to ensure your requirements are met and expectations are exceeded."
      />
      <Card
        img="https://cdn-icons-png.flaticon.com/128/8909/8909518.png"
        title="Scalable Solutions"
        description="Our software solutions are designed to scale with your business. Whether you're a startup or an enterprise, we have the expertise to handle your growth needs."
      />
      <Card
        img="https://cdn-icons-png.flaticon.com/128/1256/1256650.png"
        title="Collaborative Approach"
        description="We believe in collaborating closely with our clients to understand their unique challenges and deliver tailored solutions that align with their business goals."
      />
      <Card
        img="https://cdn-icons-png.flaticon.com/128/5859/5859094.png"
        title="Innovative Technologies"
        description="We stay up-to-date with the latest technologies and tools to provide innovative software solutions that drive efficiency, productivity, and competitive advantage."
      />
      </div>
    </div>
  );
}

export default Features;
