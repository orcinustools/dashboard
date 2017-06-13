import React 		from "react"
import { Link } from "react-router"

const style = {
	div: {
		textAlign: "center",
		paddingLeft: 40,
		paddingRight: 40,
		marginBottom: 15
	},
	button: {
		padding: 6
	}
}

const SidebarButton = (props) => {
	return (
		<div style={style.div}>
	    <Link
	    		style={style.button}
	        to={ props.link }
	        className={ `btn btn-primary btn-block ${props.class}` } >
	      { props.text }
	    </Link> 
    </div>
	)
}

export default SidebarButton