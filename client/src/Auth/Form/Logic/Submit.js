export const sumbitForm = (
  shoppingCart,
  setFormStep,
  shoppingMap,
  setserverResponseMessage
) => {
  if (shoppingCart.length === 0) {
    setserverResponseMessage("There are no items inside your cart!");
    setFormStep(400);
    return;
  } else {
    setFormStep("processingPurchase");
    fetch(`/api/update-items`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({
        data: Object.values(shoppingMap),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status >= 200 && data.status <= 299) {
          setFormStep(200);
          return data;
        } else {
          throw data.message;
        }
      })
      .catch((error) => {
        setFormStep(400);
        setserverResponseMessage(error);
      });
  }
};
