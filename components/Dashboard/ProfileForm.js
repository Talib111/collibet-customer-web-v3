import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useAppContext } from 'context/AuthContext';
import ApiList from '../ApiList/ApiList';
import { allowCharacterNumberSpaceInput, allowCharacterSpaceInput, allowMailInput, allowNumberInput } from '../Snippets/PowerupFunctions';
import ApiHeader from '../ApiList/ApiHeader';
import AxiosInterceptors from '@/components/ApiList/AxiosInterceptors';

import { RotatingLines } from "react-loader-spinner";
import SearchableSelect from '../UI/SearchableSelect';



function ProfileForm(props) {
    const [isLoading, setisLoading] = useState(false)
    const [stateList, setstateList] = useState([])
    const [districtList, setdistrictList] = useState([])
    const [currentSelectedStateId, setcurrentSelectedStateId] = useState(null)
    const [currentSelectedDistrictId, setcurrentSelectedDistrictId] = useState(null)
    const { api_getAllStates, api_getAllDistrictsByStateId } = ApiList()
    const { user } = useAppContext();
    let validationSchema = yup.object({
        fullName: yup.string().required('Enter name'),
        mobileNo: yup.string().required('Enter mobile no.'),
        email: yup.string().required('Enter email'),
        pincode: yup.string().required('Enter pincode').min(6, 'Enter six digit pin code'),
        gender: yup.string().required('Select Gender'),
        address: yup.string().required('Enter Address'),
        landmark: yup.string().required('Enter Landmark'),
    })


    const initialValues = {
        fullName: user?.name,
        mobileNo: user?.mobileNumber,
        email: user?.email,
        pincode: user?.pinCode,
        gender: user?.gender,
        address: user?.address,
        landmark: user?.landmark,
    };

    const formik = useFormik({
        initialValues: initialValues,
        enableReinitialize: true,
        onSubmit: (values) => {
            values.stateId = currentSelectedStateId?.value
            values.stateName = currentSelectedStateId?.label
            values.districtId = currentSelectedDistrictId?.value
            values.districtName = currentSelectedDistrictId?.label
            props?.updateCustomerDetails(values)
        }
        , validationSchema
    })

    console.log('current ditracit id...', currentSelectedDistrictId)
    console.log('current state id...', currentSelectedStateId)
    //    ═════════════║ THIS FUNCTION HANDLES ONCHANGE EVENT ║══════════════════ 
    const handleOnChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        name == 'fullName' && formik.setFieldValue("fullName", allowCharacterSpaceInput(value, formik.values.fullName, 50))
        name == 'mobileNo' && formik.setFieldValue("mobileNo", allowNumberInput(value, formik.values.mobileNo, 10))
        name == 'email' && formik.setFieldValue("email", allowMailInput(value, formik.values.email, 50))
        name == 'pincode' && formik.setFieldValue("pincode", allowNumberInput(value, formik.values.pincode, 6))
        name == 'address' && formik.setFieldValue("address", allowCharacterNumberSpaceInput(value, formik.values.address, 50))
        name == 'landmark' && formik.setFieldValue("landmark", allowCharacterNumberSpaceInput(value, formik.values.landmark, 50))
    };

    // ═════════════║ THIS FUNCTION FETCHES STATE LIST║══════════════════
    const fetchStateList = () => {
        setisLoading(true);
        AxiosInterceptors.get(`${api_getAllStates}`, ApiHeader())
            .then(function (response) {
                if (!response?.data?.error) {
                    const options = Array.isArray(response?.data?.data?.docs)
                        ? response?.data?.data?.docs?.map((item) => ({
                            value: item?._id,
                            label: `${item?.state}`,
                        }))
                        : []

                    setstateList(options);
                }
            })
            .catch(function (error) { })
            .finally(() => {
                setisLoading(false);
            });
    };

    // ═════════════║ THIS FUNCTION FETCHES DISTRICT LIST BY STATE ID║══════════════════
    const fetchDistrictById = (id) => {
        setisLoading(true);
        AxiosInterceptors.get(`${api_getAllDistrictsByStateId}/${id}`, ApiHeader())
            .then(function (response) {
                if (!response?.data?.error) {
                    const districtOptions = Array.isArray(response?.data?.data?.docs)
                        ? response?.data?.data?.docs?.map((item) => ({
                            value: item?._id,
                            label: `${item?.district}`,
                        }))
                        : []

                    setdistrictList(districtOptions);
                }
            })
            .catch(function (error) { })
            .finally(() => {
                setisLoading(false);
            });
    };

    useEffect(() => {
        fetchStateList()
    }, [])

    useEffect(() => {
        if (user?.stateId && user?.stateName) {
            setcurrentSelectedStateId({ label: user?.stateName, value: user?.stateId })
            fetchDistrictById(user?.stateId)
        }
        if (user?.districtId && user?.districtName) {
            setcurrentSelectedDistrictId({ label: user?.districtName, value: user?.districtId })
        }
    }, [user])

    return (
        <div className="block md:p-4 w-full md:w-2/3 md:py-6 rounded-lg mx-auto  bg-white sm:px-0">
            <form onChange={handleOnChange} onSubmit={formik.handleSubmit}>
                <div className="grid grid-cols-12  ">

                    <div className="form-group col-span-12 md:col-span-6 mb-4 md:px-4">
                        <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Full Name<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
                        <input {...formik.getFieldProps('fullName')} type="text" className={'form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md h-10'}
                        />
                        <span className="text-red-600 absolute text-xs">{formik.touched.fullName && formik.errors.fullName ? formik.errors.fullName : null}</span>
                    </div>
                    <div className="form-group col-span-12 md:col-span-6 mb-4 md:px-4">
                        <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Mobile No.<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
                        <input {...formik.getFieldProps('mobileNo')} type="text" className={'form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md h-10'}
                        />
                        <span className="text-red-600 absolute text-xs">{formik.touched.mobileNo && formik.errors.mobileNo ? formik.errors.mobileNo : null}</span>
                    </div>


                    <div className="form-group col-span-12 md:col-span-6 mb-4 md:px-4">
                        <label className={'form-label inline-block mb-1 text-gray-600 text-sm font-semibold'}>email</label>
                        <input  {...formik.getFieldProps('email')} className={'form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md h-10'}
                        />
                        <span className="text-red-600 absolute text-xs">{formik.touched.email && formik.errors.email ? formik.errors.email : null}</span>
                    </div>


                    <div className="form-group col-span-12 md:col-span-6 mb-4 md:px-4">
                        <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Gender<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
                        <select {...formik.getFieldProps('gender')} type="text" className={'form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md h-10 cursor-pointer'}
                        >
                            <option value="" >Select</option>
                            <option value="male" >Male</option>
                            <option value="female" >Female</option>
                        </select>
                        <span className="text-red-600 absolute text-xs">{formik.touched.gender && formik.errors.gender ? formik.errors.gender : null}</span>
                    </div>
                    <div className="form-group col-span-12 md:col-span-6 mb-4 md:px-4">
                        <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">State<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
                        <SearchableSelect
                            value={currentSelectedStateId}
                            onChange={(value) => {
                                setcurrentSelectedStateId(value)
                                fetchDistrictById(value?.value)
                            }}
                            options={stateList}
                            placeholder="Select State"
                        />
                        <span className="text-red-600 absolute text-xs">{currentSelectedStateId === null && 'Select State'}</span>
                    </div>
                    <div className="form-group col-span-12 md:col-span-6 mb-4 md:px-4">
                        <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">District<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
                        <SearchableSelect
                            value={currentSelectedDistrictId}
                            onChange={(value) => setcurrentSelectedDistrictId(value)}
                            options={districtList}
                            placeholder="Select Distract"
                        />
                        <span className="text-red-600 absolute text-xs">{currentSelectedDistrictId === null && 'Select District'}</span>
                    </div>



                    <div className="form-group col-span-12 md:col-span-6 mb-4 md:px-4">
                        <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Pincode<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
                        <input {...formik.getFieldProps('pincode')} type="text" className={'form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md h-10'}
                        />
                        <span className="text-red-600 absolute text-xs">{formik.touched.pincode && formik.errors.pincode ? formik.errors.pincode : null}</span>
                    </div>
                    <div className="form-group col-span-12 md:col-span-6 mb-4 md:px-4">
                        <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Address<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
                        <input {...formik.getFieldProps('address')} type="text" className={'form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md h-10'}
                        />
                        <span className="text-red-600 absolute text-xs">{formik.touched.address && formik.errors.address ? formik.errors.address : null}</span>
                    </div>

                    <div className="form-group col-span-12 md:col-span-6 mb-4 md:px-4">
                        <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Landmark<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
                        <input {...formik.getFieldProps('landmark')} type="text" className={'form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md h-10'}
                        />
                        <span className="text-red-600 absolute text-xs">{formik.touched.landmark && formik.errors.landmark ? formik.errors.landmark : null}</span>
                    </div>



                    <div className='col-span-12 mt-2 mb-10'>
                        {props?.isLoading ? <button
                            className="w-full px-6 py-2.5 bg-[#755698] text-white font-medium text-xs leading-tight  rounded  hover:bg-[#755698] hover:shadow-lg focus:bg-[#755698] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#755698] active:shadow-lg transition duration-150 ease-in-out flex justify-center items-center"
                        >
                            <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="25" visible={true} />
                        </button> :
                            <button
                                type="submit"
                                className="w-full px-6 py-2.5 bg-[#755698] text-white font-medium text-xs leading-tight  rounded  hover:bg-[#755698] hover:shadow-lg focus:bg-[#755698] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#755698] active:shadow-lg transition duration-150 ease-in-out"
                            >
                                {props?.currentId === null ? 'Submit' : 'Update'}
                            </button>}
                    </div>

                </div>
            </form>

        </div>
    )
}

export default ProfileForm