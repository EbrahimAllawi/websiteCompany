import app from "../css/app.module.scss";
import { Affix, BackTop } from "antd";
import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Service from "./Service";
import Project from "./Project";
import Member from "./Member";

import { FaArrowCircleUp } from "react-icons/fa";

import img1 from '../img/websites-design.jpg'
import img from '../img/websites-development.jpg'
import avatarM from '../img/avatrM.png'
import avatarF from '../img/avatarF.png'
import WhyUs from "./WhyUs";
import Footer from "./Footer";

function App() {
	// const [_category, setCategory] = useState(
	// 	<div style={{ position: "sticky", top: "10px", zIndex: 100 }}>no</div>
	// );
	// function ctegory(category: string) {
	// 	return (
	// 		<div style={{ position: "sticky", top: "20px", zIndex: 100 }}>
	// 			{category}
	// 		</div>
	// 	);
	// }

	// window.addEventListener("scroll", (e) => {
		
	// 	var services = document.getElementById("services");
	// 	var projects = document.getElementById("projects");
	// 	// var services: number = document.getElementById("services")!.offsetTop;
	// 	// var projects: number = document.getElementById("projects")!.offsetTop;
	// 	var topWindow = window.scrollY;
	// 	// console.log("window", topWindow);
	// 	console.log('element', services) 
	// 	// console.log('element', projects)
	// 	// if (topWindow > (services - 10) && topWindow < (services + 10)) {
	// 	// 	console.log("here");
	// 	// 	setCategory(ctegory('services'))
	// 	// 	return "";
	// 	// }
	// 	// if (topWindow > (projects - 10) && topWindow < (projects + 10)) {
	// 	// 	console.log("projects");
	// 	// 	setCategory(ctegory('projects'))
	// 	// 	return "";
	// 	// }
		
		
	// });

	return (
		<>
			<Navbar />
			<div className={app.container}>
				<div className={app.category} id="services">
					<Service nameService="Website Design" id="WebsiteDesign" />
					<Service
						nameService="Website Development"
						id="WebsiteDevelopment"
					/>
					<Service
						nameService="Mobile Design"
						id="MobileDesign"
					/>
					<Service
						nameService="Mobile Development"
						id="MobileDevelopment"
					/>
				</div>
				<div id="projects" className={`${app.category} ${app.projects}`}>
					<Project title={'Website Ui'} countProject={Math.ceil(Math.random()*15)}  />
					<Project title={'Website Development'} countProject={Math.ceil(Math.random()*15)}  />
					<Project title={'Mobile Ui'} countProject={Math.ceil(Math.random()*15)}  />
					<Project title={'Mobile Development'} countProject={Math.ceil(Math.random()*15)}  />
				</div>
				<div id="team" className={`${app.category} ${app.team}`} >
					<Member nameMember="Name Male" imgMember={avatarM} />
					<Member nameMember="Name Female" imgMember={avatarF} />
					<Member nameMember="Name Male" imgMember={avatarM} />
					<Member nameMember="Name Female" imgMember={avatarF} />
					<Member nameMember="Name Female" imgMember={avatarF} />
					<Member nameMember="Name Male" imgMember={avatarM} />
				</div>
				<div id="whyChooseUs" className={`${app.category} ${app.whyChooseUs}`} >
					<WhyUs />
					<WhyUs />
					<WhyUs />
					<WhyUs />
					<WhyUs />
				</div>
			</div>
			<Footer />
			<BackTop>
				<div className={app.backToTop}>
					<FaArrowCircleUp />
				</div>
			</BackTop>
		</>
	);
}

export default App;
