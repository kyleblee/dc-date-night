import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class GenerateDate extends React.Component {


  render() {
    return (
      <div>
        <p>You made it to the Generate Date page.</p>
      </div>
    )
  }
}

// update once you know what you'll call them
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     fetchDates: fetchDates
//   }, dispatch);
// }
//
// const mapStateToProps = (state) => {
//   return {dates: state.dates}
// }

//make sure to add mapDispatchToProps and mapStateToProps in here, once ready
export default connect(null, null)(GenerateDate);
