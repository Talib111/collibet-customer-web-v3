import React, { useState, useEffect, useRef } from "react";
import { RotatingLines } from "react-loader-spinner";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import * as yup from "yup";
import Image from "next/image";

function CommonUploadFilePopup(props) {
  const [selectedFileUrl, setselectedFileUrl] = useState('/collibet_logo.png');
  const [sizeValidationStatus, setsizeValidationStatus] = useState(false);
  const uploadFilePopupRef = useRef();

  //═════════════║ THIS IS YUP VALIDATION SCHEMA ║══════════════════
  let validationSchema = yup.object({
    file: yup.string().required("Select file"),
  });


  //═════════════║ THIS IS FORMIK INITIAL VALUES ║══════════════════
  const initialValues = {
    file: "",
  };

  //═════════════║ THIS IS FORMIK OBJECT ║══════════════════
  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log("form values", values);
      props?.uploadImageHelper(null, props?.type, "direct");
    },
    validationSchema,
  });

  const onhandleImage = (e) => {
    setsizeValidationStatus(false)
    const file = e.target.files[0];

    // Check if file exists
    if (file) {
      // Check file size
      const fileSize = file.size; // in bytes
      const maxSize = 1024 * 1024; // 1 MB

      if (fileSize > maxSize) {
        // File size exceeds 1 MB, display an error message or handle accordingly
        toast.error('Select image size lower than 1 MB')
        setsizeValidationStatus(true)
        // alert('file size is greater than 1 mb')
        return;
      }

      // File size is within limit, proceed with setting the file
      setselectedFileUrl(URL.createObjectURL(file));
      props?.setpackageImage(file);
    } else {
      // Handle case where no file is selected
      console.error("No file selected.");
    }
  };

  //═════════════║ THIS FUNCTION HANDLES THE ONCHANGE ║══════════════════
  const handleOnChange = (e) => {
    let name = e.target.name;
    {
      name === "file" && onhandleImage(e);
    }
  };

  //═════════════║ THIS FUNCTION FEEDS DATA IN CASE OF EDIT ║══════════════════
  const feedFormData = () => {
    console.log("inside feed data", props?.currentIdData);
    setselectedFileUrl(props?.commonImageUrl);

  };

  useEffect(() => {
    if (props?.currentId !== null) {
      feedFormData();
    }
  }, [props?.currentId]);

  useEffect(() => {
    if (props?.uploadFilePopupStatus) {
      if (!uploadFilePopupRef.current.open) {
        //═════════════║ RESETTING THE FORM VALUE ║══════════════════
        formik.resetForm();
        uploadFilePopupRef.current.showModal();
      }
    } else {
      if (uploadFilePopupRef.current.open) {
        uploadFilePopupRef.current.close();
      }
    }
  }, [props?.uploadFilePopupStatus]);

  return (
    <>
      <Toaster />

      <dialog ref={uploadFilePopupRef} className="bg-transparent">
        <div className="w-full mx-auto my-4 bg-white px-2 rounded-xl shadow shadow-slate-300">
          <div className="px-8 pt-4">
            <button
              onClick={() => props?.handlePackageModalClose()}
              type="button"
              class="absolute top-20 right-8 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center darks:hover:bg-gray-800 darks:hover:text-white"
            >
              <svg class="w-5 h-5" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <h1 className="text-2xl font-medium">Upload {props?.type}</h1>
          </div>

          <form
            className="p-8"
            onChange={handleOnChange}
            onSubmit={formik.handleSubmit}
          >
            <div className="form-group col-span-12 md:col-span-2 mb-4 md:px-4">
              <label
                className={
                  "form-label inline-block mb-1 text-gray-600 text-sm font-semibold"
                }
              >
                {props?.title}
              </label>
              <input
                {...formik.getFieldProps("file")}
                accept={".png, .jpg, .jpeg"}
                type="file"
                className={
                  "form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md h-10 cursor-pointer "
                }
              />
              <span className="text-red-600 absolute text-xs">
                {formik.touched.file && formik.errors.file
                  ? formik.errors.file
                  : null}
              </span>
              {sizeValidationStatus && <span className="text-red-600 absolute text-xs">
                Image size should be less than 1 MB
              </span>}
            </div>

            {/* ═════════════║4 THIS IS FILE PREVIEW ║══════════════════  */}
            <div className="col-span-12">
              <Image
                height={100}
                width={100}
                className="w-28 mx-auto rounded-full"
                src={selectedFileUrl}
                alt=""
              />
            </div>

            {/* ══════════════════════════════║🔰 LOGIN BUTTONS 🔰║═══════════════════════════════════ */}
            <div>
              {props?.isLoading ? (
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-md bg-[#755698] px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-[#755698]/80"
                >
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
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-[#755698] px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-[#755698]/80"
                >
                  Upload
                </button>
              )}
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default CommonUploadFilePopup