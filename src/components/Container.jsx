export default function Container({ header = 'nil', children }) {
  return (
    <div className='container'>
      <span className='nav-title'>
        {header.toUpperCase()}
      </span>
      <hr />
      {children}
    </div>
  )
}