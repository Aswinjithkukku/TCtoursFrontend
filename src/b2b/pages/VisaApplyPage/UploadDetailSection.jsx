import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from '../../../axios'
import Swal from 'sweetalert2'
import { addImageRows } from '../../../redux/slices/visaSlice'

function UploadDetailSection() {
  const dispatch = useDispatch()
  const [passportFistPagePhoto, setPassportFistPagePhoto] = useState([])
  const [passportLastPagePhoto, setPassportLastPagePhoto] = useState([])
  const [passportSizePhoto, setPassportSizePhoto] = useState([])
  const [supportiveDoc1s, setSupportiveDoc1s] = useState([])
  const [supportiveDoc2s, setSupportiveDoc2s] = useState([])

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const { imageRows } = useSelector(state => state.visa)
  const { token } = useSelector(state => state.agents)

  console.log(passportFistPagePhoto);
  console.log(passportLastPagePhoto);
  console.log(passportSizePhoto);
  console.log(supportiveDoc1s);
  console.log(supportiveDoc2s);


  const onChangePassportFistPagePhotoHandler = (e, index) => {
    let temp_images = passportFistPagePhoto
    temp_images[index] = e.target.files[0]
    setPassportFistPagePhoto(temp_images)
  }
  const onChangePassportLastPagePhotoHandler = (e, index) => {
    let temp2_images = passportLastPagePhoto
    temp2_images[index] = e.target.files[0]
    setPassportLastPagePhoto(temp2_images)
  }
  const onChangePassportSizePhotoHandler = (e, index) => {
    let temp3_images = passportSizePhoto
    temp3_images[index] = e.target.files[0]
    setPassportSizePhoto(temp3_images)
  }
  const onChangeSupportiveDoc1sHandler = (e, index) => {
    let temp4_images = supportiveDoc1s
    temp4_images[index] = e.target.files[0]
    setSupportiveDoc1s(temp4_images)
  }
  const onChangeSupportiveDoc2sHandler = (e, index) => {
    let temp5_images = supportiveDoc2s
    temp5_images[index] = e.target.files[0]
    setSupportiveDoc2s(temp5_images)
  }

  useEffect(() => {
    dispatch(addImageRows())
  }, [dispatch])

  const formData = new FormData();
  formData.append("passportFistPagePhoto", passportFistPagePhoto);
  formData.append("passportLastPagePhoto", passportLastPagePhoto);
  formData.append("passportSizePhoto", passportSizePhoto);
  formData.append("supportiveDoc1s", supportiveDoc1s);
  formData.append("supportiveDoc2s", supportiveDoc2s);

  const submitHandler = async (e) => {
    try {
      e.preventDefault()

      setIsLoading(true);
      const config = {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
      const data = JSON.parse(localStorage.getItem("visaOrder"))
      const response = await axios.post(`/b2b/visa/application/document/${data?.VisaApplicationOrder?._id}`, formData, config);

      setIsLoading(false);
      // dispatch(reduceWalletManipulation(activity))
      Swal.fire({
        icon: 'success',
        title: 'VISA Document submission Completed Successfully',
      })
    } catch (err) {

      if (err?.response?.data?.error) {
        setError(err?.response?.data?.error)
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong!',
          text: error,
        })
        setIsLoading(false);
      }
    }
  }

  return (
    <div className='p-6 text-darktext'>
      <div className='my-2 border px-3 py-4 bg-lightblue rounded-[.25rem]'>
        <p className='font-[600] text-[20px] text-soft'>Upload Details</p>
      </div>
      <form onSubmit={submitHandler} encType="multipart/form-data">
        <div className='rounded-md shadow bg-white p-6'>
          {imageRows?.map((row, index) => (
            <div key={index} className='pb-6 '>
              <div className='py-2 text-gray-500 font-[550]  bg-gray-100 border-dashed px-1'>
                <p className=''>{index === 0 ? "Lead passenger" : `${index + 1} passenger`} </p>
              </div>
              <div className='grid grid-cols-5 gap-3 mt-4' key={index}>
                <div className=' flex flex-col'>
                  <label htmlFor="" className='label'>Passport First Page</label>
                  <input
                    className='w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none '
                    name='passportFistPagePhoto'
                    type={"file"}
                    onChange={(e) => onChangePassportFistPagePhotoHandler(e, index)}
                  />
                </div>
                <div className=''>
                  <label htmlFor="" className='label'>Passport Second Page</label>
                  <input
                    className='w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none '
                    name='passportLastPagePhoto'
                    type={"file"}
                    onChange={(e) => onChangePassportLastPagePhotoHandler(e, index)}
                  />
                </div>
                <div className=''>
                  <label htmlFor="" className='label'>Passport Size Photo</label>
                  <input
                    className='w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none '
                    name='passportSizePhoto'
                    type={"file"}
                    onChange={(e) => onChangePassportSizePhotoHandler(e, index)}
                  />
                </div>
                <div className=''>
                  <label htmlFor="" className='label'>Supportive Document 1</label>
                  <input
                    className='w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none '
                    name='supportiveDoc1s'
                    type={"file"}
                    onChange={(e) => onChangeSupportiveDoc1sHandler(e, index)}
                  />
                </div>
                <div className=''>
                  <label htmlFor="" className='label'>Supportive Document 2</label>
                  <input
                    className='w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none '
                    name='supportiveDoc2s'
                    type={"file"}
                    onChange={(e) => onChangeSupportiveDoc2sHandler(e, index)}
                  />
                </div>
              </div>
            </div>
          ))}
          <div className=' flex justify-end mt-4'>
            <button className='bg-lightblue rounded-[.25rem] text-white px-5 h-9'>Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default UploadDetailSection