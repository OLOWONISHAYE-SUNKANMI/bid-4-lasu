import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className="notfound">
      <div className="container">
        <h2>Ooops... Page Not Found</h2>

        <button><Link>Return to HomePage</Link></button>
      </div>
    </section>
  )
}

export default NotFound