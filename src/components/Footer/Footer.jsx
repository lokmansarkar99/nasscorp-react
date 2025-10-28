import "./Footer.css"

import fb from "../../assets/images/ant-design_facebook-filled.svg"
import insta from "../../assets/images/ant-design_instagram-outlined.svg"
import tw from "../../assets/images/ant-design_twitter-outlined.svg"
import yt from "../../assets/images/carbon_logo-youtube.svg"

const Footer = () => {
  return (
    <div>
      <footer>
<div className="container">
<div className="footer-wrapper">

<div className="footer-items">
{/* <!-- Footer Item -1  --> */}
    <div className="footer-item">
        <h3>Get In Touch</h3>
        <p>the quick fox jumps over the 
lazy dog</p>



<div className="socials">
    <div className="icon"> <img src={fb} alt="social_icon" /></div>
    <div className="icon"> <img src={insta} alt="social_icon" /></div>
    <div className="icon"> <img src={tw} alt="social_icon" /></div>
    <div className="icon"> <img src={yt} alt="social_icon" /></div>
</div>
    </div>

{/* <!-- Footer Item -2  --> */}
    <div className="footer-item">
        <h3>Company info</h3>
   
            <ul>
             <li><a href="#">About Us</a></li>
             <li><a href="#">Career</a></li>
             <li><a href="#">We are hiring</a></li>
             <li><a href="#">Blog</a></li>
            </ul>


    </div>


{/* <!-- Footer Item -3  --> */}
    <div className="footer-item">
        <h3>Features</h3>
   
            <ul>
             <li><a href="#">Bussiness Marketing</a></li>
             <li><a href="#">User Analytic</a></li>
             <li><a href="#">Live Chat</a></li>
             <li><a href="#">Unlimited Support</a></li>
        
            </ul>


    </div>



{/* <!-- Footer Item -4  --> */}
    <div className="footer-item">
        <h3>Resources</h3>
   
            <ul>
             <li><a href="#">IOS & Android</a></li>
             <li><a href="#">Watch a demo</a></li>
             <li><a href="#">Customers</a></li>
             <li><a href="#">API</a></li>
        
            </ul>


    </div>

</div>




<div className="copyright">
    <p>Made With Love By Figmaland All Right Reserved </p>
</div>
</div>

</div>

</footer>
    </div>
  )
}

export default Footer
