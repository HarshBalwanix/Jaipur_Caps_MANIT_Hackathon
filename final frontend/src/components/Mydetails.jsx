import React, {useEffect, useState} from "react";

const MyDetails = () => {

  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState(null);


  async function getUserData() {
    console.log(userId)
    const res = await fetch("http://localhost:3000/getStudentGradebook", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'  // Set the content type to application/json
      },
      body: JSON.stringify({
        studentId: userId
      })
    })
    console.log(res)
    let data = await res.json();
    console.log("Called")
    // setUserData({...userData, ...data});
    setUserData({...data});
    localStorage.setItem('grade_book', JSON.stringify(data))
    console.log(userData)
  }


  useEffect(() => {
    setUserName(localStorage.getItem("user_name"));
    setUserId(localStorage.getItem("user_id"));
  }, []);

  useEffect(() => {
    getUserData();
  }, [userId]);

  return (
    <div className="rounded-3xl bg-zinc-100 max-w-[632px] min-h-[396px] mx-auto">
      <div className=" p-20">
        <div className="flex flex-row mb-4  ">
          <div className="p-1 bg-neutral-600 rounded-md text-white font-bold w-40 mr-4">
            <span className=" pr-4 rounded-xl  ">Name:</span>
          </div>
          <div className="p-2 bg-neutral-600 rounded-md text-white font-bold w-80">
            {userData?.BasicDetails.studentBasicInfoData.name}
          </div>
        </div>

        <div className="flex flex-row mb-4 ">
          <div className="p-1 bg-neutral-600 rounded-md text-white font-bold w-40 mr-4">
            <span className="pr-4 rounded-xl">Roll Number:</span>
          </div>
          <div className="p-2 bg-neutral-600 rounded-md text-white font-bold w-80">
            {userData?.BasicDetails.studentBasicInfoData.id}
          </div>
        </div>

        <div className="flex flex-row mb-4 ">
          <div className="p-1 bg-neutral-600 rounded-md text-white font-bold w-40 mr-4">
            <span className="pr-4 rounded-xl">Class ID:</span>
          </div>
          <div className="p-2 text-white font-bold rounded-md bg-neutral-600 w-80">
            A101
          </div>
        </div>

        <div className="flex flex-row mb-4 ">
          <div className="p-1 bg-neutral-600 rounded-md text-white font-bold w-40 mr-4">
            <span className="pr-4 rounded-xl">Phone Number:</span>
          </div>
          <div className="text-white font-bold p-2 rounded-md bg-neutral-600 w-80">
            123-456-7890
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDetails;
