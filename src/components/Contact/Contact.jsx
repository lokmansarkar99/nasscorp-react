import "./Contact.css"
import ContactImg from "../../assets/images/contact.png"

const Contact = () => {
  return (
    <div>
      <div id="contact-form">

<div className="container">

<div className="contact-form-wrapper">


    <div className="form-img">
<img src={ContactImg} alt="contact" />

    </div>

<div className="form-info">

    <form >

        <h2>Get A Free Quote Here</h2>


<div className="input-grps">

<div className="input-grp">
    <label for="name">Name*</label>
    <input type="text" placeholder="Full Name" />
</div>

<div className="input-grp">
    <label for="email">Email*</label>
    <input type="email" placeholder="example@gmail.com" />
</div>

<div className="input-grp">
    <label for="dept">Department*</label>
    <select name="dept" id="dept">
        <option value="" disabled selected>Please Select</option>
        <option value="cs">Computer Science</option>
        <option value="eng">Engineering</option>
        <option value="math">Mathematics</option>
    </select>
</div>


<div className="input-grp">
    <label for="time">Time*</label>
    <select name="time" id="time">
        <option value="" disabled selected>4.00 Available</option>
        <option value="" >6.00 Available</option>
        <option value="" >8.00 Available</option>
        <option value="" >9.00 Available</option>
      
    </select>
</div>

</div>


<button>  <a href="#">Book Appoinment</a></button>

    </form>
</div>

</div>

</div>

</div>
    </div>
  )
}

export default Contact
