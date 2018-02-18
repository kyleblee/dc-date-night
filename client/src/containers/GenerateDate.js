import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { generateDate, collectNeighborhoodOptions, collectCategoryOptions } from '../actions/dateActions';
import Errors from '../components/Errors';

class GenerateDate extends React.Component {
  constructor() {
    super();

    this.state = {
      neighborhood: "",
      activities: [],
      error: undefined
    }
  }

  componentDidMount() {
    this.props.collectNeighborhoodOptions();
    this.props.collectCategoryOptions();
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

  createCategoryOptions() {
    let categoryCheckboxes = []

    if (this.props.options.categories) {
      for (let c of this.props.options.categories) {
        categoryCheckboxes.push(
          <label>
            {c}
            <input name={c} type="checkbox" checked={this.state.activities.includes(c)} onChange={this.addOrRemoveActivity} />
          </label>
        )
      }
    }

    return categoryCheckboxes;
  }

  updateNeighborhood = event => {
    this.setState({
      neighborhood: event.target.value
    });
  }

  addOrRemoveActivity = event => {
    if (event.target.checked) {
      this.setState({
        activities: [].concat(this.state.activities, event.target.name)
      });
    } else {
      this.setState({
        activities: this.state.activities.filter(c => c !== event.target.name)
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.neighborhood === "") {
      this.setState({
        error: "Please pick a neighborhood!"
      });
    } else {
      this.props.generateDate(this.state);
    }
  }

  render() {
    debugger;
    return (
      <div>
        <Errors errors={this.state.error}/>
        <form
          id="generate-date-form"
          onSubmit={(event) => this.handleSubmit(event)}>
          <label>Pick a Neighborhood:</label>
          <select
            value={this.state.neighborhood}
            onChange={this.updateNeighborhood}>
              <option value=""></option>
              {this.createNeighborhoodOptions()}
          </select>
          <label>Choose a few activities:</label>
          {this.createCategoryOptions()}
          <input type="submit" value="Plan my date!"/>
        </form>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    generateDate: generateDate,
    collectNeighborhoodOptions: collectNeighborhoodOptions,
    collectCategoryOptions: collectCategoryOptions,
    generateDate: generateDate
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
