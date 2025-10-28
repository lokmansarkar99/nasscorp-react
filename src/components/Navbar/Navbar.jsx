import './Navbar.css'

import Cart from "../../assets/images/cart.png"
import Search from "../../assets/images/search.png"

const Navbar = () => {
  return (
    <div>
      
    <nav>
    <div className="navbar">
        <div className="nav-container">
            
            
            <div className="nav-container-items">
                <div className="logo"> <p>Nasscorp</p> </div>
                
                
<div className="menu">
<div className="menu-item">
    <ul>
    <li> <a href="#">Home</a>  </li>
    <li><a href="#">Product</a></li>
    <li> <a href="#">Pricing</a></li>
    <li> <a href="#">Contact</a></li>
</ul>
<div className="menu-icon">
    <div className="menu-icon-img"> <img src={Search} alt=""/> </div>
    <div className="menu-icon-img"> <img src={Cart} alt=""/> </div>

</div>


</div>
</div>
</div>

</div>


</div>

</nav>


    </div>
  )
}

export default Navbar
