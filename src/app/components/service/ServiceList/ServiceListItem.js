import React      from "react"
import PropTypes  from "prop-types"
import { Link }   from "react-router"

const ServiceListItem = (props) => {
  if (props.updateConfig) {
    console.log(props.updateConfig)
  }
  return (
    <tr>
      <td>{ props.id.substr(0, 6) }</td>
      <td>
        <Link
            to={"/services/" + props.id }>
          { props.name }
        </Link>
      </td>
      <td><span className="label label-success running-state">RUNNING</span></td>
      <td>
        <i className="fa fa-tag fa-fw" aria-hidden="true"></i>
        &nbsp; { props.image.split('@')[0] }
      </td>
      <td>
        <ul className="list-child">
          {/*<li>
            <i
              className="fa fa-server fa-fw"
              aria-hidden="true"></i>
            &nbsp; Wordpress-app
          </li>*/}
          <li>
            <i 
              className="fa fa-cube fa-fw"
              aria-hidden="true"></i>
            &nbsp; {props.containers} Containers
          </li>
          {/*<li>
            <i
              className="fa fa-hdd-o fa-fw"
              aria-hidden="true"></i>
            &nbsp; 1 Volumes
          </li>*/}
        </ul>
      </td>
      <td style={{ width: '30%', textAlign: 'right' }}>
        <button 
          className="btn btn-default btn-xs list-stack-action"
          onClick={() => props.handleDecrement(props.id)}> - </button>
        <input
          type="text"
          className="form-control input-sm inline-block"
          min="1"
          max="10"
          readOnly="true"
          style={{ textAlign: 'center', width: '15%', display: 'inline', marginRight: '10px' }}
          value={ props.replicas }/>
        <button 
            className="btn btn-default btn-xs"
            style={{ marginRight: '40px'}}
            onClick={() => props.handleIncrement(props.id)}> + </button>
        { props.updateConfig ?
          <button
              className="btn btn-success btn-sm list-stack-action"
              onClick={() => props.scaling(props.updateConfig)}>
            <i className="fa fa-check" aria-hidden="true"></i>
            &nbsp; Scale
          </button> :
          <button
              className="btn btn-default btn-sm list-stack-action"
              disabled="true">
            <i className="fa fa-check" aria-hidden="true"></i>
            &nbsp; Scale
          </button>
        }
        <button
            className="btn btn-danger btn-sm list-stack-action"
            onClick={() => props.click(props.id)}>
          <i className="fa fa-trash-o" aria-hidden="true"></i>
        </button>
      </td>
    </tr>
  )
}

export default ServiceListItem