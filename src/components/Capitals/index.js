import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {activeTabId: countryAndCapitalsList[0].id}

  updateName = event => {
    const selectCountryText = event.target.value

    const resultId = countryAndCapitalsList.filter(
      eachCountry => eachCountry.capitalDisplayText === selectCountryText,
    )

    this.setState({
      activeTabId: resultId.id,
    })
  }

  render() {
    const {activeTabId} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>Countries And Capitals</h1>
          <form>
            <select
              className="form-control"
              onChange={this.updateName}
              id="selection-key"
            >
              <option value="New Delhi">New Delhi</option>
              <option value="London">London</option>
              <option value="Paris">Paris</option>
              <option value="Kathmandu">Kathmandu</option>
              <option value="Kelsinki">Helsinki</option>
            </select>
          </form>

          <span htmlFor="select-key">is capital of which country</span>

          <p className="country-heading">
            {countryAndCapitalsList[activeTabId].country}
          </p>
        </div>
      </div>
    )
  }
}

export default Capitals
