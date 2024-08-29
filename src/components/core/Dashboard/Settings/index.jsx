import React from 'react'
import ChangeProfilePicture from './ChangeProfilePictures';
import DeleteAccount from './DeleteAccount';
import UpdatePassword from './UpdatePassword';
import EditProfile from './EditProfile';

const index = () => {
  return (
    <>
      <h1 className='mb-14 text-3xl font-medium text-richblack-5'>  
        Edit Profile
      </h1>
      {/* chang  profile pictures */}
      <ChangeProfilePicture/>
      {/* profile */}
      <EditProfile/>
      {/* password */}
      <UpdatePassword/>
      {/* delete account */}
      <DeleteAccount/>
    </>
  )
    

}

export default index;
