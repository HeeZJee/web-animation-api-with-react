import React, { useEffect, useRef } from 'react'

function EffectTiming() {

    const refFrame = useRef(false)
    const refPiece = useRef(false)

    const keyframesFrame = [
        { left: '50%', top: '0', },
        { left: 'calc(100% - 20px)', top: '50%', },
        { left: '50%', top: 'calc(100% - 20px)', },
        { left: '0', top: '50%', },
        { left: '50%', top: '0', },
    ]

    const keyframesPiece = [
        { borderColor: 'orange' },
        { borderColor: 'red' },
    ]

    useEffect(() => {
        const animatePiece = refPiece.current.animate(keyframesFrame, {
            duration: 4000,
            iterations: Infinity,
            easing: 'linear'
        })

        const animateFrame = refFrame.current.animate(keyframesPiece, {
            duration: animatePiece.effect.getComputedTiming().duration / 4,
            // duration: animatePiece.effect.getTiming().duration / 4,
            iterations: Infinity,
            easing: 'linear'
        })

    })



    return (
        <div ref={refFrame} className="frame">
            <div ref={refPiece} className='piece'></div>
        </div>
    )

}

export default EffectTiming;
