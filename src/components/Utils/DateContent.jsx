export default function DateContent({
	yearStart,
	yearEnd,
	title,
	content,
	onDelete,
	onChange,
}) {
	return (
		<>
			<div className='content-container'>
				<input
					className='nav-title blue'
					name='title'
					value={title.toUpperCase()}
					onChange={onChange}
				/>
				<span>
					<input value={yearStart} onChange={onChange} name='yearStart' />{' '}
					<input value={yearEnd} onChange={onChange} name='yearEnd' />
				</span>
				{
					<button className='delete' onClick={onDelete}>
						X
					</button>
				}
			</div>
			<textarea name='content' onChange={onChange} rows={1} value={content} />
		</>
	);
}
