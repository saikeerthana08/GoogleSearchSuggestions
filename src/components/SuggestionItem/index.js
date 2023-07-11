// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {updateSearchInput, suggestionDetails} = props
  const {suggestion} = suggestionDetails

  const onClickSuggestion = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="list-item">
      <p className="text">{suggestion}</p>
      <button type="button" onClick={onClickSuggestion} className="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-icon"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
