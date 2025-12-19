import React, { useEffect, useRef } from 'react'


export default function VideoPlayer(props) {
    const profileFormRef = useRef()


    useEffect(() => {
        if (props?.isVideoPlayer) {
            if (!profileFormRef.current.open) {
                profileFormRef.current.showModal()
            }
        } else {
            if (profileFormRef.current.open) {
                profileFormRef.current.close()
            }
        }

    }, [props?.isVideoPlayer])

    console.log('the video ur lis..',props?.currentVideoUrl)

    return (
        <dialog ref={profileFormRef} className='bg-transparent w-full md:w-1/2'>
            <div style={{ 'zIndex': 9999999 }} className="relative bg-white rounded-lg  border-2 border-gray-50">
                <div className='flex'>
                    <div className='ml-6 mt-4 font-semibold'>
                       Video
                    </div>
                    <div>
                        <button onClick={() => props?.setisVideoPlayer(false)} type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center darks:hover:bg-gray-800 darks:hover:text-white" >
                            <svg className="w-5 h-5" fill="currentColor" ><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                </div>
                <div className="py-2">
                    <video
                        className="w-full cursor-pointer"
                        controls
                    >
                        <source src={'https://res.cloudinary.com/dhpg36mnj/video/upload/v1738075587/Big_Buck_Bunny_1080_10s_1MB_nvmio2.mp4'} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </dialog>
    )
}
