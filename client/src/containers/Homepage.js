import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchDates } from '../actions/dateActions';
import DateList from '../components/DatesList';
import QuickAbout from '../components/homepage/QuickAbout';

class Homepage extends React.Component {
  constructor() {
    super();

    this.state = {
      neighborhood: ""
    }
  }

  componentDidMount() {
    if (this.state.neighborhood || this.state.neighborhood === "") {
      this.props.fetchDates(this.state.neighborhood, 20);
    }
  }

  render() {
    return (
      <div>
        <DateList dates={this.props.dates}/>
        <QuickAbout />
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
  return {
    dates: state.dates.curatedDates
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
