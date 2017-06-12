import React    from 'react'
import { Link } from 'react-router'

import SidebarMenuItem from './SidebarMenuItem'

const SidebarMenu = (props) => {
	return (
    <ul className="sidebar-menu">
      <li className="nav-header">Dashboard</li>
      <SidebarMenuItem 
        link="/overview"
        icon="fa-dashboard"
        text="Overview" />

      <li className="nav-header">Workspace</li>
      <SidebarMenuItem 
        link="/projects"
        icon="fa-server"
        text="Projects" />

      <SidebarMenuItem 
        link="/services"
        icon="fa-cubes"
        text="Services" />      
      
      <SidebarMenuItem
        link="/containers"
        icon="fa-cube"
        text="Containers" />

      <SidebarMenuItem
        link="/volumes"
        icon="fa-hdd-o"
        text="Volumes" />

      {/*<SidebarMenuItem
        link="/domains"
        icon="fa-external-link"
        text="Domains" />

      <li>
        <Link to="/mountpoints">
          <i className="fa fa-code-fork fa-fw"></i><span>&nbsp; Mountpoints</span>
        </Link>
      </li>
      <li>
        <Link to="/firewalls">
          <i className="fa fa-fire fa-fw"></i><span>&nbsp; Security</span>
        </Link>
      </li>*/}
      <li className="nav-header">Community</li>
      <SidebarMenuItem
        link="/catalog"
        icon="fa-book"
        text="Catalog" />
      
      <li className="nav-header">Miscellaneous</li>
      <SidebarMenuItem
        link="/settings"
        icon="fa-cog"
        text="Settings" />

      <SidebarMenuItem
        link="/docs"
        icon="fa-book"
        text="Documentation" />

      <SidebarMenuItem
        link="/support"
        icon="fa-life-ring"
        text="Support" />
      
    </ul>
	)
}

export default SidebarMenu