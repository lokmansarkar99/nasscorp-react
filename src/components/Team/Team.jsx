import "./Team.css"

import team1 from "../../assets/images/team1.png"
import team2 from "../../assets/images/team2.png"
import team3 from "../../assets/images/team3.png"
import team4 from "../../assets/images/team4.png"

const Team = () => {
  return (
    <div>
      <section id="team">
<div className="container">

<div className="top-heading">


<div className="top-heading-content">
    <h2>
   Meet Our Team
</h2>

<p>Problems trying to resolve the conflict between 
the two major realms of classNameical physics: Newtonian mechanics </p>
</div>

</div>

<div className="team-wrapper">



<div className="team-person">
    <div className="team-avatar">
        <img src={team1} alt="avatar" />
    </div>
<h5>CO Founder</h5>
<h4>Avie Beaton</h4>
<p>the quick fox jumps 
over the lazy dog</p>

    
</div>



<div className="team-person">
    <div className="team-avatar">
        <img src={team2} alt="avatar" />
    </div>
<h5>Consultant</h5>
<h4>Ben Jonson</h4>
<p>the quick fox jumps 
over the lazy dog</p>

    
</div>


<div className="team-person">
    <div className="team-avatar">
        <img src={team3} alt="avatar" />
    </div>
<h5>Consultant</h5>
<h4>Rodney Stratton</h4>
<p>the quick fox jumps 
over the lazy dog</p>

    
</div>



<div className="team-person">
    <div className="team-avatar">
        <img src={team4} alt="avatar" />
    </div>
<h5>Consultant</h5>
<h4>Ben Jonson</h4>
<p>the quick fox jumps 
over the lazy dog</p>

    
</div>



</div>



</div>


</section>
    </div>
  )
}

export default Team
