'use client'

import { useState } from 'react'
import Confetti from 'react-dom-confetti'

const DesignPreview = () => {
  const [showConfetti, setShowConfetti] = useState(true)
  return (
    <div
      aria-hidden='true'
      className="className='pointer-events-none select-none absolute inset-0 overflow-hidden flex justify-center'">
      <Confetti
        active={showConfetti}
        config={{ elementCount: 200, spread: 90 }}
      />
    </div>
  )
}

export default DesignPreview
