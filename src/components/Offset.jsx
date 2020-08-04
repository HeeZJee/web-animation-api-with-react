import React, { useRef, useEffect } from 'react'

function Offset() {

    const refPiece = useRef(false)
    const keyframes = [
        { transform: 'translate(150px,0px)', },
        { transform: 'translate(280px,150px)', offset: 0.2 },
        { transform: 'translate(150px,280px)', offset: 0.3 },
        { transform: 'translate(0,150px)', offset: 0.7 },
        { transform: 'translate(150px,0)', },
    ]


    useEffect(() => {
        refPiece.current.animate(keyframes,
            {
                duration: 3000,
                iterations: Infinity,
                easing: 'linear'
            }
        )
    })



    return (
        <div className="offset">
            <div ref={refPiece} className='piece'></div>
        </div>
    )
}

export default Offset
