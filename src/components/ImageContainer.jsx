import NAI from '../assets/NAN.png';

export default function Image({ img = NAI }) {
	return (
		<div className="decor">
			<div className="image-container circle">
				<img className="profile" src={img} />
			</div>
		</div>
	);
}
