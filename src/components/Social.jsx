import Container from './Container';
import Facebook from '../assets/facebook.svg';
import Instagram from '../assets/instagram.svg';
import Linkedin from '../assets/linkedin.svg';
import Twitter from '../assets/twitter.svg';

export default function Social() {
	return (
		<Container header="social">
			<div className="content-container">
				<img src={Facebook} />
				<a className="white small">someone</a>
			</div>
			<div className="content-container">
				<img src={Instagram} />
				<a className="white small">someone</a>
			</div>
			<div className="content-container">
				<img src={Linkedin} />
				<a className="white small">someone</a>
			</div>
			<div className="content-container">
				<img src={Twitter} />
				<a className="white small">someone</a>
			</div>
		</Container>
	);
}
