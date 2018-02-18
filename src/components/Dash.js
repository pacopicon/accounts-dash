import React, { Component } from 'react';
import { outerDiv, tableWrapper } from '../styles/styles.js'
import '../styles/bootstrap.min.css'
import accounts from '../data/accounts.js'
import holdings from '../data/holdings.js'
import AccountsTable from './AccountsTable'
import HoldingsTable from './HoldingsTable' 

class Dash extends Component {
  constructor(props) {
    super(props)
    this.state = {
      propsOfTypes: []
    }
    this.filterTypes = this.filterTypes.bind(this)
    this.mapPropsToTypes = this.mapPropsToTypes.bind(this)
  }

  // returns a unique array of account types
  filterTypes(accounts) {
    let unfilteredTypes = []

    accounts.map(account => {
      unfilteredTypes.push(account.type)
    })

    function getTypes(val, i, self) {
      return self.indexOf(val) === i
    }
    console.log("unfilteredTypes.filter(getTypes) = " + unfilteredTypes.filter(getTypes))
    return unfilteredTypes.filter(getTypes)
  }

// maps each holding's properties to unique account types, cross-matching them via holdings' account_id and accounts' account.id.  Sets resulting array of objects to state.
  mapPropsToTypes(accounts, holdings) {
    let acctTypes = this.filterTypes(accounts),
        props_of_types = [],
        sums_by_type = acctTypes.map(acctType => {
          let sum = 0
          for (let i=0; i<accounts.length; i++) {
            if (accounts[i].type == acctType) {
              for (let j=0; j<holdings.length; j++) {
                if (accounts[i].id == holdings[j].account_id) {
                  sum += holdings[j].price * holdings[j].quantity
                }
              }
            }
          }
          return sum
        })

    function addSums(total,num) {
      return total + num
    }

    let sum_of_all_types = sums_by_type.reduce(addSums)

    for (let i=0; i<acctTypes.length; i++) {
      props_of_types.push( {type: acctTypes[i], sum: sums_by_type[i], percentage: sums_by_type[i]/sum_of_all_types * 100})
    }

    this.setState({
      propsOfTypes: props_of_types
    })

  }

  // instead of making html display contingent upon returning props_of_types from the above function, the above function sets props_of_types as state since state changes (i.e. resulting from user and/or api data creation, updates, and deletions) kick off component re-renders automatically.  
  componentDidMount() {
    this.mapPropsToTypes(accounts,holdings)
  }

  render() {
    const { propsOfTypes, acctTypes } = this.state
    console.log("JSON.stringify(propsOfTypes) = " + JSON.stringify(propsOfTypes))
    return (
      <div style={ outerDiv }>
        <div style={ tableWrapper }>
          <div>Holdings:</div>
          <HoldingsTable holdings={holdings}></HoldingsTable>
        </div>
        <div style={ tableWrapper }>
          <div>Accounts:</div>
          <AccountsTable propsOfTypes={propsOfTypes}></AccountsTable>
        </div>
      </div>
    )
  }
}

export default Dash