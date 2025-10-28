import "./Stats.css"

import User from "../../assets/images/user.png"
import FourtyFive from "../../assets/images/45.png"
import Twelve from "../../assets/images/12+.png"
import Three from "../../assets/images/3k.png"

const Stats = () => {
  return (
    <div>
      <section id="stats">

<div className="container">
<div className="stats-wrapper">

{/* <!-- stats item 1 --> */}

    <div className="stats-item">

        <div className="icon">
            <img src={User} alt="user" />
        </div>
        <div className="info">
            <h5>1.5K</h5>
            <h6>Happy Customers</h6>

        </div>
    </div>


    {/* <!-- stats item 2 --> */}
    <div className="stats-item">

        <div className="icon">
            <img src={Three}  alt="user" />
        </div>
        <div className="info">
            <h5>3K</h5>
            <h6>Cases Done </h6>

        </div>
    </div>

{/* <!-- stats item 3 --> */}
        <div className="stats-item">

        <div className="icon">
            <img src={FourtyFive}  alt="45award" />
        </div>
        <div className="info">
            <h5>45</h5>
            <h6>Award Winning</h6>

        </div>
    </div>

{/* <!-- stats item 4 --> */}
        <div className="stats-item">

        <div className="icon">
            <img src={Twelve}   alt="12countries/" />
        </div>
        <div className="info">
            <h5>12+</h5>
            <h6>Countries Worldwide</h6>

        </div>
    </div>


</div>

</div>

</section>
    </div>
  )
}

export default Stats
