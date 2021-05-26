import React from 'react'

export default function backdrop({show,clicked}) {
    return show? <div className="backdrop" onClick={clicked}></div>:null;
}
