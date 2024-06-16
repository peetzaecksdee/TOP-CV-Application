export default function Container({ header = 'nil', children, className }) {
	return (
		<div className="container">
			<div>
				<span className="nav-title">{header.toUpperCase()}</span>
				<hr className={className} />
			</div>
			{children}
		</div>
	);
}
