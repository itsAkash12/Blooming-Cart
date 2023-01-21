// import React from 'react';
// import { Formik, Form, Field } from 'formik';
// import styled from 'styled-components';
// import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

// const PaymentForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (values) => {
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: 'card',
//       card: elements.getElement(CardElement),
//     });

//     if (!error) {
//       // Send the paymentMethod.id to your server to create a charge
//     }
//   };

//   return (
//     <Formik
//       initialValues={{
//         name: '',
//         email: '',
//         amount: '',
//       }}
//       onSubmit={handleSubmit}
//     >
//       {({ isSubmitting }) => (
//         <StyledForm>
//           <Field name="name" placeholder="Name on Card" />
//           <Field name="email" type="email" placeholder="Email" />
//           <Field name="amount" type="number" placeholder="Amount" />
//           <CardElement />
//           <button type="submit" disabled={isSubmitting}>
//             Pay
//           </button>
//         </StyledForm>
//       )}
//     </Formik>
//   );
// };

// const StyledForm = styled(Form)`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;
//   border: 1px solid #ccc;
// `;

// export default PaymentForm;