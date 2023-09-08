import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";

const EditProfile = () => {
  const users = useSelector((state) => state.userData.userData);
  const [imageFile, setImageFile] = useState(null);
  const [previewImage, setPreviewImage] = useState("");
  const [name,setName] = useState('')
  const [bio,setBio] = useState('')

  const handleDeleteImg = () => {
    setPreviewImage("");
  };

  const handleImageChange = (event) => {
    setImageFile(event.target.files[0]);
    const imageUrl1 = URL.createObjectURL(event.target.files[0]);
    setPreviewImage(imageUrl1);
  };

  const handleSubmit = (event) => {
    event.preventDefault()

        const formData = new FormData()
        console.log(formData);
        
        formData.append('name', name)
        formData.append('bio', bio)
        formData.append('img', imageFile)

        fetch(`http://localhost:3005/api/editProfile/${users?.id}`, {
            method: 'PUT',
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                if (data?.acknowledged) {
                    toast.success("Congratulation! Upload successfully.")
                }
                
            })
  };

  return (
    <form onSubmit={handleSubmit} >
      <div className="px-36">
        <div className="flex flex-col items-center">
          <div className="relative flex flex-col items-center mb-7">
            {previewImage && (
              <div className="">
                <FontAwesomeIcon
                  onClick={handleDeleteImg}
                  className="absolute mt-2 ml-2 w-3 h-3 p-1 bg-red-500 rounded-full text-2xl text-white font-bold z-10 cursor-pointer"
                  icon={faX}
                />
                <div className="">
                  <img
                    className="w-40 h-40 bg-white rounded-full flex items-center justify-center border-4 border-gray-200 cursor-pointer "
                    src={previewImage}
                    alt="Preview 2"
                  />
                </div>
              </div>
            )}
          </div>
          <div>
            <label htmlFor="fileInput2" className="cursor-pointer">
              <div className="inline-block flex flex-col items-center">
                <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center border-2 border-gray-400 cursor-pointer">
                  <FontAwesomeIcon
                    className="text-black text-4xl font-bold"
                    icon={faUser}
                  />
                </div>
                <h1 className="text-xs mt-2">Upload Profile Picture</h1>
              </div>
              <input
                id="fileInput2"
                className="hidden"
                type="file"
                onChange={handleImageChange}
              />
            </label>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex flex-col mb-5">
            <div className="ml-6 inline-block mb-[-13px] z-20">
              <span className="font-semibold bg-white px-1">Your Name</span>
            </div>
            <input
              className="border-2 border-gray-200  rounded-full px-6 py-4 text-xl font-semibold"
              type="text"
              name="name"
              onChange={() => setName(users?.name)}
            />
          </div>

          <div className="flex flex-col mb-5">
            <div className="ml-6 inline-block mb-[-13px] z-20">
              <span className="font-semibold bg-white px-1">Write Bio</span>
            </div>
            <input
              className="border-2 border-gray-200  rounded-full px-6 py-4 text-xs "
              type="text"
              name="bio"
              onChange={(e) => setBio(e.target.value)}
            />
          </div>
        </div>
        <input
          className="bg-black text-white px-4 py-2 cursor-pointer"
          type="submit"
          value="Submit"
        />
      </div>
    </form>
  );
};

export default EditProfile;
