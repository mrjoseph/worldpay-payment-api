export default (state) => {
  const {
    cardCVC,
    cardExpiryMonth,
    cardExpiryYear,
    cardNumber,
    cardHoldersName,
    cards,
  } = state;
  return {
    transactionReference: 'your-transaction-reference',
    instruction: {
      description: 'book',
      value: {
        currency: 'GBP',
        amount: 789,
      },
      paymentInstrument: {
        cvc: cardCVC,
        type: cards,
        cardNumber,
        cardHolderName: cardHoldersName,
        billingAddress: {
          address1: 'Worldpay',
          address2: ' 270-289 Milton Rd',
          address3: 'Milton',
          city: 'Cambridge',
          countryCode: 'GB',
          postalCode: 'CB4 0WE',
          state: 'CAMBS',
        },
        cardExpiryDate: {
          month: cardExpiryMonth,
          year: cardExpiryYear,
        },
      },
    },
  };
};
