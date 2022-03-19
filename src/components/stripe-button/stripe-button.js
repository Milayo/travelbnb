import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey =
      'pk_test_51JWk4tDr7FJ4ewEpe7AQTlUP9hzi1y0ZtTX6pSdW1G1VvTpY927cMjeWEVwUm3HZygGb7sOdD5xEFm9HEkVYtMGd00be4pjmzD';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
  }
    return (
      <StripeCheckout
          label='Pay Now'
          name='Travel BNB'
          billingAddress
          shippingAddress
          image=''
          description={`Your total is ${price}`}
          amount={priceForStripe}
          panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
      />
  )
}

export default StripeButton;