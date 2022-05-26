import React from 'react';
import CitizenFilter from '../citizen-filter/CitizenFilter';
import CitizenTable from '../citizen-table/CitizenTable';
import './Home.css';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          totalCount: 0
      };
        this.citizenTableRef = React.createRef();
      }

      componentDidMount(){
        this.getTotalCount();
      }  

    getTotalCount() {

      const requestOptions = {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
      };

      fetch("http://localhost:8080/citizen/totalCount", requestOptions)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({totalCount: result})
          },
          (error) => {
            this.setState({totalCount: 0})
          }
        )
    }  

    search(filterList) {

      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(filterList)
      };

      fetch("http://localhost:8080/citizen/search", requestOptions)
        .then(res => res.json())
        .then(
          (result) => {
            this.citizenTableRef.current.bindData(result);
          },
          (error) => {
            this.citizenTableRef.current.bindData([]);
          }
        )
    }
    
    render() {
      return (
        <div className="home">
          <div className="home-container">
            <div className="total-count-container">
              <label>Total Citizen: {this.state.totalCount}</label>
            </div>
            <CitizenFilter search={this.search.bind(this)}></CitizenFilter>
            <CitizenTable ref={this.citizenTableRef}></CitizenTable>
          </div>
        </div>
      );
    }
  }

  export default Home;