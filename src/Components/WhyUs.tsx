import React from 'react'

import { DiResponsive } from "react-icons/di";


import whyus from '../css/whyus.module.scss'

function WhyUs() {
    return (
        <>
        <div className={whyus.why} >
            <DiResponsive style={{fontSize: '8rem', color: 'ffce34'}} />
            <span className={whyus.titleReason} >lorem lorem lorem</span>
            <span className={whyus.discReason} >ipsum dolor sit amet consectetur adipisicing elit. Doloremque eum facere, praesentium cumque ipsam quas corporis sint exercitationem repellendus, quis suscipit nobis consectetur quod atque sapiente iure labore? Sint, eius.
            </span>
        </div>
        </>
    )
}

export default WhyUs
