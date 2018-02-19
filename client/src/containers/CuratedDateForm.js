import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SpotForm } from '../components/SpotForm';

class CuratedDateForm extends React.Component {
  constructor() {
    super();

    this.state = {
      title: "",
      description: "",
      error: undefined
    }
  }

  render() {
    return (
      <div className="curated-date-form">
        <h3>Curate a Date</h3>
        <form>
            <label htmlFor="date-title">What should we call this date?</label>
            <input id="date-title" type="text" value={this.state.title} />
            <label htmlFor="date-description">Tell our users what this date is all about:</label>
            <textarea id="date-description" value={this.state.description}></textarea>
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
  return bindActionCreators({}, dispatch);
}

// const mapStateToProps = (state) => {
//   return {
//     customDate: state.dates.customDate,
//     options: state.dates.options
//   }
// }

export default connect(null, mapDispatchToProps)(CuratedDateForm);
