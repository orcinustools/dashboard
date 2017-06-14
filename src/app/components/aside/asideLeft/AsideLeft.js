import React 					from 'react'

import SidebarButton 	from './SidebarButton'
import SidebarMenu 		from './SidebarMenu'
import Logo 					from './Logo'
import Footer 				from '../../footer/Footer'

const AsideLeft = (props) => {
	return (
		<aside className="left-side sidebar-offcanvas">
			<section className="sidebar">
				
				<Logo />
				
				<SidebarButton 
						text="New Project" 
						class="create-button"
						link="/catalog" />
				
				<SidebarMenu />
	      
			</section>
      <Footer />
		</aside>
	)
}

export default AsideLeft