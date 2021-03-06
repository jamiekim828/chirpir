import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import LoadingBar from 'react-redux-loading';
import NewTweet from './NewTweet';
import TweetPage from './TweetPage';
import Nav from './Nav';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
            {this.props.loading === true ? null : (
              <div>
                <Route path='/' exact component={Dashboard} />
                <Route path='/tweet/:id' component={TweetPage} />
                <Route path='/new' cpomponent={NewTweet} />
              </div>
            )}
          </div>
        </Fragment>
      </Router>
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
