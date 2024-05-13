export async function getAllHotels() {

  const hotels = await hotelModel.find();
  return hotels;
}