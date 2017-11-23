// vendor
import React, { Component, PropTypes } from 'react';
import { Menu, Button, Card, Icon,Image, Form, TextArea } from 'semantic-ui-react';
const s ={
	footer: {
		display: 'block',
		height: '100%',
		width: '100%',
		background: 'url(https://umad.com/img/2015/1/dark-geometric-wallpaper-176-205-hd-wallpapers.jpg) fixed',
		backgroundSize: 'cover',
		position: 'relative',
	},
}
class Footer extends Component {
	// render
	render () {
		// return
		return (
			<div style={{height: '450px'}}>
				<div style={s.footer}>
					<div style={{display: 'flex', justifyContent: 'center', fontSize: '25px'}} className="footer">
						<div style={{marginLeft: '70px', marginTop: '110px'}} className="footer1" >
							<p style={{color: 'white'}}>
								Sanandaj, Kurdistan Province, Iran
							</p>
						</div>
						<div style={{marginLeft: '270px', marginTop: '110px'}} className="footer2" >
							<p style={{color: 'white'}}>
								hellow@bawersystem.com
							</p>
						</div>
						<div style={{display: 'flex', marginTop: '110px', color: 'white'}} className="footer3">
							<div>
								<Icon  name='linkedin'  size='small' />
							</div>
							<div>
								<Icon  name='twitter'  size='small' />
							</div>
							<div>
								<Icon  name='facebook f'  size='small' />
							</div>
						</div>
					</div>
					<div style={{display: 'flex', justifyContent: 'center',marginTop: '70px', fontSize: '12px', color: 'white'}}>
						<p style={{fontWeight: 'bold'}}>
							BY BAWERSYSTEM. PROUDLY CREATED WITH WIX.COM
						</p>
						<Icon  name='copyright'  size='small' />
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;