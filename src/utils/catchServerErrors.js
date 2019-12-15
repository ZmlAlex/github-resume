import { removeStorageItem } from './setStorageItem';
import { notifications } from './notification';
import * as Sentry from '@sentry/browser';

// function for catch exceptions
const catchServerErrors = (error, dispatch) => {
  console.log('ERROR', error);
  const statusCode = error.response && error.response.status;
  Sentry.captureException(error);

  if (statusCode === 400) console.log('400 ERROR!');
  if (statusCode === 401) {
    console.log(`${statusCode} ERROR`);
    removeStorageItem('token');
    removeStorageItem('accountCurrencyId');
    window.location.href = `${window.location.origin}/login`;
    return dispatch({
      type: 'USER_LOGOUT'
    });
  }
  // if (statusCode === 403) console.log('403 ERROR!');
  if (statusCode === 405) console.log('405 ERROR!');
  if (statusCode === 500) {
    const content = {
      first: 'Internal error occurred. Please try again later.'
    };
    notifications('warning', content, 0);
  }
};

export default catchServerErrors;
