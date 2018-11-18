import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AuthorizationSuccessful from './Authorization-successful';

import { settlePayment } from '../../redux/actions/authorizedOptionAction/authorizedOptionAction';

const mapStateToProps = state => ({
  authorized: state.authorized.authorized,
});

export default connect(
  mapStateToProps, { settlePayment },
)(withRouter(AuthorizationSuccessful));
