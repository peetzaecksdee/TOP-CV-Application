import AboutMe from './AboutMe';
import Image from './ImageContainer';
import Contact from './Contact';
import Social from './Social';

export default function Sidebar() {
	return (
		<>
			<header className="header">
				<Image />
				<AboutMe />
        <Contact />
        <Social />
			</header>
			<main className="content"></main>
		</>
	);
}