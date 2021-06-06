import React from "react";
// import icon from '../icon/align.ico'

import { BarsOutlined, LeftCircleTwoTone } from "@ant-design/icons";

import nav from "../css/nav.module.scss";
import { FaAlignJustify } from "react-icons/fa";

import { Button, Layout, Dropdown, Menu, Affix } from "antd";

const { Header, Content, Footer } = Layout;

function scrolTo(id: string) {
	var top = document.getElementById(id)!.offsetTop - 100
	window.scrollTo({
		top ,
		behavior: 'smooth'
	})
	
}

export default function Navbar() {
	const menuNav = (
		<Menu>
			<Menu.Item>
				<Button onClick={()=> {scrolTo('services')}} type="link">
					Services
				</Button>
			</Menu.Item>
			
			<Menu.Item>
				<Button onClick={()=> {scrolTo('projects')}} type="link">
					Projects
				</Button>
			</Menu.Item>
			<Menu.Item>
				<Button onClick={()=> {scrolTo('team')}} type="link">
					Team
				</Button>
			</Menu.Item>
			<Menu.Item>
				<Button onClick={()=> {scrolTo('whyChooseUs')}} type="link">
					Why Us
				</Button>
			</Menu.Item>
			<Menu.Item>
				<Button onClick={()=> {scrolTo('followUs')}} type="link">
					Follow Us
				</Button>
			</Menu.Item>
		</Menu>
	);
	return (
		<>
			<Affix offsetTop={0}>
				<Header className={nav.nav}>
					<span className={nav.logo}>Company Name</span>
					<Dropdown overlay={menuNav}>
						<FaAlignJustify className={nav.align} />
					</Dropdown>
				</Header>
			</Affix>
		</>
	);
}
