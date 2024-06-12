import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosEmployee from "../../Hooks/useAxiosEmployee";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const CheckoutForm = ({ price }) => {
  console.log("From checkout component", price);
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [trxId, setTrxId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const { user } = useAuth();
  const axiosPublic = useAxiosEmployee();

  useEffect(() => {
    if (price > 0) {
      axiosPublic
        .post("/create-payment-intent", { price: price })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosPublic, price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("Payment Error", error);
      setError(error.message);
    } else {
      console.log("Payment Method", paymentMethod);
      setError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "Anonymous",
            email: user?.email || "Anonymous",
          },
        },
      });

    if (confirmError) {
      setError(confirmError.message);
    } else {
      if (paymentIntent.status === "succeeded") {
        setTrxId(paymentIntent.id);
        const payment = {
          email: user.email,
          price: price,
          trxId: paymentIntent.id,
          date: new Date(),
          status: "pending",
          // add the necessary cart IDs here
        };

        const res = await axiosPublic.post("/payments", payment);
        if (res.data.paymentResult.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your payment has been successful.",
            timer: 1000,
          });
          // setPrice(0); // Reset the price to prevent multiple payments
          navigate("/");
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="py-2 my-5 lg:text-lg text-xs font-inter font-bold bg-blue-700 rounded-xl text-white px-5"
        type="submit"
        disabled={!stripe || !clientSecret || price <= 0}
      >
        Pay
      </button>
      <p className="font-inter text-red-500">{error}</p>
      {trxId && (
        <p className="font-inter font-bold text-green-500">
          Your Trx id:{" "}
          <span className="font-cinzel text-yellow-600">{trxId}</span>
        </p>
      )}
    </form>
  );
};

export default CheckoutForm;
