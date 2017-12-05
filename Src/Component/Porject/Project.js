
// vendor
import React, { Component, PropTypes } from 'react';

// Local
import { Button,Image} from 'semantic-ui-react';

// const
const s = {
};
class Project extends Component {
	// render
	render () {
		// return
		return (
			<section
				className="proje"
				ref={(section) => {this.proje = section;}}
			>
				<div style={{background: '#ffffff', height: '100%'}}>
					<h1 style={{textAlign: 'center', color: 'black', marginBottom: '180px',position: 'relative', top: '60px'}}>
						معرفی پروژه های شرکت
					</h1>
					<div style={{backgroundColor: '#fffff'}}>
						<div>
							<section
							    className="section1"
							>
								<Image src= {require(`../../../public/image/harzaan.jpg`)} size='medium' />
								<div style={{margin: 'auto'}}>
									<p style={{marginRight: '150px', marginTop: '50px', fontSize: '30px', fontWight: 'bold'}}>
										<p><a href="https://www.hotorder.co.uk">سایت خرید و فروش بی واسطه</a></p>
										<p style={{marginRight: '50px'}}>april 20,2013</p>
									</p>
								</div>
							</section>
							<section className="section2">
								<div style={{margin: 'auto'}}>
									<p style={{marginLeft: '110px', marginTop: '60px', fontSize: '30px', fontWight: 'bold'}}>
										<p><a href="https://www.hotorder.co.uk">سایت سفارش غذای آنلاین</a></p>
										<p style={{marginRight: '50px'}}>april 20,2013</p>
									</p>
								</div>
									<Image src='http://www.shahrara.net/upload/images/razeghiapp%20(2).jpg' size='medium' />
							</section>
							<section className="section3">
								<Image src='https://websitesetup.org/wp-content/uploads/2013/11/bluehost-landing-page.png' size='medium' />
								<div style={{margin: 'auto'}}>
									<p style={{marginRight: '150px', marginTop: '120px', fontSize: '30px', fontWight: 'bold'}}>
										<p><a href="https://www.hotorder.co.uk">سایت اشتراک عکس</a></p>
										<p style={{marginRight: '50px'}}>april 20,2013</p>
									</p>
								</div>
							</section>
						</div>
						<div style={{marginBottom: '100px'}}>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Project;