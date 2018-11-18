import { connect } from 'react-redux';
import AuthorizedOptions from './Authorized-options';
import {
  cancelPayment, settlePayment, partialSettlePayment, queryPayment,
} from '../../redux/actions/authorizedOptionAction/authorizedOptionAction';

export const mapStateToProps = state => ({
  settledLinks: state.settled.authorized._links,
});
export const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizedOptions);
