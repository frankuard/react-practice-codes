import './Navbar.css'
// import { useEffect } from 'react'

type props = {
    color : String;
}

const Navbar = (props: props) => {

    // useEffect(() => {
    //   alert("Color was Changed!")
    // }, [props.color])
    
  return (
    <div>
      
      <nav> 
        <ul> 
            <li> Home</li>
            <li>About</li>
            <li>Contact</li>
            I am NavBar of {props.color}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
