// vendor
import React, { Component, PropTypes } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import { Menu } from 'semantic-ui-react';
import Drawer from 'material-ui/Drawer';
import Typist from 'react-typist';
import Typed from 'typed.js';
import './Menus.css';
// Local
const s = {
	title:{
		float: 'left',
		color: 'block',
		textShadow:'2px 2px 2px #aaa',
		marginBottom: '30px'
	},
	container: {
		width: '100%',
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
		width: '100%'
	},
	header: {
		direction: 'rtl',
		width: '100%',
		position: 'fixed',
		display: 'block',
		top: '2px',
		right: '0',
		left: '0',
		height: '100px',
		overflow: 'hidden',
		transitionDuration: '.333s',
	},
	header2: {
		direction: 'rtl',
		width: '100%',
		position: 'fixed',
		display: 'block',
		background: 'rgba(0, 0, 0, 0.8)',
		top: '0',
		right: '0',
		left: '0',
		height: '50px',
		overflow: 'hidden',
		transitionDuration: '.333s',
		zIndex: 1,
		opacity: '0.9'
	},
	img: {
		position: 'relative',
		height: '100%',
		width: '45px',
		marginLeft: '45px',
	},
	company: {
		position: 'relative',
		top: '220px',
		right: '38%'
	},
	color: {
		color: 'white',
		fontWeight: 'bold'
	},
	color1: {
		color: 'black',
		fontWeight: 'bold'
	},
	color3: {
		color: '#e4ff00'

	},
	intro2: {
		content: '',
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		background : 'rgba(0,0,0,.4)'
	},



};
class Menus extends Component {

	componentDidMount(){
		window.addEventListener('scroll', this.handleChange);
		window.addEventListener('resize', this.handleChange2);
		scrollToComponent(this.proje, {offset: 0, align: 'bottom', duration: 500, ease:'inExpo'});
		// If you want to pass more options as props, simply add
		// your desired props to this destructuring assignment.
		const  strings  = [
			'Marketers Build Landing Pages|',
			'Designers Create W ebsites|',
			'Founders Create Logos|',
			'Marketers Build Landing Pages|',
			'Entrepreneurs Create Mobile Apps|',
			'Developers Learn New Skills|'
		];
		// You can pass other options here, such as typing speed, back speed, etc.
		const options = {
			strings: strings,
			typeSpeed: 50,
			backSpeed: 50
		};
		// this.el refers to the <span> in the render() method
		this.typed = new Typed(this.el, options);
	};
	state ={
		change: false,
		scroll: false,
		resize: false
	};
	handleToggle = () => this.setState({open: !this.state.open});

	handleClose = () => this.setState({open: false});

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	handleChange = () => {
		if (window.pageYOffset > 580)
			this.setState({
				scroll: true
			})
		else
			this.setState({
				scroll: false
			})
	};

	handleClick1 = () => {
		scrollToComponent(this.staff, {offset: -67, align: 'middle', duration: 1500, ease:'inExpo'})
		this.setState({
			open: false
		})
	};
	handleClick2 = () => {
		scrollToComponent(this.project, { offset: -50, align: 'top', duration: 1400})
		this.setState({
			open: false
		})
	};
	handleClick3 = () => {
		scrollToComponent(this.conectus, { offset: -250, align: 'middle', duration: 1000, ease:'inCirc'})
		this.setState({
			open: false
		})
	};
	handleChange2 = () => {
		if (window.innerWidth > 600){
			this.setState({
				resize: false
			})
		}else {
			this.setState({
				resize: true
			})
		}
	};

	// render
	render () {
		const { activeItem, scroll, resize } = this.state;
		// return
		return (
			<div>
				<div style={{height: '80px'}}>
					{
						resize
							?
							<div>
								<div
									onClick={this.handleToggle}
									style={scroll ? s.header2 : s.header}
								>
									<i style={{marginRight: '20px', marginTop: '15px', cursor: 'pointer'}} className="material-icons">reorder</i>
								</div>
								<Drawer
									docked={false}
									width={200}
									open={this.state.open}
									onRequestChange={(open) => this.setState({open})}
								>
									<Menu.Item
										name='صفحه ی اصلی'
										active={activeItem === 'صفحه ی اصلی'}
										onClick={this.handleItemClick && this.handleClick1}
									>
										<div style={scroll ? s.color : s.color1}>
											صفحه ی اصلی
										</div>
									</Menu.Item>
									<Menu.Item
										name='سرویس ها'
										active={activeItem === 'سرویس ها'}
										onClick={this.handleItemClick && this.handleClick1}
									>
										<div style={scroll ? s.color : s.color1}>
											سرویس ها
										</div>
									</Menu.Item>
									<Menu.Item
										name='پروژه ها'
										active={activeItem === 'پروژه ها'}
										onClick={this.handleItemClick && this.handleClick2}
									>
										<div style={scroll ? s.color : s.color1}>
											پروژه ها
										</div>
									</Menu.Item>
									<Menu.Item
										name=' ارتباط با ما '
										active={activeItem === 'ارتباط با ما'}
										onClick={this.handleItemClick && this.handleClick3}
									>
										<div style={scroll ? s.color : s.color1}>
											ارتباط با ما
										</div>
									</Menu.Item>
								</Drawer>
							</div>
							:
							<div
								style={scroll ? s.header2 : s.header}

							>
								<div style={{display: 'flex', justifyContent: 'space-between'}}>
									<div>
										<Menu
											secondary

										>
											<Menu.Item
												name='صفحه ی اصلی'
												active={activeItem ===  'صفحه ی اصلی' && s.color3}
												onClick={this.handleItemClick && this.handleClick1}
											>
												<div style={scroll ? s.color : s.color1 && this.handleItemClick ? s.color3 : s.color}>
													صفحه ی اصلی
												</div>
											</Menu.Item>
											<Menu.Item
												name='سرویس ها'
												active={activeItem === 'سرویس ها'}
												onClick={this.handleItemClick && this.handleClick1}
											>
												<div style={scroll ? s.color : s.color1}>
													سرویس ها
												</div>
											</Menu.Item>
											<Menu.Item
												name='پروژه ها'
												active={activeItem === 'پروژه ها'}
												onClick={this.handleItemClick && this.handleClick2}
											>
												<div style={scroll ? s.color : s.color1}>
													پروژه ها
												</div>
											</Menu.Item>
											<Menu.Item
												name=' ارتباط با ما '
												active={activeItem === 'ارتباط با ما'}
												onClick={this.handleItemClick && this.handleClick3}
											>
												<div style={scroll ? s.color : s.color1}>
													ارتباط با ما
												</div>
											</Menu.Item>
										</Menu>
									</div>
									<div>
										<img style={s.img} src= {require(`../../../public/image/finalLogo.png`)} />
									</div>
								</div>
							</div>
					}
				</div>
			</div>
		);
	}
}

export default Menus;