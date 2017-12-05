import React, { Component, PropTypes } from 'react';
import { MuiThemeProvider } from 'material-ui';
import scrollToComponent from 'react-scroll-to-component';
import { Menu } from 'semantic-ui-react';
import Drawer from 'material-ui/Drawer';
import './Header.css';
import Staff from '../Staff';
import Typist from 'react-typist';
import { Transition } from 'semantic-ui-react';
import Project from '../Porject';
import Conectus from '../Conectus';
import Footer from '../Footer';
import Typed from 'typed.js';
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
		height: '160%',
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
		top: '0',
		right: '0',
		left: '0',
		zIndex: 1,
		height: '80px',
		overflow: 'hidden',
		transitionDuration: '.333s',
	},
	header2: {
		direction: 'rtl',
		width: '100%',
		position: 'fixed',
		display: 'block',
		top: '0',
		right: '0',
		left: '0',
		background: 'black',
		color: 'black',
		zIndex: 1,
		height: '80px',
		overflow: 'hidden',
		transitionDuration: '.333s',
		boxShadow: '5px 5px 20px rgba(0, 0, 0,0.5)',
		opacity: 0.9
	},
	img: {
    	position: 'relative',
		height: '100%',
		width: '51px',
		marginTop: '5px',
		marginLeft: '45px',
	},
	company: {
    	position: 'relative',
		top: '220px',
		right: '38%'
	},
	color: {
    	color: 'black',
	},
	color1: {
    	color: 'black',
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
		background : 'rgba(0,0,0,.5)'
	},
	fColor: {
    	color: '#e4ff00'
	},
	fColor1: {
    	color: 'white'
	}


};

const transitions = [
	'fade', 'fade up', 'fade down', 'fade left', 'fade right',
];
const options = transitions.map(name => ({ key: name, text: name, value: name }));
class Header extends Component {

	componentDidMount(){
		window.addEventListener('scroll', this.handleChange);
		window.addEventListener('scroll', this.handleChange3);
		window.addEventListener('scroll', this.handleChange4);
		window.addEventListener('resize', this.handleChange2);
		window.addEventListener('scroll', this.handleChange5);
		window.addEventListener('scroll', this.handleChange6);
		scrollToComponent(this.proje, {offset: 0, align: 'bottom', duration: 500, ease:'inExpo'});
		// If you want to pass more options as props, simply add
		// your desired props to this destructuring assignment.
		const  strings  = [
			' طراحی و توسعه ی وب سایت',
			' طراحی و پیاده سازی دیزاین وب سایت',
			'طراحی و پیاده سازی لوگو',
			' طراحی و پیاده سازی اپلیکیشن موبایل',
			'آموزش طراحی وب سایت',

		];
		// You can pass other options here, such as typing speed, back speed, etc.
		const options = {
			strings: strings,
			typeSpeed: 80,
			backSpeed: 210,
		};
		// this.el refers to the <span> in the render() method
		this.typed = new Typed(this.el, options);
	};
	state ={
		change: false,
		scroll: false,
		scroll2: false,
		scroll3: false,
		scroll4: false,
		scroll5: false,
		resize: false,
		animation: transitions[0],
		duration: 500,
		visible: true,
		Reset: false
	};
	handleToggle = () => this.setState({open: !this.state.open});

	handleClose = () => this.setState({open: false});

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	handleChange = () => {
		if (window.pageYOffset > 110)
			this.setState({
				scroll: true
			})
		else
			this.setState({
				scroll: false
			})
	};
	handleChange6 = () => {
		if (window.pageYOffset >= 0)
			this.setState({
				scroll5: true,
			})
		else if(window.pageYOffset > 950)
			this.setState({
				scroll5: false
			})
	};
	handleChange3 = () => {
		if (window.pageYOffset > 950)
			this.setState({
				scroll2: true,
				scroll5: false
			})
		else
			this.setState({
				scroll2: false
			})
	};
	handleChange4 = () => {
		if (window.pageYOffset > 1750)
			this.setState({
				scroll3: true,
				scroll2: false,
				scroll5: false
			})
		else
			this.setState({
				scroll3: false
			})
	};
	handleChange5 = () => {
		if (window.pageYOffset > 3000)
			this.setState({
				scroll4: true,
				scroll2: false,
				scroll3: false,
				scroll5: false  
			})
		else
			this.setState({
				scroll4: false
			})
	};
	handleChange1 = (e, { name, value }) => this.setState({ [name]: value })

	handleVisibility = () => this.setState({ visible: !this.state.visible })

	handleClick1 = () => {
		scrollToComponent(this.staff, {offset: -150, align: 'middle', duration: 1500, ease:'inExpo'})
		this.setState({
			open: false
		})
	};
	handleClick2 = () => {
		scrollToComponent(this.project, { offset: -80, align: 'top', duration: 1400})
		this.setState({
			open: false
		})
	};
	handleClick3 = () => {
		scrollToComponent(this.conectus, { offset: -350, align: 'middle', duration: 1000, ease:'inCirc'})
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
	render() {
		const { activeItem, scroll, resize, scroll2, scroll3, scroll4, scroll5 } = this.state;
		return (
		<MuiThemeProvider>
			<div style={s.container}>
					<div style={s.intro}
					     className="intro"
					>
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
													active={activeItem ===  'صفحه ی اصلی'}
													onClick={this.handleItemClick && this.handleClick1}
												>
													<div style={scroll5 ? s.fColor : s.fColor1}>
														صفحه ی اصلی
													</div>
												</Menu.Item>
												<Menu.Item
													name='سرویس ها'
													active={activeItem === 'سرویس ها'}
													onClick={this.handleItemClick && this.handleClick1}
												>
													<div style={scroll2 ? s.fColor : s.fColor1}>
														سرویس ها
													</div>
												</Menu.Item>
												<Menu.Item
													name='پروژه ها'
													active={activeItem === 'پروژه ها'}
													onClick={this.handleItemClick && this.handleClick2}
												>
													<div style={scroll3 ? s.fColor : s.fColor1}>
														پروژه ها
													</div>
												</Menu.Item>
												<Menu.Item
													name=' ارتباط با ما '
													active={activeItem === 'ارتباط با ما'}
													onClick={this.handleItemClick && this.handleClick3}
												>
													<div style={scroll4 ? s.fColor : s.fColor1}>
														ارتباط با ما
													</div>
												</Menu.Item>
											</Menu>
										</div>
										<div style={{height: '100%'}}>
											<img style={s.img} src= {require(`../../../public/image/Bawer-system-orange-main.png`)} />
										</div>
									</div>
								</div>
						}
						<div style={s.intro2}>
							<div style={{marginRight: '2%'}}>
								<div
									style={{textAlign: 'right',
										marginTop: '22%',
										fontSize: '35px',
										direction: 'ltr',
									}}
								>
								<span style={{ color: 'white'}}>
								  به سایت شرکت باور سیستم خوش آمدید
								</span>
								</div>
								<br/>
								<div>
									<div className="wrap">
										<div
											style={{
												marginLeft: '2%',
												marginTop: '2%',
												fontSize: '25px',
												direction: 'rtl',
												fontWeight: 'bold',

											}}
											className="type-wrap">
										   <span style={{marginLeft: '18px', color: 'white', marginRight: '10px'}}>
									          حرفه ی ما
								          </span>
											<span
												style={{ whiteSpace: 'pre', color: '#e4ff00' }}
												ref={(el) => { this.el = el; }}
											>
							          </span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				<section className="staff" ref={(section) => {this.staff = section;}}>
					<div>
						<Staff/>
					</div>
				</section>
				<section className="project" ref={(section) => {this.project = section;}}>
					<div>
						<Project/>
					</div>
				</section>
				<section className="conectus" ref={(section) => {this.conectus = section;}}>
					<div>
						<Conectus/>
					</div>
				</section>
				<section className="footer" ref={(section) => {this.footer = section;}}>
					<div>
						<Footer/>
					</div>
				</section>
			</div>
		</MuiThemeProvider>

		);
	}
}

export default Header;