import React from 'react';
import './SearchForm.css';

// SEARCHFORM COMPONENT CODE GOES HERE
function SearchForm({handleInputChange, handlePressingEnter, handleSearch}) {
  return (
    <div className="search-form-container">
      <ul className="search-form">
        <li className="search-form__item app-title-container">
          <h2>
          <span className="white">What's </span>  
          <span className="orange">New?</span>
          </h2>
        </li>
        <li className="search-form__item search-input-container">
          <input 
            type="text" className="search-input" 
            placeholder="Search for news article here"
            onKeyDown={handlePressingEnter}
            onChange={handleInputChange}
          />
        </li>
        <li className="search-form__item search-button-container">
          <button 
            className="search-button"
            onClick={handleSearch}
          >
            Search now
          </button>
        </li>
      </ul>
    </div>
  )
}

export default SearchForm;