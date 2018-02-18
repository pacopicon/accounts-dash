import React, { Component } from 'react'
import { Table } from 'reactstrap';
import { height } from '../styles/styles.js'
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
      {
      	holdings
      	? holdings.map((holding, i) => {
	      		return <tr key={i}>
						        <th scope="row">{holding.account_id}</th>
						        <td>{holding.ticker_name}</td>
						        <td>{holding.ticker}</td>
						        <td>${Math.round(holding.price * 100)/100}</td>
						        <td>{holding.quantity}</td>
						      </tr>
      	})
      	: <p>holdings are {typeof holdings}</p>
      }
    </tbody>
  </Table>
)