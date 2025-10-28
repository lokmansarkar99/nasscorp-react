import "./Services.css"

import bs_cover from "../../assets/images/bs-cover.jpg"
import pb from "../../assets/images/pb.png"
import user_blue  from "../../assets/images/user-blue.png"
import meter from "../../assets/images/meter.png"
const Services = () => {
  return (
    <div>
      <section id="bussiness-service">

<div className="container">

<div className="bussiness-service-wrapper">

<div className="top-heading">


<div className="top-heading-content">
    <h2>
    We are providing best 
business service.
</h2>

<p>Problems trying to resolve the conflict between the two major realms 
of classNameical physics: Newtonian mechanics </p>
</div>

</div>

<div className="bussiness-service-content">

<div className="bsc-img">

    <img src={bs_cover} alt="bs-cover" /> 

    <div className="bsii">
        <img src={pb} alt="" />
    </div>
</div>

<div className="bsc-txt">

<h2>Most trusted in 
our field</h2>

<p>Most calendars are designed for teams. Slate 
is designed for freelancers who want a 
simple way to plan their schedule.</p>

<div className="bsc-txt-it">
    <div className="bsc-txt-it-img"> <img src={user_blue}  alt="" /></div>
<div className="bsc-txt-it-txt">
    <h6>the quick fox jumps over the lazy 
dog </h6>
<p>Things on a very small scale ...</p>
</div>

</div>

<div className="bsc-txt-it">
    <div className="bsc-txt-it-img"> <img src={meter} alt="" /></div>
<div className="bsc-txt-it-txt">
    <h6>the quick fox jumps over the lazy 
dog </h6>
<p>Things on a very small scale ...</p>
</div>

</div>




</div>



    


</div>

</div>


</div>



</section>
    </div>
  )
}

export default Services
