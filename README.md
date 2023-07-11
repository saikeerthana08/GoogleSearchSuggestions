In this project, I build a **Google Search Suggestions** app.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/google-search-suggestions-output.gif" alt="google search suggestions output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/google-search-suggestions-sm-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/google-search-suggestions-lg-output.png)

</details>

### Completion Instructions

<details>
<summary>Functionalities added</summary>
<br/>

The app has the following functionalities

- Initially, all suggestions in the `suggestionsList` is displayed
- When a value is provided in the search input, then display the suggestions which include the search input irrespective of the case
- When the arrow of a suggestion is clicked, then the value of the search input is updated with the respective suggestion clicked
- The `GoogleSuggestions` component receives the `suggestionsList` as a prop. It consists of a list of suggestion objects with the following properties in each suggestion object

  |    Key     | Data Type |
  | :--------: | :-------: |
  |     id     |  Number   |
  | suggestion |  String   |

</details>

<details>
<summary>Components Structure</summary>

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/google-search-suggestions-component-structure-breakdown.png" alt="google search suggestions component structure" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

</details>

<details>
<summary>Implemented Files</summary>
<br/>

Used these files to complete the implementation:

- `src/components/GoogleSuggestions/index.js`
- `src/components/GoogleSuggestions/index.css`
- `src/components/SuggestionItem/index.js`
- `src/components/SuggestionItem/index.css`
</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/google-logo.png](https://assets.ccbp.in/frontend/react-js/google-logo.png) alt should be **google logo**
- [https://assets.ccbp.in/frontend/react-js/google-search-icon.png](https://assets.ccbp.in/frontend/react-js/google-search-icon.png) alt should be **search icon**
- [https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png](https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png) alt should be **arrow**

</details>

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #bfbfbf; width: 150px; padding: 10px; color: white">Hex: #bfbfbf</div>
<div style="background-color: #64748b; width: 150px; padding: 10px; color: white">Hex: #64748b</div>
<div style="background-color: #475569; width: 150px; padding: 10px; color: white">Hex: #475569</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>
