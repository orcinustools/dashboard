import React 		from "react"
import { Link } from "react-router"
import cs from "classnames"

const Containers = (props) => {

  const renderTask = (tasks) => {
    return tasks.map(task => 
      <ContainerItem 
        key={ task.ID }
        task={ task } />
    )
  }

  return (
    <tbody className="table-stack-list">
      { renderTask(props.tasks) }
    </tbody>
  )
}

const ContainerItem = (props) => {
  const labelClass = cs({
    'label': true,
    'running-state': props.task.DesiredState === 'running',
    'stop-state': props.task.DesiredState === 'shutdown',
    'label-success': props.task.DesiredState === 'running',
    'label-danger': props.task.DesiredState === 'shutdown'
  })
  
  return (
    <tr>
      <td>
        <i
          className="fa fa-cubes fa-fw"
          aria-hidden="true"></i>
        <Link
            to={`/containers/${props.task.Status.ContainerStatus.ContainerID}`}>
          &nbsp; { props.task.Name ? props.task.Name : "No Name"}
        </Link>
      </td>
      <td>
        <span
            className={labelClass}>
          { props.task.DesiredState }
        </span>
      </td>
      <td>
        <i
          className="fa fa-tag fa-fw"
          aria-hidden="true"></i>
        &nbsp; { props.task.Spec.ContainerSpec.Image.split('@')[0]  }
      </td>
      <td>
        <ul className="list-child">
          <li>
            <i
              className="fa fa-hdd-o fa-fw"
              aria-hidden="true"></i>
            &nbsp; 1 Volumes
          </li>
        </ul>
      </td>
      <td>
        <Link
            to="#"
            className="btn btn-warning btn-sm list-stack-action">
          <i className="fa fa-pause" aria-hidden="true"></i>
        </Link>
        <Link
            to="#"
            className="btn btn-info btn-sm list-stack-action">
          <i className="fa fa-refresh" aria-hidden="true"></i>
        </Link>
        <Link
            to="#"
            className="btn btn-danger btn-sm list-stack-action">
          <i className="fa fa-trash-o" aria-hidden="true"></i>
        </Link>
      </td>
    </tr>
  )
}

export default Containers