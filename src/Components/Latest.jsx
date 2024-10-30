import React from 'react'
import Card from './Card'

const Latest = () => {
  return (
    <section className='Latest '>
        <h1>Latest Product</h1>

        <div className="latest-grid">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </section>
  )
}

export default Latest