import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CustomDate from '../components/CustomDate';
import GenerateDateForm from '../components/GenerateDateForm';

class GenerateDate extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <GenerateDateForm />
        <CustomDate customDate={this.props.customDate}/>
      </div>
    )
  }
}


// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({}, dispatch);
// }

const mapStateToProps = (state) => {
  return {
    customDate: state.dates.customDate,
  }
}

export default connect(mapStateToProps, null)(GenerateDate);
