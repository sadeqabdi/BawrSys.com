// vendor
import React, { Component, PropTypes } from 'react';
import GoogleMapReact from 'google-map-react';
//Local
import { Menu, Button, Card, Icon,Image, Form, TextArea } from 'semantic-ui-react';
const Marker = ({ text }) => (
	<div>
		<i className="material-icons">place</i>
	</div>
);

class Conectus extends Component {
	// render

	render () {
		// return
		return (
			<div>
				<div style={{background: '#e5f0f1', height: '100%'}}>
					<div style={{background: '#e5f0f1'}}>
						<h1 style={{textAlign: 'center', color: '#5a227e', position: 'relative', top: '60px'}}>
							ارتباط با ما
						</h1>
						<div style={{marginTop: '180px', height: '450px'}}>
							<Form size='mini'>
								<Form.Group unstackable widths={2}>
									<Form.Input  placeholder='نام' />
									<Form.Input  placeholder='نام خانوادگی' />
								</Form.Group>
								<Form.Group widths={2}>
									<Form.Input  placeholder='ایمیل' />
								</Form.Group>
								<Form>
									<TextArea placeholder='به ما بگویید.....' style={{ minHeight: 100 }} />
								</Form>
								<br/>
								<Button type='submit' className='But'>فرستادن</Button>
							</Form>
						</div>
					</div>
					<div id="map" style={{height: '370px', display: 'flex', width: '70%', marginBottom: '180px', margin: 'auto', background: '#e5f0f1'}}>
						<GoogleMapReact
							bootstrapURLKeys={{key: 'AIzaSyC2DOswCvcynX4cptnSiGYo6Qso6LVfNfI'}}
							defaultCenter={{
								lat: 36.2063,
								lng:44.0089
							}}
							defaultZoom={12}
						>
							<Marker
								lat={36.2063}
								lng={44.0089}
								text={'Harzaan office'}
							/>
						</GoogleMapReact>
					</div>
					<div style={{marginBottom: '180px'}}></div>
				</div>
				<div style={{
					border: '1px solid', height: '200px', background: '#20303c',color: 'white',
					borderBottom: 'none', borderRight: 'none', borderLeft: 'none'
				}}>
					<div style={{display: 'flex', justifyContent: 'center', marginTop: '60px'}}>
						<div style={{marginLeft: '70px'}}>
							<p>
								Sanandaj, Kurdistan Province, Iran
							</p>
						</div>
						<div style={{marginLeft: '160px'}}>
							<p>
								hellow@bawersystem.com
							</p>
						</div>
						<div style={{display: 'flex'}}>
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
					<div style={{display: 'flex',justifyContent: 'center',marginTop: '70px', fontSize: '12px', color: 'white'}}>
						<p>
							BY BAWERSYSTEM. PROUDLY CREATED WITH WIX.COM
						</p>
						<Icon  name='copyright'  size='small' />
					</div>
				</div>
			</div>
		);
	}
}

export default Conectus;