import { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import AxiosInterceptors from '@/components/ApiList/AxiosInterceptors';
import { RotatingLines } from "react-loader-spinner";
import toast from 'react-hot-toast';
import ApiList from '@/components/ApiList/ApiList';
import { allowCharacterNumberSpaceInput, allowNumberInput } from '@/components/Snippets/PowerupFunctions';
import { useSearchParams } from 'next/navigation';
import ApiHeader from '@/components/ApiList/ApiHeader';
import { Star } from 'lucide-react';
import { useRouter } from 'next/router';



export default function GiveReview(props) {
    const [isLoading, setisLoading] = useState(false)
    const { api_giveReview2 } = ApiList()
    const router = useRouter();
    const search = useSearchParams();
    const cartId = search.get("cartId");
    const empId = search.get("empId");

    let validationSchema = yup.object({
        title: yup.string().required('Enter title'),
        description: yup.string().required('Enter review.'),
        employeeRating: yup.string().required('Enter rating'),
        serviceRating: yup.string().required('Enter rating'),
    })


    const initialValues = {
        title: '',
        description: '',
        employeeRating: '',
        serviceRating: '',
    };

    const formik = useFormik({
        initialValues: initialValues,
        enableReinitialize: true,
        onSubmit: (values) => {
            console.log('form values', values)
            submitReview(values)
        }
        , validationSchema
    })

    //    ═════════════║🔰 THIS FUNCTION HANDLES ONCHANGE EVENT 🔰║══════════════════ 
    const handleOnChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        name == 'serviceRating' && formik.setFieldValue("serviceRating", allowNumberInput(value, formik.values.serviceRating, 1))
        name == 'employeeRating' && formik.setFieldValue("employeeRating", allowNumberInput(value, formik.values.employeeRating, 1))
        name == 'title' && formik.setFieldValue("title", allowCharacterNumberSpaceInput(value, formik.values.title, 100))
        name == 'description' && formik.setFieldValue("description", allowCharacterNumberSpaceInput(value, formik.values.description, 400))
    };



    // ══════════════════════════════║ THIS FUNCTION UPDATES PROFILE INFO ║═══════════════════════════════════
    const submitReview = (data) => {
        setisLoading(true)
        let requestBody = {
            title: data?.title,
            description: data?.description,
            employeeRating: data?.employeeRating,
            serviceRating: data?.serviceRating,
            cartId: cartId,
            employeeId: empId

        }

        AxiosInterceptors.post(api_giveReview2, requestBody, ApiHeader())
            .then(function (response) {
                if (response?.data?.error === false) {
                    toast.success('Thanks for giving review.')
                    router.push(`/`);
                }else{
                    toast.success('You already provided review for this.')
                    router.push(`/`);
                }
            })
            .catch(function (error) {
                console.log('==2 error list...', error)
            }).finally(() => {
                setisLoading(false)
            })
    }


    return (
        <div className="block md:p-10 w-full md:w-2/3 md:py-6 rounded-lg mx-auto  bg-white  mb-20 mt-10 ">
            <div className='font-semibold text-xl flex items-center gap-2 mb-2'><Star className='inline' />Give Review</div>
            <form className='shadow-md border p-10' onChange={handleOnChange} onSubmit={formik.handleSubmit}>
                <div className="grid grid-cols-12  ">

                    <div className="form-group col-span-12 md:col-span-6 mb-4 md:px-4">
                        <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Service Review<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
                        <input {...formik.getFieldProps('serviceRating')} type="text" className={'form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md h-10'}
                        />
                        <span className="text-red-600 absolute text-xs">{formik.touched.serviceRating && formik.errors.serviceRating ? formik.errors.serviceRating : null}</span>
                    </div>
                    <div className="form-group col-span-12 md:col-span-6 mb-4 md:px-4">
                        <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Worker Review<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
                        <input {...formik.getFieldProps('employeeRating')} type="text" className={'form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md h-10'}
                        />
                        <span className="text-red-600 absolute text-xs">{formik.touched.employeeRating && formik.errors.employeeRating ? formik.errors.employeeRating : null}</span>
                    </div>



                    <div className="form-group col-span-12 md:col-span-6 mb-4 md:px-4">
                        <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Write Title<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
                        <input {...formik.getFieldProps('title')} type="text" className={'form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md h-10'}
                        />
                        <span className="text-red-600 absolute text-xs">{formik.touched.title && formik.errors.title ? formik.errors.title : null}</span>
                    </div>
                    <div className="form-group col-span-12 md:col-span-6 mb-4 md:px-4">
                        <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Write Review.<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
                        <input {...formik.getFieldProps('description')} type="text" className={'form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md h-10'}
                        />
                        <span className="text-red-600 absolute text-xs">{formik.touched.description && formik.errors.description ? formik.errors.description : null}</span>
                    </div>


                    <div className='col-span-12 mt-4 mb-10 px-4'>
                        {isLoading ? <button
                            className="w-1/3 px-6 py-2.5 bg-[#755698] text-white font-medium text-xs leading-tight  rounded  hover:bg-[#755698] hover:shadow-lg focus:bg-[#755698] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#755698] active:shadow-lg transition duration-150 ease-in-out flex justify-center items-center"
                        >
                            <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="20" visible={true} />
                        </button> :
                            <button
                                type="submit"
                                className="w-1/3 px-6 py-2.5 bg-[#755698] text-white font-medium text-xs leading-tight  rounded  hover:bg-[#5a3d7c] hover:shadow-lg focus:bg-[#755698] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#755698] active:shadow-lg transition duration-150 ease-in-out shadow-lg font-semibold"
                            >
                                Submit Review
                            </button>}
                    </div>

                </div>
            </form>

        </div>
    )
}

