import React from 'react';
import { NeighborhoodSelect } from '../components/NeighborhoodSelect';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { generateDate, collectNeighborhoodOptions, collectCategoryOptions } from '../actions/dateActions';

class BrowseDates extends React.Component {
  constructor() {
    super();

    this.state = {}
  }

  componentDidMount() {
    this.props.collectNeighborhoodOptions();
  }

  render() {
    return (
      <div className="browse-dates">
        <NeighborhoodSelect
          labelText="Choose a neighborhood to filter results."
          neighborhoods={this.props.neighborhoods}/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    collectNeighborhoodOptions: collectNeighborhoodOptions
  }, dispatch);
}

const mapStateToProps = (state) => {
  return {
    neighborhoods: state.dates.options.neighborhoods
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BrowseDates);
