import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import getPaymentLinks from '../../redux/actions/getPaymentLinks/getPaymentLinksAction';
import postAuthorizePayment from '../../redux/actions/postAuthorizePayment/postAuthorizePayment';
import { getLinksSelectors } from '../../redux/selectors/getLinksSelectors';

import Payments from './Payments';

const mapStateToProps = state => ({
  paymentLinks: getLinksSelectors(state),
  ...state.authorized,
});

export default connect(
  mapStateToProps, { getPaymentLinks, postAuthorizePayment },
)(withRouter(Payments));
