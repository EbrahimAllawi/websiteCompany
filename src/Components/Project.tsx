import React from 'react'
import img from '../img/websites-development.jpg'
import {
    Image, 
    Statistic
} from 'antd'

import project from '../css/project.module.scss'

interface IProps {
    title: string,
    countProject:number
}

{/* <img  style={{height: '100%'}} className={`ant-image-img`} src={props.srcImage} /> */}
function Project(props: IProps) {
    return (
        <>
            <>
                <Statistic style={{textAlign: 'center'}} title={props.title} value={props.countProject} />
            </>
        </>
    )
}

export default Project
