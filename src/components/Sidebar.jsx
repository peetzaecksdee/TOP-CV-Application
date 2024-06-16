import AboutMe from './Sidebar/AboutMe';
import Contact from './Sidebar/Contact';
import Social from './Sidebar/Social';
import NAI from '../assets/NAN.png';

function Image({ img = NAI }) {
	return (
		<div className='decor'>
			<div className='image-container circle'>
				<input type='image' className='profile' src={img}/>
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
