import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SpotForm } from '../components/SpotForm';
import { collectNeighborhoodOptions, collectCategoryOptions } from '../actions/dateActions';

class CuratedDateForm extends React.Component {
  constructor() {
    super();

    this.state = {
      title: "",
      description: "",
      neighborhood: "",
      spots: [{
        title: "",
        description: "",
        category: ""
      }],
      error: undefined
    }
  }

  componentDidMount() {
    this.props.collectNeighborhoodOptions();
    // passing in hard-coded empty string so that all categories are retrieved
    this.props.collectCategoryOptions({neighborhood: ""})
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="curated-date-form">
        <h3>Curate a Date</h3>
        <form>
            <label htmlFor="date-title">What should we call this date?</label>
            <input id="date-title" type="text" value={this.state.title} name="title" onChange={this.updateInput}/>
            <label htmlFor="date-description">Tell our users what this date is all about:</label>
            <textarea id="date-description" value={this.state.description} name="description" onChange={this.updateInput}></textarea>
            <label htmlFor="neighborhood-select">Which neighborhood of DC is this date in?</label>
            <select id="neighborhood-select">
              <option>Insert a function here that builds option tags for each neighborhood that is collected from db.</option>
            </select>
            <SpotForm />
            <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    collectNeighborhoodOptions: collectNeighborhoodOptions,
    collectCategoryOptions: collectCategoryOptions
  }, dispatch);
}

const mapStateToProps = (state) => {
  return {
    options: state.dates.options
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CuratedDateForm);
