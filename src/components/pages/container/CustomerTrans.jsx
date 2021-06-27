import React from 'react'

export default function CustomerTrans(props) {
    const data = props.des;
    return (
        <tr>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.mobile}</td>
        <td>{data.product}</td>
        <td>{data.qty}</td>
        <td>{data.msr}</td> 
        <td>{data.supplier}</td> 
        <td>{data.time}</td> 
       
        <td>
          <button type="button" className="btn btn-sm btn-danger"><i className="fa fa-trash-o"> </i> Delete</button>
        </td> 
      </tr>
    )
}
