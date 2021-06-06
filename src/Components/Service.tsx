import React, { useEffect } from "react";
import service from "../css/service.module.scss";
import websitesD from '../img/websites-design.jpg'

import {
    Card,
    Image
} from 'antd'
const {Meta} = Card
interface IService {
    nameService: string
    id: string
}
function changeStyleFirstLetter (id:string) {
    var descripeServices = document.getElementById(id)
    var contentDescripeServices = ''
    var newHtml = ""
        contentDescripeServices += descripeServices!.innerText
    var firstLetter = contentDescripeServices.split(' ')
    console.log(firstLetter)
    firstLetter.forEach(word => {
        console.log(word.substring(1))
        newHtml += `
        <span class="${service.firstLetter}" >${word[0]}</span>${word.substring(1)}
        `
    });
    console.log(newHtml)
    descripeServices!.innerHTML = newHtml
}

export default function Service(props: IService) {
    useEffect(() => {
        changeStyleFirstLetter(props.id)
    }, []);
	return (
		<>
		<div id="services" className={service.nameService}>{props.nameService}</div>
        <div className={service.service} >
            <Image style={{height: '100%'}} src={websitesD} className={service.imgService }/>
            <div id={props.id} className={service.describe}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem animi numquam necessitatibus distinctio assumenda doloremque accusantium commodi vitae voluptatibus nihil?
            </div>
        </div>
		</>
	);
}
