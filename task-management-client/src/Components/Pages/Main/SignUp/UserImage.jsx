import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const UserImage = ({setPreviewImage,setImageFile,previewImage}) => {
    const handleDeleteImg = () => {
        setPreviewImage("");
      };
    
      const handleImageChange = (event) => {
        setImageFile(event.target.files[0]);
        const imageUrl1 = URL.createObjectURL(event.target.files[0]);
        setPreviewImage(imageUrl1);
      };
    return (
        <div className=''>
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
                    className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-4 border-gray-200 cursor-pointer "
                    src={previewImage}
                    alt="Preview 2"
                  />
                </div>
              </div>
            )}
          </div>
          <label htmlFor="fileInput2" className="cursor-pointer">
              <div className="inline-block flex flex-col items-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-2 border-gray-400 cursor-pointer">
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
    );
};

export default UserImage;