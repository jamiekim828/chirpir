import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import LoadingBar from 'react-redux-loading';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loading === true ? null : <Dashboard />}
      </div>
    );
  }
}

// mapStateToProps(state, [ownProps])
// ex.
// function mapStateToProps( {tweets} ){
//   return { tweetIds: Object.keys(tweets) };
// }

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  };
}

// Using the connect() function upgrades a component to a container
// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
export default connect()(App);
