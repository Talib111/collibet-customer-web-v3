import { Mail } from 'lucide-react';
import React, { useEffect, useRef } from 'react'
import toast from 'react-hot-toast';
import { RotatingLines } from 'react-loader-spinner';


function UpdateEmailPopup(props) {
    const profileFormRef = useRef()


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
            <div style={{ 'zIndex': 9999999 }} class="relative bg-white rounded-lg  border-2 border-gray-50 p-10 h-auto">
                <button onClick={() => props?.setprofileFormModalStatus(false)} type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center darks:hover:bg-gray-800 darks:hover:text-white" >
                    <svg class="w-5 h-5" fill="currentColor" ><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <div className="flex items-center mb-2">
                    <span className="w-7 h-7 bg-indigo-600 rounded-full bg-red-5500 text-white inline-flex justify-center items-center mr-2 p-1 font-bold">
                        <Mail className="inline" />
                    </span>{' '}
                    Email <span className='text-sm font-normal pl-2'>(Enter email to continue booking)</span>
                </div>
                <div class="px-2 text-left">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="form-group col-span-12 mb-0">
                            <input
                                type="text"
                                onChange={(e)=>props?.setemail(e.target.value)}
                                className={
                                    "form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md h-10"
                                }
                                placeholder="Enter Email"
                            />
                        </div>

                        <div className="col-span-12">
                            {props?.isLoading ? (
                                <button className="w-full px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight  rounded  hover:bg-black hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-150 ease-in-out flex justify-center items-center h-10">
                                    <RotatingLines
                                        strokeColor="white"
                                        strokeWidth="5"
                                        animationDuration="0.75"
                                        width="25"
                                        visible={true}
                                    />
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        if (props?.email == '') {
                                            toast.error('Enter email')
                                            return
                                        }
                                        props?.updateEmail()
                                    }}
                                    className="w-full px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight  rounded  hover:bg-black hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-150 ease-in-out h-10"
                                >
                                    Submit
                                </button>
                            )}
                        </div>

                    </div>

                </div>
            </div>
        </dialog>
    )
}

export default UpdateEmailPopup