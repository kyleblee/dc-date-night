import React from 'react';
import { NeighborhoodSelect } from '../components/NeighborhoodSelect';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { collectNeighborhoodOptions, fetchDates } from '../actions/dateActions';

class BrowseDates extends React.Component {
  constructor() {
    super();

    this.state = {
      neighborhood: ""
    }
  }

  componentDidMount() {
    this.props.collectNeighborhoodOptions();
  }

  updateNeighborhood = e => {
    this.setState({
      neighborhood: e.target.value
    }, function() {
      this.props.fetchDates(this.state.neighborhood);
    });
  }

  render() {
    return (
      <div className="browse-dates">
        <NeighborhoodSelect
          labelText="Choose a neighborhood to filter results."
          neighborhoods={this.props.neighborhoods}
          selectedNeighborhood={this.state.neighborhood}
          updateNeighborhood={this.updateNeighborhood.bind(this)}/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    collectNeighborhoodOptions: collectNeighborhoodOptions,
    fetchDates: fetchDates
  }, dispatch);
}

const mapStateToProps = (state) => {
  return {
    neighborhoods: state.dates.options.neighborhoods
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BrowseDates);
