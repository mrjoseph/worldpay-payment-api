import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AuthorizationSuccessful from './Authorization-successful';

import { settlePayment } from '../../redux/actions/authorizedOptionAction/authorizedOptionAction';
import { getSettledSelectors, getAuthorizedSelectors } from '../../redux/selectors/getLinksSelectors';

const mapStateToProps = state => {
  console.log('state', state);
  return {
    authorized: getAuthorizedSelectors(state),
    settledLinks: getSettledSelectors(state),
  }
};

export default connect(
  mapStateToProps, { settlePayment },
)(withRouter(AuthorizationSuccessful));
