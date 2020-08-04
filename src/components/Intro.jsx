import React, { useRef, useEffect } from 'react'

function Intro() {

    const circle = useRef(null)

    useEffect(() => {

        circle.current.animate && circle.current.animate([

            { transform: 'translateY(0px) scaleY(1) scaleX(0.8)' },
            {
                transform: 'translateY(300px) scaleY(0.7) scaleX(1)',
            }
        ], {
            duration: 800,
            iterations: Infinity,
            direction: 'alternate',
            easing: 'ease-in'
        }
        )
        console.log(circle.animate && circle.animate)
    })


    return (
        <div className="container">
            <div className="intro" ref={circle} >
            </div>
        </div>
    )
}

export default Intro
