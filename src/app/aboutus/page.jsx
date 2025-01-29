import React from 'react'

async function TimeWait() {
  await new Promise((resolve)=>{
    setTimeout(resolve, 2000);
  })
}
const AboutUs = async () => {
  await TimeWait()
  return (
    <div>AboutUs</div>
  )
}

export default AboutUs