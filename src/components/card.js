import React, { useEffect, useRef, useState } from "react";

const Card = (props) => {
  const { positon } = props
  const cardRef = useRef(null)
  const [transform, setTransform] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const card = cardRef.current
    const { offsetLeft, offsetTop } = card
    const { x, y } = positon
    setTransform({
      x: x - offsetLeft + 100,
      y: y - offsetTop + 100,
    })
  }, [positon])

  return (
    <div ref={cardRef} className='card' style={props.style}>
      <div className='light-cursor' style={{ transform: `translate(${transform.x}px, ${transform.y}px)` }}></div>
      { props.children }
    </div>
  )
}

export default Card