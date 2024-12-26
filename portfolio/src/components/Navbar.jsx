import '../styles/Navbar.css';

const Navbar = () => {
    return (
      <nav className="navbar">
        
        <ul className="nav-buttons">
       
        <a href="#education" className="item"><li className="nav-item">Education</li></a>
       
        <a href="#exp" className="item"> <li className="nav-item">Experience</li> </a>
        <a href="#pro" className="item"> <li className="nav-item">Projects</li> </a>
          <a href="#cont" className="item">  <li className="nav-item">Contact</li></a>
          
        </ul>
      </nav>
    );
  };

export default Navbar;
