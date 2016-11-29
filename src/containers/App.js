import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as twitterActions from '../actions/minitwitter';
import Main from '../components/Main';


const App = props => {
  const {actions, minitwitter} = props;
  return <Main actions={actions} minitwitter={minitwitter}/>;
};

App.propTypes = {
  actions: PropTypes.object.isRequired,
  minitwitter: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const props = { minitwitter: state.minitwitter };
  return props;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(twitterActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
