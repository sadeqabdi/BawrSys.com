import React, { Component, PropTypes } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import { Menu } from 'semantic-ui-react';
import './Header.css';
import Staff from '../Staff';
import Project from '../Porject';
import Conectus from '../Conectus';
import Footer from '../Footer';
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
		background: '#3D9199',
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
    	color: 'white',
		fontWeight: 'bold'
	},
	color1: {
    	color: 'black',
		fontWeight: 'bold'
	},



};
class Header extends Component {

	componentDidMount(){
		window.addEventListener('scroll', this.handleChange);
		scrollToComponent(this.proje, {offset: 0, align: 'bottom', duration: 500, ease:'inExpo'});
	};
	state ={
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

	handleClick1 = () => {
		scrollToComponent(this.staff, {offset: -137, align: 'middle', duration: 1500, ease:'inExpo'})
	};
	handleClick2 = () => {
		scrollToComponent(this.project, { offset: -70, align: 'top', duration: 1400})
	};
	handleClick3 = () => {
		scrollToComponent(this.conectus, { offset: -1200, align: 'middle', duration: 1000, ease:'inCirc'})
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
							</Menu>
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
		);
	}
}

export default Header;