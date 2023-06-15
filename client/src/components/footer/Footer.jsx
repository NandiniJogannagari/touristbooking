import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>
            It's a good website to sell your properties and buy properties
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone: 9392812066</span>
          <span>YouTube: Amar's Youtube</span>
          <span>GitHub: Amar's git</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Continent: Asia</span>
          <span>Country: India</span>
          <span>Current Location: India</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer