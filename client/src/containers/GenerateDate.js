import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { generateDate, collectNeighborhoodOptions } from '../actions/dateActions';

class GenerateDate extends React.Component {
  constructor() {
    super();

    this.state = {
      neighborhood: "",
      activities: []
    }
  }

  componentDidMount() {
    this.props.collectNeighborhoodOptions();
  }

  createNeighborhoodOptions() {
    let neighborhoodOptions = [];

    if (this.props.options.neighborhoods) {
      for (let n of this.props.options.neighborhoods) {
        neighborhoodOptions.push(<option key={n} value={n}>{n}</option>);
      }
    }

    return neighborhoodOptions;

  }

  updateNeighborhood = event => {
    this.setState({
      neighborhood: event.target.value
    });
  }

  render() {
    this.createNeighborhoodOptions();

    return (
      <div>
        <form id="generate-date-form">
          <label>Pick a Neighborhood:</label>
          <select
            value={this.state.neighborhood}
            onChange={this.updateNeighborhood}>
            <option value=""></option>
            {this.createNeighborhoodOptions()}
          </select>
        </form>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    generateDate: generateDate,
    collectNeighborhoodOptions: collectNeighborhoodOptions
  }, dispatch);
}

const mapStateToProps = (state) => {
  return {
    customDate: state.dates.customDate,
    options: state.dates.options
  }
}

//make sure to add mapDispatchToProps and mapStateToProps in here, once ready
export default connect(mapStateToProps, mapDispatchToProps)(GenerateDate);
