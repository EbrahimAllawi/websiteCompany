import React from 'react'
import {
    Image
} from 'antd'


import member from '../css/member.module.scss' 

interface IProps {
    imgMember: string
    nameMember: string
}

function Member(props: IProps) {
    return (
        <>
            <div className={member.member} >
                <Image style={{flexGrow:1}} src={props.imgMember} />
                <span className={member.info}>
                    <span className={member.name} >{props.nameMember}</span>
                    <span className={member.titleJob} >Title Job</span>
                </span>
            </div>
        </>
    )
}

export default Member
