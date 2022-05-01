import React, { useEffect, useState } from 'react'

const Home = () => {
  const [date,setDate] = useState(Date())
  console.log(date)
  return (
    <div>
      {date}
    </div>
  )
}

export default Home