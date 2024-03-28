import React from 'react'

const Clock = ({color, time}) => {
  return (
    <h1 style={{color:color}}>
      Time is: {time}
    </h1>
  )
}

export default Clock
