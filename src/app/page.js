import React from 'react'

const Home = () => {

  console.log(process.env.Name , 'VARIABLE')
  return (
    <div>Home : {process.env.NAME}</div>
  )
}

export default Home