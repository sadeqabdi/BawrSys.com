import React, { Component, PropTypes } from 'react';
import { Tab } from 'semantic-ui-react';
import { Button, Dropdown, Menu } from 'semantic-ui-react'
import './Header.css';
class Header extends Component {
	state = {
		activeItem: 'home'
	};
	
	handleItemClick = (e, { name }) =>{
		this.setState({ activeItem: name });
	};
	render() {
		const { activeItem } = this.state;
		const panes = [
			{ menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
			{ menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
			{ menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
		];
		
		return (
			<div>
				<Menu size='huge'>
					<Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
					<Menu.Item name='Desgin site' active={activeItem === 'messages'} onClick={this.handleItemClick} />
					<Menu.Item name='contact us' active={activeItem === 'messages'} onClick={this.handleItemClick} />
					<Menu.Item name='amozesh' active={activeItem === 'messages'} onClick={this.handleItemClick} />
					<Menu.Item name='nemone kar' active={activeItem === 'messages'} onClick={this.handleItemClick} />
					<Menu.Item name='nemone kar' active={activeItem === 'messages'} onClick={this.handleItemClick} />
					
					
					
					<Menu.Menu position='right'>
						<Dropdown item text='Language'>
							<Dropdown.Menu>
								<Dropdown.Item>English</Dropdown.Item>
								<Dropdown.Item>Russian</Dropdown.Item>
								<Dropdown.Item>Spanish</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
						
						<Menu.Item>
							<Button primary>Sign Up</Button>
						</Menu.Item>
					</Menu.Menu>
				</Menu>
			</div>
		);
	}
}

export default Header;