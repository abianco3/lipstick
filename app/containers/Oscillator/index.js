/**
*
* Oscillator
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
import T from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { updateParameterAction } from '../Synth/actions';
import makeSelectOscillator from './selectors';
import messages from './messages';

export class Oscillator extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.bundleChangeEvent = ::this.bundleChangeEvent;
  }

  bundleChangeEvent({ param, value }) {
    const { id } = this.props;
    return {
      module: 'oscillatorsById',
      param,
      id,
      value,
    };
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Oscillator</title>
          <meta name="description" content="Description of Oscillator" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

Oscillator.propTypes = {
  id: T.number.isRequired,
  /* eslint-disable react/no-unused-prop-types */
  oscillator: T.object.isRequired,
  updateParameter: T.func.isRequired,
  /* eslint-enable react/no-unused-prop-type */
};

const mapStateToProps = createStructuredSelector({
  oscillator: makeSelectOscillator(),
});

function mapDispatchToProps(dispatch) {
  return {
    updateParameter: (e) => {
      const action = this.bundleChangeEvent(e);
      return dispatch(updateParameterAction(action));
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(Oscillator);
