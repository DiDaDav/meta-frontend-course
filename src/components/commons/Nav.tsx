import { Link } from 'react-router-dom'

type NavProps = {
  ordered?: boolean
  list: { id?: string; link: string; desc: string }[]
}

function Nav(props: NavProps) {
  const itemList = props.list.map((item) => {
    return (
      <li key={item.id ?? item.link} className='nav-item'>
        <Link to={item.link} className='nav-link'>
          {item.desc}
        </Link>
      </li>
    )
  })
  return (
    <nav className='col navbar navbar-expand-lg bg-body-tertiary'>
      {props.ordered ? (
        <ol className='navbar-nav me-auto mb-2 mb-lg-0'>{itemList}</ol>
      ) : (
        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>{itemList}</ul>
      )}
    </nav>
  )
}

export default Nav
