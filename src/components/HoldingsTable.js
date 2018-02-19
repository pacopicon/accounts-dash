import React from 'react'
import { Table } from 'reactstrap';
import { padding } from '../styles/styles.js'
import '../styles/bootstrap.min.css' 

export default ({ holdings }) => (
  <Table striped>
    
    <tbody>
  {/* If holdings were asynchronous, the code in brackets below would have to be rendered conditionally */}
      {
	    	holdings.map((holding, i) => {
      		return	<tr key={i}>
						        <th scope="row">{holding.account_id}</th>
						        <td>{holding.ticker_name}</td>
						        <td>{holding.ticker}</td>
						        <td>${Math.round(holding.price * 100)/100}</td>
						        <td style={ padding(40,0) }>{holding.quantity}</td>
						      </tr>
      	})
      }
    </tbody>
  </Table>
)