import loginReducer from './paymentsReducer'
import { LOGIN_CREDS } from '../../actions/getPaymentLinks/getPaymentLinksAction';

const INITIAL_STATE = {};

describe.skip('Login credentials',() => {

  it('Should return initial state', () => {
    expect(loginReducer(undefined)).to.be.eql(INITIAL_STATE);
  });

  it('Should return LOGIN_CREDS with FAILED', () => {
    const ACTION = {
      type: `${LOGIN_CREDS}.FAILED`,
      error: {
        code: 'incorrect.login.details',
        message: 'Please check your email and password and try again',
      }
    };

    const stateAfter = {
      loginCredentialsError: {
        code: 'incorrect.login.details',
        message: 'Please check your email and password and try again',
      },
      handbackUrl: '',
    };

    expect(loginReducer(INITIAL_STATE, ACTION)).to.be.eql(stateAfter);
  });
});
