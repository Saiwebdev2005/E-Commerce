async function postData(userName, totalAmount,cart) {
  const cartDetails = cart.map(item => ({
    id: item.id,
    title: item.title,
    price: item.price
  }));
  
  let titleWithPrice = cartDetails.reduce((acc, item) => {
    acc += `${item.title} = ${item.price}, `;
    return acc;
  }, '');
  
  // Remove the trailing comma and space
  titleWithPrice = titleWithPrice.slice(0, -2);
  
  const dataToSend = {
    name: userName,
    totalAmount: totalAmount,
    cart: cartDetails.length, 
    title_with_price: titleWithPrice 
  };
  
  

  try {
    const response = await fetch('http://localhost:3000/api/customer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataToSend)
    });
     console.log(`Data received is ${JSON.stringify(dataToSend)}`)
    if (!response.ok) {
      throw new Error(`Server responded with status: ${response.status}, The Data sent is ${JSON.stringify(dataToSend)}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
}
export default postData;