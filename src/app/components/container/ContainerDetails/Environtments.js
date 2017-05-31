import React from "react"
import { Link } from "react-router"

const Environtments = (props) => {
  
  const { env } = props
  const varArr = env.map((e) => e.split("="))

	return (
    <tbody className="table-stack-list">
    {
      varArr.map((arr) => 
        <tr key={`${arr[0]}-${arr[1]}`}>
          <td>{arr[0]}</td>
          <td>{arr[1]}</td>
          <td></td>
        </tr>
      )
    }
    </tbody>
	)
}

export default Environtments