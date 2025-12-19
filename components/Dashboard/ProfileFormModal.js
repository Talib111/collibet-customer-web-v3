import React, { useEffect, useRef } from 'react'
import { FiAlertCircle } from 'react-icons/fi'
// import { useNavigate } from 'react-router'
// import { RotatingLines } from "react-loader-spinner";
import ProfileForm from './ProfileForm';


function ProfileFormModal(props) {
    const profileFormRef = useRef()
    // const navigate = useNavigate()


    useEffect(() => {
        if (props?.profileFormModalStatus) {
            if (!profileFormRef.current.open) {
                profileFormRef.current.showModal()
            }
        } else {
            if (profileFormRef.current.open) {
                profileFormRef.current.close()
            }
        }

    }, [props?.profileFormModalStatus])

    return (
        <dialog ref={profileFormRef} className='bg-transparent'>
            <div style={{ 'zIndex': 9999999 }} class="relative bg-white rounded-lg  border-2 border-gray-50">
                <button onClick={() => props?.setprofileFormModalStatus(false)} type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center darks:hover:bg-gray-800 darks:hover:text-white" >
                    <svg class="w-5 h-5" fill="currentColor" ><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <div class="px-2 text-left">
                    <ProfileForm isLoading={props?.isLoading} updateCustomerDetails={props?.updateCustomerDetails} />

                </div>
            </div>
        </dialog>
    )
}

export default ProfileFormModal