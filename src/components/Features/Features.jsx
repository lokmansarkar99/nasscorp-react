import "./Features.css"

import bs_gr from "../../assets/images/bs-gr.png"
import two_tone from "../../assets/images/ant-design_shop-twotone.png"
import firm50 from "../../assets/images/50firms.png"
import cn from "../../assets/images/carbon_notebook.png"
import ar from "../../assets/images/ar.png"

const Features = () => {
  return (
    <div>
      <section id="features">

<div className="container">

    <div className="features-wrapper">
        {/* <!-- Feature Item 1 --> */}
        <div className="feature-item">

<div className="fe-img">
    <img src={bs_gr}  alt="" />
</div>


<h6>Bussiness Growing</h6>
<p>the quick fox jumps 
over the lazy dog</p>


<div className="more-btn">    
    <a href="#">More </a> <img src={ar} alt="" />
</div>


</div>
        {/* <!-- Feature Item 2 --> */}
        <div className="feature-item">

<div className="fe-img">
    <img src={two_tone} alt="dm" />
</div>


<h6>Digital Marketing</h6>
<p>the quick fox jumps 
over the lazy dog</p>


<div className="more-btn">    
    <a href="#">More </a> <img src={ar} alt="" />
</div>


</div>
        {/* <!-- Feature Item 3--> */}
        <div className="feature-item">

<div className="fe-img">
    <img src={firm50 } alt="50f" />
</div>


<h6>National top 50 firms</h6>
<p>the quick fox jumps 
over the lazy dog</p>


<div className="more-btn">    
    <a href="#">More </a> <img src="./images/icn arrow-right .icn-xs.png" alt="" />
</div>


</div>
        {/* <!-- Feature Item 4 --> */}
        <div className="feature-item fblack">

<div className="fe-img">
    <img src={cn} alt="" />
</div>


<h6>Digital Marketing</h6>
<p>the quick fox jumps 
over the lazy dog</p>


<div className="more-btn">    
    <a href="#">More </a>
</div>


</div>



    </div>

</div>

</section>
    </div>
  )
}

export default Features
