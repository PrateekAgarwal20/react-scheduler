import React from 'react';
import Slot from '../components/Slot';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import {toggle} from '../actions/index.js';

class SchedulerContainer extends React.Component {

  onClick() {
    return this.props.toggleFunc;
  }

  render() {
      return(
        <div>
          <Slot button={this.props.button} toggleFunc={this.onClick()}/>
        </div>
      );
  }
}

const mapStateToProps = state => {
  return {
    button: state.button
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleFunc: () => dispatch(toggle())
  }
}

SchedulerContainer.propTypes = {
    button: PropTypes.bool,
    toggleFunc: PropTypes.func
};

SchedulerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SchedulerContainer);

export default SchedulerContainer;
