import React from 'react'
import { Table } from 'reactstrap';
import '../styles/bootstrap.min.css' 
import { commafy } from '../helpers.js'

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
    {/* If propsOfTypes were asynchronous, the code in brackets below would have to be rendered conditionally */}
      {
        propsOfTypes.map((propsOfType, i) => {
          return  <tr key={i}>
                    <th scope="row">{propsOfType.type}</th>
                    <td>${commafy(Math.round(propsOfType.sum * 100)/100)}</td>
                    <td>{Math.round(propsOfType.percentage * 100)/100}%</td>
                  </tr>
        })    
      }
    </tbody>
  </Table>
)