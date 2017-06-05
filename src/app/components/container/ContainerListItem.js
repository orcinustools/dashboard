import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router"
import cs from "classnames"

const ContainerListItem = (props) => {
  const service = props.service ? props.service : 'No Service'
  const name = props.name.slice(1)
  
  const containerState = cs(
    'label',
    {
      'label-success': props.state === 'running',
      'running-state': props.state === 'running',
      'pause-state': props.state === 'paused',
      'stop-state': props.state === 'exited'
    }
  )

  const buttonState = cs(
    'btn',
    'list-stack-action',
    'btn-sm',
    {
      'btn-warning': props.state === 'running',
      'pause-state': props.state === 'running',
      'btn-success': props.state === 'paused',
      'running-state': props.state === 'paused'
    }
  )

  const fontState = cs(
    'fa',
    {
      'fa-pause': props.state === 'running',
      'fa-play': props.state === 'paused'
    }
  )

  return ( 
    <tr>
      <td>{ props.id.substr(0, 6) }</td>
      <td><Link to={"/containers/" + props.id }>{ name }</Link></td>
      <td><span className={ containerState }>{ props.state }</span></td>
      <td>
        <i className="fa fa-tag fa-fw" aria-hidden="true"></i> { props.image.split('@')[0] }
      </td>
      <td>
        <ul className="list-child">
          {/*<li><i className="fa fa-server fa-fw" aria-hidden="true"></i> Wordpress-app</li>*/}
          <li><i className="fa fa-cubes fa-fw" aria-hidden="true"></i>{ service }</li>
          {/*<li><i className="fa fa-hdd-o fa-fw" aria-hidden="true"></i> 1 Volumes</li>*/}
        </ul>
      </td>
      <td>
        { props.state === 'running' ?
          <button onClick={() => props.pause(props.id)} className={ buttonState }>
            <i className={ fontState } aria-hidden="true"></i>
          </button> :
          <button onClick={() => props.unPause(props.id)} className={ buttonState }>
            <i className={ fontState } aria-hidden="true"></i>
          </button>
        }
        <Link to="#" className="btn btn-info btn-sm list-stack-action"><i className="fa fa-refresh" aria-hidden="true"></i></Link>
        <button
            className="btn btn-danger btn-sm list-stack-action"
            onClick={ () => props.delete(props.id) }>
          <i className="fa fa-trash-o" aria-hidden="true"></i>
        </button>

          {/*<div className="dropdown" style={{ display: 'inline-block' }}>
          <button type="button" className="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
          
          <ul className="dropdown-menu dropdown-min">
            <li>
              <Link to="#">Update</Link></li>
            <li><Link to="#">Edit</Link></li>
          </ul>
        </div>*/}
      </td>
    </tr>
  )
}

ContainerListItem.proptypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}
export default ContainerListItem