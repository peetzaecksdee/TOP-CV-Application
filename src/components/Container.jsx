export default function Container({ header = 'nil', children }) {
	return (
		<div className="container">
			<div>
				<span className="nav-title white">{header.toUpperCase()}</span>
				<hr />
			</div>
			{children}
		</div>
	);
}
