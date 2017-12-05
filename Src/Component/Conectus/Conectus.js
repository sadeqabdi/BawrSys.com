// vendor
import React, { Component, PropTypes } from 'react';
import GoogleMapReact from 'google-map-react';
//Local
import { Button, Form, TextArea } from 'semantic-ui-react';
const Marker = ({ text }) => (
	<div>
		<i className="material-icons">place</i>
	</div>
);

class Conectus extends Component {
	// render
	state = {
		email: '',
		emailErrorText: '',
		message: '',
	};
	storeEmail = (e, newVal) => {
		const pattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
		if (newVal.match(pattern)) {
			this.setState({ emailErrorText: '', email: newVal });
		} else {
			this.setState({ emailErrorText: content.invalidValue, email: '' });
		}
	};

	render () {
		// return
		return (
			<div>
				<div style={{background: '#e5f0f1', height: '100%'}}>
					<div style={{background: '#e5f0f1'}}>
						<h1 style={{textAlign: 'center', color: 'black', position: 'relative', top: '60px'}}>
							ارتباط با ما
						</h1>
						<div style={{marginTop: '180px', height: '450px'}}>
							<Form size='mini'>
								<Form.Group unstackable widths={2}>
									<Form.Input  placeholder='نام' />
									<Form.Input  placeholder='نام خانوادگی' />
								</Form.Group>
								<div onClick={this.storeEmail}>
									<Form.Group widths={2}>
										<Form.Input   placeholder='ایمیل' />
									</Form.Group>
								</div>
								<Form>
									<TextArea placeholder='به ما بگویید.....' style={{ minHeight: 100 }} />
								</Form>
								<br/>
								<div style={{textAlign: 'center'}}>
									<Button type='submit' className='But'>فرستادن</Button>
								</div>
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
			</div>
		);
	}
}

export default Conectus;