import { auth } from "@/auth";
import ProfileInfo from "@/component/user/ProfileInfo";
import { redirect } from "next/navigation";

const BookingsPage = async () => {
  const sesson = await auth();
  if(!sesson){
    redirect('/login')
  }
  return (
    <>
      <ProfileInfo />
    </>
  );
};

export default BookingsPage;
