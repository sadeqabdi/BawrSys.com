// vendor
import React, { Component, PropTypes } from 'react';
// Local
import {  Button, Card, Icon,Image} from 'semantic-ui-react';
import ScrollEffect from 'react-scroll-effects';

class Staff extends Component {
	// render
	render () {
		// return
		return (
			<div>
				<div style={{background: '#e5f0f1', height: '100%'}}>
					<ScrollEffect animate="zoomInUp" queueClass="queue" duration="100" queueDuration=".9">
					<h1 style={{textAlign: 'center', color: 'black',position: 'relative', top: '60px'}}>
						آنچه ما انجام می دهیم ...
					</h1>
					<div
						style={{display: 'flex',
							justifyContent: 'space-around',
							marginTop: '180px', marginBottom: '30px'}}
					    className="queue"
					>
						<div>
							<div style={{background: '#ffffff', width: '300px', height: '170px	'}}>
								<p style={{textAlign: 'center', position: 'relative', top: '60px', fontSize: '35px'}}>
									طراحی وب سایت
								</p>
							</div>
							<div style={{width: '301px', height: '290px'}}>
								<Image src='https://assets.entrepreneur.com/content/3x2/1300/20150708172005-coding-working-workspace-apple-macintosh.jpeg' size='medium' />
							</div>
						</div>
						<div>
							<div style={{background: '#ffffff', width: '300px', height: '170px	'}}>
								<p style={{textAlign: 'center', position: 'relative', top: '60px', fontSize: '35px'}}>
									مدیریت پروژه
								</p>
							</div>
							<div style={{width: '301px', height: '290px'}}>
								<Image src='http://www.waters.com/webassets/cms/category/media/snapshot/project_management.jpg' size='medium' />
							</div>
						</div>
						<div>
							<div style={{background: '#ffffff', width: '300px', height: '170px	'}}>
								<p style={{textAlign: 'center', position: 'relative', top: '60px', fontSize: '35px'}}>
									طراحی گرافیک
								</p>
							</div>
							<div style={{width: '301px', height: '290px'}}>
								<Image src='http://www.ovocreatives.com/wp-content/uploads/2017/05/aaeaaqaaaaaaaatdaaaajdm2zjgzndkwlwfmmdgtnguzys1izjk4ltvhoge4mzjim2qxzg.jpg' size='medium' />
							</div>
						</div>
					</div>
					</ScrollEffect>
					<div style={{marginBottom: '100px'}}>
					</div>
				</div>
			</div>
		);
	}
}

export default Staff;