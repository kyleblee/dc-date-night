import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchDates } from '../actions/dateActions';
import DateList from '../components/DatesList';

class Homepage extends React.Component {
  componentDidMount() {
    this.props.fetchDates();
  }

  render() {

    debugger;
    return (
      <div>
        <DateList dates={this.props.dates}/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchDates: fetchDates
  }, dispatch);
}

const mapStateToProps = (state) => {
  return {dates: state.dates}
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
