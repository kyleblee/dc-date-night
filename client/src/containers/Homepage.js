import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchDates } from '../actions/dateActions';
import { DatesList } from '../components/DatesList';
import { QuickAbout } from '../components/homepage/QuickAbout';
import PropTypes from 'prop-types';

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
    const { hash } = window.location;

    if (hash === "#about") {
      setTimeout(() => {
        const element = document.getElementById('quick-about');
        const datesLoaded = document.getElementsByClassName('date-card').length > 0;
        if (datesLoaded) {
          element.scrollIntoView({behavior: 'smooth', block: "start", inline: "nearest"});
        }
      }, 250);
    } else {
      window.scrollTo(0,0);
    }

    return (
      <div>
        <DatesList dates={this.props.dates}/>
        <QuickAbout />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchDates
  }, dispatch);
}

const mapStateToProps = (state) => {
  return {
    dates: state.dates.curatedDates
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);

Homepage.propTypes = {
  fetchDates: PropTypes.func.isRequired,
  dates: PropTypes.arrayOf(PropTypes.object)
}
