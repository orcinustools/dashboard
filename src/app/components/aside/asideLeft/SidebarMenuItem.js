import React 		from 'react'
import { Link } from 'react-router'

const SidebarMenuItem = (props) => {
	return (
		<li>
      <Link to={ props.link } activeClassName="sidebar-active">
        <i className={ `fa ${ props.icon } fa-fw` }></i> <span>&nbsp; { props.text }</span>
      </Link>
    </li>
	)
}

export default SidebarMenuItem