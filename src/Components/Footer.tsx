import React from 'react'
import app from "../css/app.module.scss";
import footer from "../css/footer.module.scss";

import {
    Affix, 
    Layout
} from 'antd'
import { 
    FaCodepen, 
    FaFacebookF, 
    FaGithub, 
    FaYoutube
} from 'react-icons/fa';
const {Footer} = Layout

function _Footer() {
    return (
        <>
            
            <div id="followUs" className={`${footer.footer}`}>
                <div className={`${app.container}`} >
                    <div className={`${footer.footerContainer}`} >
                        <p>Made With By Ebrahim Allawi © 2021</p>
                        <ul className={`${footer.contacts}`}>
                            <li id={footer.facebook} ><FaFacebookF/></li>
                            <li id={footer.github} ><FaGithub/></li>
                            <li id={footer.codepen} ><FaCodepen/></li>
                            <li id={footer.youtube} ><FaYoutube/></li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default _Footer
