fetch(`https://VX_rubbellos/deposit`, {
    method: 'POST',
    body: JSON.stringify({
      key: "Rare",
      price: 250,
      amount: 1,
      type: "money"
    })
})
