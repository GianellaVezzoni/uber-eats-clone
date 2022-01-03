export const VELP_API_KEY = 'wnhVtMpKn7jsAl3Hap9VwMBi1saVt6x03WwxYx9P5eka0EXac1j7bH49i8h0QauKngsUaeqJUVgx0xUwWPJxJ14B98M_1f9kknDWu37v_XmZAOBsKTAlCSOANfDMYXYx';

export const getAllRestaurantsFromYelp = async () => {
  const url = 'https://api.yelp.com/v3/businesses/search?term=restaurant&location=SanDiego';
  
  const apiOptions = {
    headers: {
      Authorization: `Bearer ${VELP_API_KEY}`,
    },
  }
  try {
    const res = await fetch(url, apiOptions);
    const json = await res.json();
    return json.businesses;
  } catch (error) {
    return console.error(error);
  }
}
