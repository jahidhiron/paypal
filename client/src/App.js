import "./App.css";
import { PayPalButton } from "react-paypal-button-v2";

function App() {
  return (
    <PayPalButton
      amount="5.00"
      onSuccess={(details, data) => {
        alert("Transaction completed by " + details.payer.name.given_name);

        // OPTIONAL: Call your server to save the transaction
        return fetch("http://localhost:8888/api/orders", {
          method: "post",
          body: JSON.stringify({
            orderID: data.orderID,
            xyz: "pqr",
          }),
        });
      }}
      options={{
        clientId:
          "Af6QwWMBkPpZrpFNNgXfh8afMiCBrAMX0WlxyhgCNzR2FE7OYlA5X78SUlixWavBWeTIMjtweDMsJM4q",
        currency: "JPY",
      }}
    />
  );
}

export default App;
