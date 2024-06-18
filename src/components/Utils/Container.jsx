export default function Container({
	header = 'nil',
	addBtn,
	children,
	className,
}) {
	return (
		<div className='container'>
			<div>
				<span className='nav-title'>{header.toUpperCase()}</span>
				{addBtn && <button className='add-button' onClick={addBtn}>+</button>}
				<hr className={className} />
			</div>
			{children}
		</div>
	);
}
