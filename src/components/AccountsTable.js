import React, { Component } from 'react'
import { Table } from 'reactstrap';
import { outerDiv } from '../styles/styles.js'
import '../styles/bootstrap.min.css' 

export default ({propsOfTypes}) => (
  <Table striped>
    <thead>
      <tr>
        <th>Account type</th>
        <th>Sum</th>
        <th>Percent of total</th>
      </tr>
    </thead>
    <tbody>
      {
       propsOfTypes
        ? propsOfTypes.map((propsOfType, i) => {
            return <tr key={i}>
                    <th scope="row">{propsOfType.type}</th>
                    <td>${Math.round(propsOfType.sum * 100)/100}</td>
                    <td>{Math.round(propsOfType.percentage * 100)/100}%</td>
                  </tr>
        })
        : <p>holdings are {typeof types}</p>
      }
    </tbody>
  </Table>
)