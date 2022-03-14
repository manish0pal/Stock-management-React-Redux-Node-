import React from 'react'


export default function Inventable(props) {
    const data = props.des;
    return (
  
        <tr>
        <td>{data.id}</td>
        <td>{data.product}</td>
        <td>{data.qty}</td>
        <td>{data.mes}</td>
        <td>{data.og_price}</td>
        <td><span className="text-success text-semibold"><i className="fa fa-level-up" aria-hidden="true" /> Rs.{data.sale_price -data.og_price}</span> </td>
        <td>{ data.sale_price}</td>  
        <td>{data.name}</td> 
        <td>
          <button type="button" className="btn btn-sm btn-primary"><i className="fa fa-edit"> </i> Edit</button>
          <span>  </span>
          <button type="button" className="btn btn-sm btn-danger"><i className="fa fa-legal"> </i> Delete</button>
        </td> 
      </tr>
    )
}
