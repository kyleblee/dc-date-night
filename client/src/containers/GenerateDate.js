import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { generateDate, collectDateOptions } from '../actions/dateActions';

class GenerateDate extends React.Component {
  constructor() {
    super();

    this.state = {
      customDate: {}
    }
  }

  componentDidMount() {
    this.props.collectDateOptions();
  }

  createNeighborhoodOptions() {
    let neighborhoods = [];

  }

  render() {
    return (
      <div>
        <form id="generate-date-form">
          <label>Pick a Neighborhood:</label>
          <input></input>
        </form>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    generateDate: generateDate,
    collectDateOptions: collectDateOptions
  }, dispatch);
}

const mapStateToProps = (state) => {
  return {customDate: state.customDate}
}

//make sure to add mapDispatchToProps and mapStateToProps in here, once ready
export default connect(mapStateToProps, mapDispatchToProps)(GenerateDate);
