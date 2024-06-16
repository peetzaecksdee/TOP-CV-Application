import Container from '../Utils/Container';
import { useState } from 'react';

export default function AboutMe() {
	const [aboutMe, setAboutMe] = useState('Average man');

	function handleChange(e) {
		setAboutMe(e.target.value);
	}

	return (
		<Container header='about me'>
			<textarea
				className='text white small'
				value={aboutMe}
				onChange={handleChange}
				rows='5'
			/>
		</Container>
	);
}
