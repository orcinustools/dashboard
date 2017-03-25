import React 		from "react"
import { Link } from "react-router"

const style = { 
	textAlign: "center",
	paddingLeft: 20,
	paddingRight: 20,
	marginTop: 20,
	marginBotton: 20
}

export default class CreateButton extends React.Component {
	render() {
		return (
			<div style={style}>
		    <Link
		        to="/catalog"
		        className="btn btn-primary btn-block" >
		      NEW PROJECT
		    </Link> 
	    </div>
		)
	}
}