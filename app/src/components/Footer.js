import React from 'react'
import Section from './Section'
import { Link } from './../util/router.js'
import './Footer.scss'

function Footer(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="FooterComponent__container container">
        <div className="brand left">
          <Link to="/">
            <img src={props.logo} alt="Logo"></img>
          </Link>
        </div>
        <div className="links right">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="social right">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <span className="icon">
              <i className="fab fa-twitter"></i>
            </span>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <span className="icon">
              <i className="fab fa-facebook-f"></i>
            </span>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <span className="icon">
              <i className="fab fa-instagram"></i>
            </span>
          </a>
        </div>
        <div className="copyright left">{props.copyright}</div>
      </div>
    </Section>
  )
}

export default Footer
