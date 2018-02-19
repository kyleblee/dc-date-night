import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CustomDate from '../components/CustomDate';
import GenerateDateForm from '../components/GenerateDateForm';
import { resetGenerate } from '../actions/dateActions';

class GenerateDate extends React.Component {
  render() {
    return (
      <div>
        <GenerateDateForm />
        <CustomDate customDate={this.props.customDate} resetGenerate={this.props.resetGenerate}/>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    resetGenerate: resetGenerate
  }, dispatch);
}

const mapStateToProps = (state) => {
  return {
    customDate: state.dates.customDate,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GenerateDate);
