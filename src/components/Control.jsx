import React, { useEffect, useRef, useState } from 'react'

function Control() {
    const refCircle = useRef(null)
    const [circle, setCircle] = useState(null)

    useEffect(() => {

        const animateCircle = refCircle.current.animate && refCircle.current.animate([
            { transform: 'translateY(0px) scaleY(1) scaleX(0.8)' },
            { transform: 'translateY(300px) scaleY(0.7) scaleX(1)', }
        ], {
            duration: 800,
            iterations: Infinity,
            direction: 'alternate',
            easing: 'ease-in'
        }
        )
        setCircle(animateCircle)
    }, [setCircle])


    return (
        <div className='container'>
            <div className='controls'>
                <button className='play' onClick={() => (circle.play())}> Play </button>
                <button className='pause' onClick={() => (circle.pause())}> Pause </button>
            </div>
            <div className="intro" ref={refCircle} >
            </div>

        </div>
    )

}

export default Control
