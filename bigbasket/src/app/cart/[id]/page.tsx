import { useParams } from 'next/navigation'
import React, { useState } from 'react'

export default function Page() {
    const params= useParams()
    const {id}= params

    const [cart, setCart]= useState([])

  return (
    <div>P</div>
  )
}
