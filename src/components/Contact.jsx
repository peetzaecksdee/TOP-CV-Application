import Container from './Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocation, faWindowMaximize, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
	return (
		<Container header="contact">
			<div className='content-container'>
				<FontAwesomeIcon icon={faPhone} className="white" />
        <span className='white small'>+00 000-000-0000</span>
			</div>
			<div className='content-container'>
				<FontAwesomeIcon icon={faLocation} className="white" />
        <span className='white small'>lorem Esighdiognreiugahniu gheiaug hitughvmniutghviute hmiaurhmg</span>
			</div>
			<div className='content-container'>
				<FontAwesomeIcon icon={faEnvelope} className="white" />
        <span className='white small'>peetzaecksdee@skiff.com</span>
			</div>
			<div className='content-container'>
				<FontAwesomeIcon icon={faWindowMaximize} className="white" />
        <a target='_blank' href='www.github.com/peetzaecksdee' className='white  small' >www.github.com/peetzaecksdee</a>
			</div>
		</Container>
	);
}
