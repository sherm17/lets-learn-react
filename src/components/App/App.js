import React, { Component } from "react";

import local from "../../data/local";
import entertainment from "../../data/entertainment";
import health from "../../data/health";
import science from "../../data/science";
import technology from "../../data/technology";

import Menu from "../Menu/Menu";
import SearchForm from "../SearchForm/SearchForm";
import NewsContainer from "../NewsContainer/NewsContainer";
import "./App.css";

const API = "https://whats-new-api.herokuapp.com/api/v1/news";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currSubject: null,
      displayData: null,
      searchInput: null,
      isLoading: false,
      entertainmentData: null,
      healthData: null,
      localData: null,
      scienceData: null,
      techData: null
    } 
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    });
    fetch(API)
      .then(response => response.json())
      .then(jsonData => {
        const {
            entertainment, health,
            local, sciene, technology,
          } = jsonData;
        this.setState({
          healthData: health,
          localData: local,
          scienceData: science,
          techData: technology,
          entertainmentData: entertainment,
          isLoading: false
        });
      });
  }

  searchThroughData = (dataSet, keyWord) => {
    return dataSet.filter(data => data.headline.indexOf(keyWord) !== -1);
  }

  handlePressingEnter = (e) => {
    if (e.keyCode === 13) {
      this.handleSearch();
    }
  }

  handleInputChange = (e) => {
    this.setState({
      searchInput: e.target.value
    }, () => {
    });
  }

  handleSearch = () => {
    const {searchInput} = this.state;
      const articlesFromLocal = this.searchThroughData(local, searchInput);
      const articlesFromEnt = this.searchThroughData(entertainment, searchInput);
      const articlesFromHealth = this.searchThroughData(health, searchInput);
      const articlesFromScience = this.searchThroughData(science, searchInput);
      const articlesFromTech = this.searchThroughData(technology, searchInput);
      const articles = [
        ...articlesFromLocal,
        ...articlesFromEnt,
        ...articlesFromHealth,
        ...articlesFromScience,
        ...articlesFromTech
      ];
      this.setState({
        displayData: articles
      });
  }

  handleSubjectClick = (subjectName) => {
    const {
      localData, techData,
      entertainmentData, scienceData,
      healthData
    } = this.state;

    let dataForViewing;
    switch (subjectName) {
      case "localNews":
        dataForViewing = localData;
        break;
      case "technology":
        dataForViewing = techData;
        break;
      case "entertainment":
        dataForViewing = entertainmentData;
        break;
      case "science":
        dataForViewing = scienceData;
        break;
      case "health":
        dataForViewing = healthData;
        break;
    }
    this.setState({
      currSubject: subjectName,
      displayData: dataForViewing
    });
  }

  render() {
    const {currSubject, displayData, isLoading} = this.state;
    return (
      <>
        <SearchForm 
          handleInputChange = {this.handleInputChange} 
          handlePressingEnter = {this.handlePressingEnter}  
          handleSearch = {this.handleSearch}
        />
        <div className="app">
          <Menu 
            handleSubjectClick = {this.handleSubjectClick} 
            currSubject = {currSubject}
          />
          <NewsContainer 
            displayData = {displayData}
            isLoading = {isLoading}
          />
        </div>
      </>
    );
  }
}

export default App;
