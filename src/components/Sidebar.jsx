import AboutMe from './Sidebar/AboutMe';
import Contact from './Sidebar/Contact';
import Social from './Sidebar/Social';
import NAI from '../assets/NAN.png';
import { useState } from 'react';

function Image({ img = NAI }) {
	const [file, setFile] = useState(img);
	function handleChange(e) {
		console.log(e.target.files);
		setFile(URL.createObjectURL(e.target.files[0]));
	}

	return (
		<div className='decor'>
			<div className='image-container circle'>
				<input type='file' id='file' onChange={handleChange} />
				<label htmlFor='file' id='fileLabel'></label>
				<img className='profile' src={file} />
			</div>
		</div>
	);
}

export default function Sidebar() {
	return (
		<header className='header white'>
			<Image />
			<AboutMe />
			<Contact />
			<Social />
		</header>
	);
}
