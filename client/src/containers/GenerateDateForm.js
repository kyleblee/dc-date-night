import React from 'react';
import { Errors } from '../components/Errors';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { generateDate, collectNeighborhoodOptions, collectCategoryOptions } from '../actions/dateActions';
import { NeighborhoodSelect } from '../components/forms/NeighborhoodSelect';
import { CategoryCheckboxes } from '../components/forms/CategoryCheckboxes';
import PropTypes from 'prop-types';

class GenerateDateForm extends React.Component {
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
  }

  updateNeighborhood = event => {
    this.setState({
      neighborhood: event.target.value,
      activities: []
    }, () => {
      if (this.state.neighborhood !== "") {
        this.props.collectCategoryOptions({neighborhood: this.state.neighborhood})
      };
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
    } else if (this.state.activities.length === 0) {
      this.setState({
        error: "Please select a few activities you would like to include!"
      })
    } else {
      this.props.generateDate(this.state);
    }
  }

  render() {
    if (this.props.customDate) {
      return null;
    } else {
      return (
        <div className="generate-date-form">
          <h3>Generate a Date</h3>
          <Errors errors={this.state.error}/>
          <form onSubmit={(event) => this.handleSubmit(event)}>
            <NeighborhoodSelect
              labelText="Pick a Neighborhood:"
              neighborhoods={this.props.options.neighborhoods}
              selectedNeighborhood={this.state.neighborhood}
              updateNeighborhood={this.updateNeighborhood} />
            {this.state.neighborhood !== "" &&
              <CategoryCheckboxes
                categories={this.props.options.categories}
                activities={this.state.activities}
                addOrRemoveActivity={this.addOrRemoveActivity} />
            }
            {(this.state.neighborhood !== "" && this.state.activities.length !== 0) &&
              <input type="submit" value="Plan my date!"/>
            }
          </form>
        </div>
      )
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    generateDate,
    collectNeighborhoodOptions,
    collectCategoryOptions
  }, dispatch);
}

const mapStateToProps = (state) => {
  return {
    customDate: state.dates.customDate,
    options: state.dates.options
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GenerateDateForm);

GenerateDateForm = {
  collectNeighborhoodOptions: PropTypes.func.isRequired,
  collectCategoryOptions: PropTypes.func.isRequired,
  generateDate: PropTypes.func.isRequired,
  customDate: PropTypes.arrayOf(PropTypes.object),
  options: PropTypes.object
}
