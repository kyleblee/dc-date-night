import React from 'react';
import { NeighborhoodSelect } from '../components/forms/NeighborhoodSelect';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { collectNeighborhoodOptions, fetchDates } from '../actions/dateActions';
import { DatesList } from '../components/DatesList';
import { Errors } from '../components/Errors';
import PropTypes from 'prop-types';

class BrowseDates extends React.Component {
  constructor() {
    super();

    this.state = {
      neighborhood: "",
      errors: undefined
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.dates.length === 0) {
      this.setState({
        errors: "Oops! There aren't any curated dates for this neighborhood. Try generating a custom date, instead!"
      })
    } else {
      this.setState({
        errors: undefined
      })
    }
  }

  componentDidMount() {
    this.props.collectNeighborhoodOptions();
    this.props.fetchDates(this.state.neighborhood, undefined);
  }

  updateNeighborhood = e => {
    this.setState({
      neighborhood: e.target.value
    }, function() {
      this.props.fetchDates(this.state.neighborhood, undefined);
    });
  }

  render() {
    return (
      <div className="browse-dates">
        <NeighborhoodSelect
          labelText="Choose a neighborhood to filter results:"
          neighborhoods={this.props.neighborhoods}
          selectedNeighborhood={this.state.neighborhood}
          updateNeighborhood={this.updateNeighborhood}/>
        <Errors errors={this.state.errors}/>
        <DatesList dates={this.props.dates} />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    collectNeighborhoodOptions,
    fetchDates
  }, dispatch);
}

const mapStateToProps = (state) => {
  return {
    neighborhoods: state.dates.options.neighborhoods,
    dates: state.dates.curatedDates
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BrowseDates);

BrowseDates.propTypes = {
  collectNeighborhoodOptions: PropTypes.func.isRequired,
  fetchDates: PropTypes.func.isRequired,
  neighborhoods: PropTypes.arrayOf(PropTypes.string),
  dates: PropTypes.arrayOf(PropTypes.object)
}
