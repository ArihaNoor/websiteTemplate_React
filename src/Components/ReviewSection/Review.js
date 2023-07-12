import ReviewCard from '../../Shared/ReviewCard/ReviewCard';
import './Review.css';

function Review(){
    return(
        <div id="Review-Main">
            <h1 class="review-heading">WHAT OUR CLIENT SAY</h1>
            <div id="feedback">
                <div id="fReview">
                <ReviewCard img="https://cyber-nexis-tech.netlify.app/img/testimonials/01.jpg" comment="Cyber Nexis Tech Software Solutions delivered a top-notch software solution that transformed our business processes. Their professionalism and expertise were truly impressive." clientname="- John Smith" />
                <ReviewCard img="https://cyber-nexis-tech.netlify.app/img/testimonials/05.jpg" comment="Cyber Nexis Tech Software Solutions' support team is always prompt and knowledgeable. They have been instrumental in keeping our software running smoothly and minimizing downtime." clientname="- David Wilson" />
                </div>
                <div id="sReview">
                <ReviewCard img="https://cyber-nexis-tech.netlify.app/img/testimonials/02.jpg" comment="Working with Cyber Nexis Tech Software Solutions was a fantastic experience. They understood our requirements perfectly and developed a mobile app that exceeded our expectations" clientname="- Sarah Johnson" />
                <ReviewCard img="https://cyber-nexis-tech.netlify.app/img/testimonials/06.jpg" comment="We are extremely satisfied with the custom software developed by Cyber Nexis Tech Software Solutions. It has significantly improved our business operations and productivity." clientname="- Jessica Thompson" />
                </div>  
                <div id="tReview">
                <ReviewCard img="https://cyber-nexis-tech.netlify.app/img/testimonials/03.jpg" comment="I highly recommend Cyber Nexis Tech Software Solutions for their exceptional database management services. They helped us streamline our data and improve overall efficiency." clientname="- Michael Brown" />
                <ReviewCard img="https://cyber-nexis-tech.netlify.app/img/testimonials/04.jpg" comment="The IT consulting services provided by Cyber Nexis Tech Software Solutions have been invaluable to our company. Their insights and recommendations have helped us stay ahead of the competition." clientname="- Emily Davis" />
                </div>  
            </div>
        </div>
    );
}

export default Review;