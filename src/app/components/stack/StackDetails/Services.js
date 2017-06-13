import React 		from "react"
import { Link } from "react-router"

import ServiceItem from './ServiceItem'

const Services = (props) => {

  const renderServices = (services) => {

    if (services.length == 0) {
      return (
        <tr>
          <td style={{ textAlign: "center" }} colSpan="5">
            THERE IS NO SERVICE IN THIS PROJECT
          </td>
        </tr>
      )
    }


    return services.map((service) =>
      <ServiceItem 
        service={ service }
        key={ service.ID }/>
    )
  }

	return (
    <tbody className="table-stack-list">
    { renderServices(props.services) }
    </tbody>
	)
}

export default Services