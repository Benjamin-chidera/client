export const CurrencyFormatter = ({ value }) => {
  // Format the value as currency
  const formattedCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN", // Change this according to your currency
  }).format(value);

  return <span>{formattedCurrency}</span>;
};


