export default function DateContent({ yearStart, yearEnd, title, content, onDelete }) {
	return (
		<>
			<div className='content-container'>
				<span className='nav-title blue'>{title.toUpperCase()}</span>
				<span>
					{yearStart} - {yearEnd ? yearEnd : 'present'}
				</span>
				<button className='delete' onClick={onDelete}>X</button>
			</div>
			<span>{content}</span>
		</>
	);
}
