import React, { useRef, useState, useEffect } from 'react'

function CurrentTime() {
    const refCircle = useRef(false)
    let [circle, setCircle] = useState(false)
    const range = useRef(false)
    const progressValue = useRef(false)
    useEffect(() => {

        const animateCircle = refCircle.current.animate([
            { transform: 'rotate(0)' },
            { transform: 'rotate(350deg)' },
        ], {
            duration: 1000,
            iterations: Infinity,
            easing: 'linear'
        })
        setCircle(animateCircle)
        range.current.focus()
    }, [setCircle, range])

    circle && circle.pause()

    range.current && range.current.addEventListener("input", (e) => {
        const value = e.target.value;
        progressValue.current.innerText = value;
        circle.currentTime = +value;
    });

    return (
        <div className='container'>
            <div className="loader" ref={refCircle} >
            </div>
            <div className='progress' >

                <label>
                    Speed Control:
                    <input id='range' ref={range} defaultValue={1} type="range" step='1' min='0' max='1000'></input>
                </label>
                <div id='value' ref={progressValue}>{range.current.value}</div>
            </div>
        </div>
    )

}

export default CurrentTime
