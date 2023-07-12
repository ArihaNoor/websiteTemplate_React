
import Navbar from "./Components/Navbar/Navbar.js";
import MainSection from "./Components/MainSection/MainSection.js";
import Features from "./Components/FeaturesSection/Features.js";
import About from "./Components/AboutSection/About.js";
import Services from "./Components/ServicesSection/Services.js";
import Gallery from "./Components/GallerySection/Gallery.js";
import Review from "./Components/ReviewSection/Review.js";
import Team from "./Components/TeamSection/Team.js";
import Footer from "./Components/Footer/Footer.js";

function App(){
    return (
        <div>
            <Navbar />
            <MainSection />
            <Features />
            <About />
            <Services />
            <Gallery />
            <Review />
            <Team />
            <Footer />
        </div>
        
    );
}

export default App;