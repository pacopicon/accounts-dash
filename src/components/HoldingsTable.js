import React, { Component } from 'react'
import { Table } from 'reactstrap';
import { height, paddingLeft } from '../styles/styles.js'
import '../styles/bootstrap.min.css' 

export default ({holdings}) => (
  <Table striped>
    <thead>
      <tr>
        <th>account id</th>
        <th>ticker name</th>
        <th>ticker</th>
        <th>price</th>
        <th>quantity</th>
      </tr>
    </thead>
    <tbody style={ height }>
  {/* If holdings were asynchronous, the code in brackets below would have to be rendered conditionally */}
      {
	    	holdings.map((holding, i) => {
      		return	<tr key={i}>
						        <th scope="row">{holding.account_id}</th>
						        <td>{holding.ticker_name}</td>
						        <td>{holding.ticker}</td>
						        <td>${Math.round(holding.price * 100)/100}</td>
						        <td style={ paddingLeft }>{holding.quantity}</td>
						      </tr>
      	})
      }
    </tbody>
  </Table>
)