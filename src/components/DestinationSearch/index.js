// Write your code here
import './index.css'
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  destinationSearch = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(eachItem => {
      const thisName = eachItem.name.toLowerCase()
      return thisName.includes(searchInput.toLowerCase())
    })

    return (
      <div className="ds-bg">
        <div className="ds-container">
          <h1 className="ds-heading">Destination Search</h1>
          <div className="search-container">
            <input
              onChange={this.destinationSearch}
              value={searchInput}
              type="search"
              placeholder="search"
              className="ds-input"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="items-container">
            {searchResults.map(eachItem => (
              <DestinationItem
                key={eachItem.id}
                name={eachItem.name}
                imgUrl={eachItem.imgUrl}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
