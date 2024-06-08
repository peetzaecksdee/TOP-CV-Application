import NAI from '../assets/NAN.png'

export default function Image({ img = NAI}) {
	return (
		<div className="image-container circle">
			<img src={img} />
		</div>
	);
}
