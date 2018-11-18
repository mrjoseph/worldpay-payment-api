import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AuthorizationSuccessful from './Authorization-successful';

import {
  settlePayment,
  cancelPayment,
  partialSettlePayment,
  queryPayment
} from '../../redux/actions/authorizedOptionAction/authorizedOptionAction';
import {
  getSettledSelectors,
  getAuthorizedSelectors
} from '../../redux/selectors/getLinksSelectors';

const mapStateToProps = state => {
  return {
    authorized: getAuthorizedSelectors(state),
    settledLinks: getSettledSelectors(state),
  }
};

export default connect(
  mapStateToProps, { settlePayment, cancelPayment, partialSettlePayment, queryPayment },
)(withRouter(AuthorizationSuccessful));
