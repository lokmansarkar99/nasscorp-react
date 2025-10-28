import "./Testimonial.css"

import fill_star from "../../assets/images/fillstar.svg"
import no_fill from "../../assets/images/nofill-star.svg"
import av1 from "../../assets/images/avatar1.png"
import av2 from "../../assets/images/avatar2.png"

const Testimonial = () => {
  return (
    <div>
      <section id="testimonial">

    <div className="container">

        <div className="top-heading">


<div className="top-heading-content">
    <h2>
 What Clients Say
</h2>

<p>Problems trying to resolve the conflict between 
the two major realms of classNameical physics: Newtonian mechanics  </p>
</div>

</div>
    </div>



    <div className="fluid-container">


        <div className="testimonial-wrapper">

            

            <div className="testimonial-items">
{/* <!-- Testimonial Item 1 --> */}
                    <div className="testimonial-item">
                <h4>Regina Miles</h4>
                <h5>Designer</h5>
                <div className="stars">
                    <div className="fill-star"><img src={fill_star} alt="fillstar" /></div>
                    <div className="fill-star"><img src={fill_star} alt="fillstar" /></div>
                    <div className="fill-star"><img src={fill_star} alt="fillstar" /></div>
                    <div className="fill-star"><img src={fill_star} alt="fillstar" /></div>

                    <div className="nofill-star"> <img src={no_fill} alt="nofillstar" /></div>

                </div>
<p>
    This proved to be impossible using the traditional 
concepts of space and time. Einstein developed a 
new view of time first and then space. This proved 
to be impossible using the traditional concepts of 
space and time. Einstein developed a new view 
of time first and then space.
</p>
<div className="avatar">
    <img src={av1} alt="avatar" />
</div>

                    </div>
{/* <!-- Testimonial Item 2 --> */}
                    <div className="testimonial-item">
                <h4>Regina Miles</h4>
                <h5>Designer</h5>
                <div className="stars">
                    <div className="fill-star"><img src={fill_star} alt="fillstar" /></div>
                    <div className="fill-star"><img src={fill_star} alt="fillstar" /></div>
                    <div className="fill-star"><img src={fill_star} alt="fillstar" /></div>
                    <div className="fill-star"><img src={fill_star} alt="fillstar" /></div>

                    <div className="nofill-star"> <img src={no_fill} alt="nofillstar" /></div>

                </div>
<p>
    This proved to be impossible using the traditional 
concepts of space and time. Einstein developed a 
new view of time first and then space. This proved 
to be impossible using the traditional concepts of 
space and time. Einstein developed a new view 
of time first and then space.
</p>
<div className="avatar">
    <img src={av2} alt="avatar" />
</div>

                    </div>
{/* <!-- Testimonial Item 3 --> */}
                    <div className="testimonial-item">
                <h4>Regina Miles</h4>
                <h5>Designer</h5>
                <div className="stars">
                    <div className="fill-star"><img src={fill_star} alt="fillstar" /></div>
                    <div className="fill-star"><img src={fill_star} alt="fillstar" /></div>
                    <div className="fill-star"><img src={fill_star} alt="fillstar" /></div>
                    <div className="fill-star"><img src={fill_star} alt="fillstar" /></div>

                    <div className="nofill-star"> <img src={no_fill} alt="nofillstar"/></div>

                </div>
<p>
    This proved to be impossible using the traditional 
concepts of space and time. Einstein developed a 
new view of time first and then space. This proved 
to be impossible using the traditional concepts of 
space and time. Einstein developed a new view 
of time first and then space.
</p>
<div className="avatar">
    <img src={av1} alt="avatar" />
</div>

                    </div>




            </div>



        </div>
    </div>




</section>
    </div>
  )
}

export default Testimonial
