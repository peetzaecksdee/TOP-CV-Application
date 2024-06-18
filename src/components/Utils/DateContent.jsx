export default function DateContent({ yearStart, yearEnd, title, content }) {
	return (
		<>
			<div className='content-container'>
				<span className='nav-title blue'>{title.toUpperCase()}</span>
				<span>
					{yearStart} - {yearEnd ? yearEnd : 'present'}
				</span>
				<button className='delete'>X</button>
			</div>
			<span>{content}</span>
		</>
	);
}
