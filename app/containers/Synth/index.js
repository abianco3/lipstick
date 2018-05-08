/**
*
* Synth
* @description <description of component>
* Use Case : <Why is this component necessary?>
* Parent Components/Containers : [
*  {
*    route: <route>,
*    name: <Component/Container name>,
*  },
* ]
*/
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {
  makeSelectOscillators,
  makeSelectGain,
  makeSelectPatch,
} from './selectors';

export class Synth extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Synth</title>
          <meta name="description" content="Description of Synth" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

Synth.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  gain: makeSelectGain(),
  patch: makeSelectPatch(),
  oscillators: makeSelectOscillators(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'synth', reducer });
const withSaga = injectSaga({ key: 'synth', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Synth);
