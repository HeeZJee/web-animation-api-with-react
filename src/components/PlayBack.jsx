import React, { useRef, useState, useEffect } from 'react'

function PlayBack() {
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

    range.current && range.current.addEventListener("input", (e) => {
        const value = e.target.value;
        progressValue.current.innerText = value;
        circle.playbackRate = +value;
    });

    return (
        <div className='container'>
            <div className='controls'>
                <button className='play' onClick={() => (circle.play())}> Play </button>
                <button className='pause' onClick={() => (circle.pause())}> Pause </button>
                <button className='reverse' onClick={() => (circle.reverse())}> Reverse </button>
            </div>
            <div className="loader" ref={refCircle} >
            </div>
            <div className='progress' >
                <label>
                    Speed Control:
                    <input id='range' ref={range} defaultValue={1} type="range" step='0.5' min='0.5' max='4.0'></input>
                </label>
                <div id='value' ref={progressValue}>{range.current.value}</div>
            </div>
        </div >
    )

}

export default PlayBack
