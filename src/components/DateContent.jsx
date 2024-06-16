export default function DateContent({ yearStart, yearEnd, title, content }) {
	return (
		<>
			<div className='content-container'>
				<span className='nav-title blue'>{title.toUpperCase()}</span>
				<span>
					{yearStart} - {yearEnd}
				</span>
			</div>
			<span>{content}</span>
		</>
	);
}
