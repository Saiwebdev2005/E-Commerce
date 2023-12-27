const fetchPurchaseData = async (name) => {
  if (!name) {
    console.error('User name is undefined');
    return;
  }

  try {
    const response = await fetch(`http://localhost:3000/api/purchase`, {
      headers: {
        'x-user-name': name
      }
    });
    
    if (!response.ok) {
      console.error('Error status:', response.status);
      return;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
}
export default fetchPurchaseData;
