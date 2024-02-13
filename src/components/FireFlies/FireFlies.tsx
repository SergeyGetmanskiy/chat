import React from 'react'
import './FireFlies.css'

function FireFlies() {

  const render = () => {
    const result = [];
    for (let i = 0; i < 15; i++) {
      result.push(<div key={i} className='firefly'/>)
    }
    return result
  }
return render()
}

export default FireFlies
