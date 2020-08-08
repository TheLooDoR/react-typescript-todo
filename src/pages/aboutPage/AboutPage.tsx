import React from 'react'
import { Link } from 'react-router-dom'
import './AboutPage.scss'

export const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <h1 className="about-page__title">About Page</h1>
      <p className="about-page__description">
        Current web-application was developed by Nikita Oleynikov to practise
        TypeScript skills. It allows to manage personal tasks.
      </p>
      <h2>Application stack:</h2>
      <ul className="collection">
        <li className="collection-item">React</li>
        <li className="collection-item">TypeScript</li>
        <li className="collection-item">Redux</li>
        <li className="collection-item">Firebase</li>
        <li className="collection-item">React-materialize</li>
      </ul>
      <Link to="/" className="about-page__back">
        <button className="btn btn-large waves-effect">Go back</button>
      </Link>
    </div>
  )
}
