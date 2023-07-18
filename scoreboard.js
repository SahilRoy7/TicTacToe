import React from 'react'
import "./scoreboard.css"
export const Scoreboard = ({scores, xplaying}) => {
    const {Sahil, Bitu} =scores;
    return (
        <div className='scoreboard'>
        <span className={`score x-score ${!xplaying && "inactive"}`}>Sahil-{Sahil}</span>
        <span className={`score o-score ${xplaying && "inactive"}`}>Bitu-{Bitu}</span>
        
        </div>
    );
}