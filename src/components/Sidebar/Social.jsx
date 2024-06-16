import Container from '../Utils/Container';
import Facebook from '../../assets/facebook.svg';
import Instagram from '../../assets/instagram.svg';
import Linkedin from '../../assets/linkedin.svg';
import Twitter from '../../assets/twitter.svg';
import { useState } from 'react';

const socials = [
	{
		icon: Facebook,
		text: 'https://www.facebook.com/user',
	},
	{
		icon: Instagram,
		text: 'https://www.instagram.com/user',
	},
	{
		icon: Linkedin,
		text: 'https://www.linkedin.com/user',
	},
	{
		icon: Twitter,
		text: 'https://www.twitter.com/user',
	},
];

export default function Social() {
	const [socialList, setSocialList] = useState(socials);

	function handleChange(e, index) {
		setSocialList(socialList.map((social, idx) => {
			if (index === idx) {
				return {
					...social,
					text: e.target.value,
				};
			}
			return social;
		}));
	}

	return (
		<Container header='social'>
			{socialList.map((social, index) => {
				return (
					<div className='content-container' key={index}>
						<img src={social.icon} />
						<input className='white small' value={social.text} onChange={(e) => {handleChange(e, index)}} />
					</div>
				);
			})}
		</Container>
	);
}
