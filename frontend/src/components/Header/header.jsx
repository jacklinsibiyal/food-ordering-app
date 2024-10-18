import React from 'react'
import  './Header.css'

const header = () => {
  return (
    <div className='header'>
     <div className='header-contents' >
        <h2>Order your favourite food here</h2>
        <p>"Explore a diverse menu of mouth-watering dishes made with the finest ingredients. Order now for a delicious meal delivered straight to your door!" </p>
        <button>View Menu</button>
     </div>
    </div>
  )
}

export default header
