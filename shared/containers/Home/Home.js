import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { testRedux } from './actions';

class Home extends React.PureComponent {
  // eslint-disable-line
  render() {
    return (
      <div>
        <Helmet>
          <title>Homepage</title>
        </Helmet>
        Hello
        <button className="btn" onClick={this.props.testRedux}>
          Click
        </button>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
    testRedux: () => dispatch(testRedux()),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
