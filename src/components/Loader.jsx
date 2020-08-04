import React, { useRef, useState, useEffect } from 'react'

function Loader() {
    const refCircle = useRef(null)
    const [circle, setCircle] = useState(null)

    useEffect(() => {

        const animateCircle = refCircle.current.animate && refCircle.current.animate([
            { transform: 'rotate(0)' },
            { transform: 'rotate(350deg)' },
        ], {
            duration: 800,
            iterations: Infinity,
            // easing: 'linear'
        }
        )
        setCircle(animateCircle)
    }, [setCircle])


    return (
        <div className='container'>
            <div className='controls'>
                <button className='play' onClick={() => (circle.play())}> Play </button>
                <button className='pause' onClick={() => (circle.pause())}> Pause </button>
                <button className='reverse' onClick={() => (circle.reverse())}> Reverse </button>
            </div>
            <div className="loader" ref={refCircle} >
            </div>
        </div>
    )

}

export default Loader
