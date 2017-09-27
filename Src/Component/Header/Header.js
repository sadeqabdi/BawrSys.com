import React, { Component, PropTypes } from 'react';
import { Menu, Button, Card, Icon,Image, Form, TextArea } from 'semantic-ui-react';
import './Header.css';
const s = {
    title:{
 	float: 'left',
	 color: '#5a227e',
        textShadow:'2px 2px 2px #aaa',
		marginBottom: '30px'
 },
    container: {
       height: '20px',
		margin: '30px 50px',
	},
    intro: {
    	marginTop: '30px',
		width: '100%',
        backgroundImage:
			'url(https://www.hotfootdesign.co.uk/wp-content/uploads/2016/01/Hotfoot-Team.jpg)',
		height: '740px'
	},
    content2: {
      marginTop: '30px',
		marginBottom: '50px',
		width: '275px'
	},

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

class Header extends Component {
	state = {
		activeItem: 'home'
	};
	
	handleItemClick = (e, { name }) =>{
		this.setState({ activeItem: name });
	};
	render() {
		const { activeItem } = this.state;
		return (
			<div style={s.container}>
				<div>
					<h1 style={s.title}>
						باور سیستم
					</h1>
				</div>
				<div style={{direction: 'rtl'}}>
					<Menu secondary>
						<Menu.Item
							name='صفحه ی اول' active={activeItem === 'صفحه ی اول'} onClick={this.handleItemClick}
						/>
						<Menu.Item
							name='درباره ی ما' active={activeItem === 'درباره ی ما'} onClick={this.handleItemClick}
						/>
						<Menu.Item
							name='سرویس ها' active={activeItem === 'سرویس ها'} onClick={this.handleItemClick}
						/>
						<Menu.Item
							name='ارتباط با ما' active={activeItem === 'ارتباط با ما'} onClick={this.handleItemClick}
						/>
					</Menu>
				</div>
				<div style={s.intro}>
					<h1 style={{fontSize: '60px', color: 'white', position: 'relative', top: '12%', right: '25%'}}>
						معرفی شرکت باور سیستم
					</h1>
					<div style={{position: 'relative', top: '15%', right: '39%'}}>
						<Button positive>بیشتر...</Button>
					</div>
				</div>
				<h1 style={{textAlign: 'center', color: '#5a227e', marginTop: '30px', marginBottom: '90px'}}>
					معرفی اعضای شرکت
				</h1>
				<div
					style={{display: 'flex',
						justifyContent: 'space-around',
						marginTop: '50px', marginBottom: '30px'}}
				>
					<Card.Group>
						<Card className='width'>
							<Card.Content>
								<Image floated='right' size='mini' src='https://www.hotfootdesign.co.uk/wp-content/uploads/2016/01/Hotfoot-Team.jpg' />
								<Card.Header>
									Faxradin Abdi
								</Card.Header>
								<Card.Meta>
									<div style={{color: '#e67e00', marginTop: '30px'}}>
										Chief technology officer
									</div>
								</Card.Meta>
								<div style={{marginTop: '90px'}}>
									<Card.Description>
										CTO and manager project <strong style={{color: '#5a227e'}}>in bawerSysterm company</strong>
									</Card.Description>
								</div>
							</Card.Content>
							<Card.Content extra>
								<div className='ui two buttons' style={{display: 'flex', justifyContent: 'space-around'}}>
								    <a href="https://harzaan.com/">
									<Button basic color='green'>
										<div style={{position: 'relative', left: '15px', color: '#3b5998'}}>
											<Icon name='facebook square'  />
										</div>
									</Button>
								</a>
									<a href="https://harzaan.com/">
										<Button basic color='red'>
											<div style={{position: 'relative', left: '15px'}}>
											  <Icon name='instagram' />
											</div>
										</Button>
									</a>
								</div>
							</Card.Content>
						</Card>
						<Card className='width'>
							<Card.Content>
								<Image floated='right' size='mini' src='https://www.hotfootdesign.co.uk/wp-content/uploads/2016/01/Hotfoot-Team.jpg' />
								<Card.Header>
									Sadeq Abdi
								</Card.Header>
								<Card.Meta>
									<div style={{color: '#e67e00', marginTop: '30px'}}>
										Senior Programer
									</div>
								</Card.Meta>
								<div style={{marginTop: '90px'}}>
									<Card.Description>
										Senior Programer  <strong style={{color: '#5a227e'}}>in bawerSysterm company</strong>
									</Card.Description>
								</div>
							</Card.Content>
							<Card.Content extra>
								<div className='ui two buttons' style={{display: 'flex', justifyContent: 'space-around'}}>
									<a href="https://harzaan.com/">
										<Button basic color='green'>
											<div style={{position: 'relative', left: '13px', color: '#3b5998'}}>
												<Icon name='facebook square'  />
											</div>
										</Button>
									</a>
									<a href="https://harzaan.com/">
										<Button basic color='red'>
											<div style={{position: 'relative', left: '13px'}}>
												<Icon name='instagram' />
											</div>
										</Button>
									</a>
								</div>
							</Card.Content>
						</Card>
						<Card className='width'>
							<Card.Content>
								<Image floated='right' size='mini' src='https://www.hotfootdesign.co.uk/wp-content/uploads/2016/01/Hotfoot-Team.jpg' />
								<Card.Header>
									Reza Faramarzi
								</Card.Header>
								<Card.Meta>
									<div style={{color: '#e67e00', marginTop: '30px'}}>
										Marketing Manager
									</div>
								</Card.Meta>
								<div style={{marginTop: '90px'}}>
									<Card.Description>
										Marketing Manager <strong style={{color: '#5a227e'}}>in bawerSysterm company</strong>
									</Card.Description>
								</div>
							</Card.Content>
							<Card.Content extra>
								<div className='ui two buttons' style={{display: 'flex', justifyContent: 'space-around'}}>
									<a href="https://harzaan.com/">
										<Button basic color='green'>
											<div style={{position: 'relative', left: '15px', color: '#3b5998'}}>
												<Icon name='facebook square'  />
											</div>
										</Button>
									</a>
									<a href="https://harzaan.com/">
										<Button basic color='red'>
											<div style={{position: 'relative', left: '13px'}}>
												<Icon name='instagram' />
											</div>
										</Button>
									</a>
								</div>
							</Card.Content>
						</Card>
						<Card className='width'>
							<Card.Content>
								<Image floated='right' size='mini' src='https://www.hotfootdesign.co.uk/wp-content/uploads/2016/01/Hotfoot-Team.jpg' />
								<Card.Header>
									Shadi xoshnod
								</Card.Header>
								<Card.Meta>
									<div style={{color: '#e67e00', marginTop: '30px'}}>
										Designer and developer
									</div>
								</Card.Meta>
								<div style={{marginTop: '90px'}}>
									<Card.Description>
										Designer and developer <strong style={{color: '#5a227e'}}>in bawerSysterm company</strong>
									</Card.Description>
								</div>
							</Card.Content>
							<Card.Content extra>
								<div className='ui two buttons' style={{display: 'flex', justifyContent: 'space-around'}}>
									<a href="https://harzaan.com/">
										<Button basic color='green'>
											<div style={{position: 'relative', left: '15px', color: '#3b5998'}}>
												<Icon name='facebook square'  />
											</div>
										</Button>
									</a>
									<a href="https://harzaan.com/">
										<Button basic color='red'>
											<div style={{position: 'relative', left: '13px'}}>
												<Icon name='instagram' />
											</div>
										</Button>
									</a>
								</div>
							</Card.Content>
						</Card>
					</Card.Group>
				</div>
				<h1 style={{textAlign: 'center', color: '#5a227e', marginTop: '30px', marginBottom: '90px'}}>
					معرفی پروژه های شرکت
				</h1>
				<div style={{backgroundColor: '#fffff'}}>
					<div>
						<Card.Group itemsPerRow={2}>
							<Card color='red' image= 'https://stocknews.com/wp-content/uploads/2017/07/facebook-fb-alternate.jpg'/>
							<Card
								href='#card-example-link-card'
								header='Elliot Baker'
								meta='Friend'
								description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
							/>
						</Card.Group>
					</div>
					<div>
						<Card.Group itemsPerRow={2}>
							<Card
								href='#card-example-link-card'
								header='Elliot Baker'
								meta='Friend'
								description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
							/>
							<Card color='red' image='http://www.horizons-academy.com/images2/img220.jpg' />
						</Card.Group>
					</div>
					<div>
						<Card.Group itemsPerRow={2}>
							<Card color='red' image='https://i1.wp.com/wptavern.com/wp-content/uploads/2015/12/telegram.png?ssl=1' />
							<Card
								href='#card-example-link-card'
								header='Elliot Baker'
								meta='Friend'
								description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
							/>
						</Card.Group>
					</div>
					<div>
						<Card.Group itemsPerRow={2}>
							<Card
								href='#card-example-link-card'
								header='Elliot Baker'
								meta='Friend'
								description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
							/>
							<Card color='red' image='https://sd-cdn.fr/wp-content/uploads/2017/09/LinkedIn_HP.jpg' />
						</Card.Group>
					</div>
				</div>
				<h1 style={{textAlign: 'center', color: '#5a227e', marginTop: '30px'}}>
					ارتباط با ما
				</h1>
				<div style={{marginTop: '50px', backgroundColor: '#3ec2ba', marginBottom: '30px', height: '450px'}}>
					<Form size='mini'>
						<Form.Group unstackable widths={2}>
							<Form.Input  label='نام' placeholder='نام' />
							<Form.Input label='نام خانوادگی' placeholder='نام خانوادگی' />
						</Form.Group>
						<Form.Group widths={2}>
							<Form.Input label='ایمیل' placeholder='ایمیل' />
						</Form.Group>
						<Form>
							<TextArea placeholder='به ما بگویید.....' style={{ minHeight: 100 }} />
						</Form>
						<br/>
						<Button type='submit'>فرستادن</Button>
					</Form>
				</div>
				<div style={{border: '1px solid',  height: '100px',marginBottom: '10px', backgroundColor: '#5a227e'}}>
                  <footer>

				  </footer>
				</div>
			</div>
		);
	}
}

export default Header;