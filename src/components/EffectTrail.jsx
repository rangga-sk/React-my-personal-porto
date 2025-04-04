import './trail.css'
// import { useState, useEffect } from 'react';

export default function EffectTrail() {
    return (
      <>
        <div className='containerTrail'>
            <svg width="300" height="200" viewBox="0 0 300 200">
                {/* <path className='pathSvg' d="M 0 150 Q 400 50, 640 100"/> */}
                <path className='pathSvg' d="M 50 150 Q 250 150, 240 -200"/>
            </svg>
        </div>
      </>
    )
}