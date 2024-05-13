/* eslint-disable react/no-unescaped-entities */

import { getAllHotels } from "@/database/quries";
import Filter from "../search/Filter";
import Search from "../search/Search";
import HotelCard from "./HotelCard";

const HotelList =async () => {
  const hotelList = await getAllHotels()
  // console.log(hotelList)
  return (
    <>
  <section className="bg-[url('/hero-bg.jpg')] bg-cover bg-no-repeat bg-center pt-[100px] pb-[60px]">
    <div className="container items-center py-12 ">
      {/* <div className="lg:max-h-[250px] py-12"> */}
        <Search formList={true} />
      {/* </div> */}
    </div>
  </section>
  {/* Search Result Area */}
  <section className="py-12">
    <div className="container grid grid-cols-12">
      <Filter/>
      <div className="col-span-9">
        {/* Card Container */}
        <div className="space-y-4">
          {
           hotelList.length > 0 && hotelList.map((hotel) => {
              return (
                <HotelCard key={hotel._id} hotel={hotel}/>
              )
            })
          }
          {/* <HotelCard/> */}
        </div>
      </div>
    </div>
  </section>
</>

  );
};

export default HotelList;