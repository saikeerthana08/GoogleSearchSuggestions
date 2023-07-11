// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  updateSearchInput = value => {
    this.setState({searchInput: value})
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="google-search-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="title-img"
          />
          <div className="search-container">
            <div className="search-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-logo"
              />
              <input
                type="search"
                placeholder="Search Google"
                value={searchInput}
                onChange={this.onChangeInput}
                className="input"
              />
            </div>
            <ul className="list-container">
              {searchResults.map(eachItem => (
                <SuggestionItem
                  key={eachItem.id}
                  suggestionDetails={eachItem}
                  updateSearchInput={this.updateSearchInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
