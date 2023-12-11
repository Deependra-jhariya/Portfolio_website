import React from 'react'
import { Link } from 'react-router-dom'
import "./NavbarStyle.css"
const Navbar = () => {
    return (
        <div style={styles.navbar}>
            <div>
                <h1>Portfolio.</h1>
            </div>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <a href="/" style={styles.navLink}>
              Home
            </a>
          </li>
          <li style={styles.navItem}>
            <a href="/about" style={styles.navLink}>
              About
            </a>
          </li>
          <li style={styles.navItem}>
            <a href="/contact" style={styles.navLink}>
              Contact
            </a>
          </li>
          <li style={styles.navItem}>
            <a href="/project" style={styles.navLink}>
              project
            </a>
          </li>
        </ul>
      </div>
  
    )
}

const styles = {
    navbar: {    
        display:'flex',
      padding: '15px',
      justifyContent:'space-between'
    },
    navList: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
     
    },
    navItem: {
      margin: 0,
      padding:'5px',
      paddingRight:'20px'
      
    },
    navLink: {
      textDecoration: 'none',
      color: 'white',
      fontWeight: 'bold',
      
    },
  };
export default Navbar