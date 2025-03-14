import Image from "next/image";

const HotelCard = ({hotel}) => {
  return (
    <div className="flex gap-6 border border-gray/20 p-4 rounded-md">
    <Image
      src={hotel?.thumbNailUrl}
      className="max-h-[162px] max-w-[240px]"
      alt={hotel?.name}
      width={240}
      height={162}
    />
    <div className="flex-1">
      <h2 className="font-bold text-lg">{hotel?.name}</h2>
      <p>📍 {hotel.city}</p>
      <div className="flex gap-2 items-center my-4">
        <div className="bg-primary w-[35px] h-[35px] rounded-sm text-white grid place-items-center font-bold">
          5.3
        </div>
        <span className="font-medium">Very Good</span>
        <span>232 Reviews</span>
      </div>
    </div>
    <div className="flex flex-col gap-2 items-end justify-center">
      <h2 className="text-2xl font-bold text-right">$124/night</h2>
      <p className=" text-right">Per Night for 4 Rooms</p>
      <button className="btn-primary ">Details</button>
    </div>
  </div>
  );
};

export default HotelCard;