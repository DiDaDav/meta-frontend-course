function Nav(navProps: {
  ordered?: boolean
  list: { id?: string; link: string; desc: string }[]
}) {
  const itemList = navProps.list.map((item) => {
    return (
      <li key={item.id ?? item.link}>
        <a href={item.link}>{item.desc}</a>
      </li>
    )
  })
  return (
    <nav>{navProps.ordered ? <ol>{itemList}</ol> : <ul>{itemList}</ul>}</nav>
  )
}

export default Nav
