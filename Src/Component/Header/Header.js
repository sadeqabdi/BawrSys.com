import React, { Component, PropTypes } from 'react';
import Scroll from 'react-scroll'; // Imports all Mixins
import {scroller} from 'react-scroll'; //Imports scroller mixin, can use as scroller.scrollTo()
import { Menu, Button, Card, Icon,Image, Form, TextArea } from 'semantic-ui-react';
import './Header.css';
import Staff from '../Staff';
import Project from '../Porject';
import Conectus from '../Conectus'
const s = {
    title:{
 	float: 'left',
	 color: 'block',
        textShadow:'2px 2px 2px #aaa',
		marginBottom: '30px'
 },
    container: {
		height: '100%',

	},
    intro: {
		display: 'block',
		height: '100%',
		width: '100%',
        background: 'url(https://i1.wp.com/www.hcmc.ae/wp-content/uploads/2017/07/rethinking-.jpg?fit=3000%2C2002&ssl=1) fixed',
		backgroundSize: 'cover',
		position: 'relative',
	},
    content2: {
      marginTop: '30px',
		marginBottom: '50px',
		width: '275px'
	},
	header: {
		direction: 'rtl',
		width: '100%',
		position: 'fixed',
		display: 'block',
		top: '0',
		right: '0',
		left: '0',
		height: '60px',
		overflow: 'hidden',
		transitionDuration: '.333s',
		zIndex: 4
	},
	header2: {
		direction: 'rtl',
		width: '100%',
		position: 'fixed',
		opacity:  0.9,
		display: 'block',
		background: '#333333',
		top: '0',
		right: '0',
		left: '0',
		height: '70px',
		overflow: 'hidden',
		transitionDuration: '.333s',
		zIndex: 4
	},
	img: {
    	position: 'relative',
		bottom: '8px'
	},
	company: {
    	position: 'relative',
		top: '220px',
		right: '38%'
	},
	color: {
    	color: '#e4ff00',
		fontWeight: 'bold'
	},
	color1: {
    	color: '#5a227e',
		fontWeight: 'bold'
	}

};
const extra = (
	<a>
		<Icon name='facebook square' />
	</a>
);
const extraa = (
	<a>
		<Icon name='facebook square' />
	</a>
);
// Or Access Link,Element,etc as follows
let Link       = Scroll.Link;
let Element    = Scroll.Element;
let Events     = Scroll.Events;
let scroll     = Scroll.animateScroll;
let scrollSpy  = Scroll.scrollSpy;
class Header extends Component {
	componentDidMount(){
		window.addEventListener('scroll', this.handleChange);
	};

	state = {
		change: false,
		scroll: false
	};


	handleItemClick = (e, { name }) => this.setState({ activeItem: name });
	handleChange = () => {
		if (window.pageYOffset > 500)
			this.setState({
				scroll: true
			})
		else
			this.setState({
				scroll: false
			})
	};
	scrollToService = () => {
		window.scrollTo(0, 570)
	};
	scrollToProject = () => {
		window.scrollTo(0, 1350)
	};
	scrollToContact = () => {
		window.scrollTo(0, 2600)
	};
	scrollToHome = () => {
		window.scrollTo(0, 0)
	};
	render() {
		const { activeItem, scroll } = this.state;
		return (
			<div style={s.container}>
				<div style={s.intro}>
				  <div
							style={scroll ? s.header2 : s.header}

						>
							<Menu secondary>
								<Menu.Item>
										<img style={s.img} src= 'https://upload.wikimedia.org/wikipedia/fr/5/5c/Brabus_logo_2.svg' />
								</Menu.Item>

								<Menu.Item
									name='صفحه ی اصلی'
									active={activeItem === 'صفحه ی اصلی'}
									onClick={this.handleItemClick && this.scrollToHome}
								>
									<div style={scroll ? s.color : s.color1}>
										صفحه ی اصلی
									</div>
								</Menu.Item>

								<Menu.Item
									name='سرویس ها'
									active={activeItem === 'سرویس ها'}
									onClick={this.handleItemClick && this.scrollToService}
								>
									<div style={scroll ? s.color : s.color1}>
										سرویس ها
									</div>
								</Menu.Item>

								<Menu.Item
									name='پروژه ها'
									active={activeItem === 'پروژه ها'}
									onClick={this.handleItemClick && this.scrollToProject}
								>
									<div style={scroll ? s.color : s.color1}>
									پروژه ها
									</div>
								</Menu.Item>
								<Menu.Item
									name=' ارتباط با ما '
									active={activeItem === 'ارتباط با ما'}
									onClick={this.handleItemClick && this.scrollToContact}
								>
									<div style={scroll ? s.color : s.color1}>
										ارتباط با ما
									</div>
								</Menu.Item>

							</Menu>
						</div>
			    </div>
				<div>
					<Staff/>
				</div>
				<div>
					<Project/>
				</div>
				<div>
					<Conectus/>
				</div>
			</div>
		);
	}
}

export default Header;