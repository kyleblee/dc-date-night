import React from 'react';
import { Link } from 'react-router-dom';
import { renderCurate } from '../../utils/auth';
import { connect } from 'react-redux';

class MobileMenuList extends React.Component {
  constructor() {
    super();
  }

  renderCurateListItem() {
    if (this.props.session) {
      return (
        <li>{renderCurate()}</li>
      )
    }
  }

  render() {
    return(
      <div id="dropDown">
        <div id="background">
          <ul>
            <li><Link to='/plan-my-date'>Generate</Link></li>
            <li><Link to='/dates'>Browse</Link></li>
            {this.renderCurateListItem()}
            <li><Link to='/#about'>About</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    session: state.session.session
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({}, dispatch)
// }

export default connect(mapStateToProps, null)(MobileMenuList);
