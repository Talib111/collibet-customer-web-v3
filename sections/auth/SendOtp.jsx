import React from "react";
import { toast } from "react-hot-toast";
import { useFormik, Form, FormikProvider } from "formik";
import * as Yup from "yup";
import { InputField, LoadingButton } from "@/components/forms";
import axios from "./../../utils/axios";

export default function SendOtp({ data, isSignup = false, next }) {
	const formik = useFormik({
		initialValues: data,
		validationSchema: Yup.object().shape({
			mobileNumber: Yup.string()
				.required("Mobile number is required")
				.min(10, "Mobile number is too short")
				.max(10, "Mobile number is too long"),
		}),
		onSubmit: async (values) => {
			try {
				const res = await axios.post("/v1/auth/send-otp", {
					mobileNumber: values.mobileNumber,
					isSignup,
				});
				if (res.data.error === false) {
					localStorage.setItem("currentMobileNo", values?.mobileNumber); 
					toast.success("OTP sent successfully");
					next(
						{
							mobileNumber: values.mobileNumber,
							token: res.data.payload,
						},
						false
					);
				} else {
					toast.error(res.data.message);
				}
			} catch (err) {
				toast.error(err.message);
			}
		},
	});
	const handleMobileNumberChange = (e) => {
		const { value } = e.target;
		if (/^\d{0,10}$/.test(value)) {
			formik.setFieldValue("mobileNumber", value);
		}
	};
	const { handleSubmit } = formik;

	return (
		<FormikProvider value={formik}>
			<Form autoComplete="off" noValidate onSubmit={handleSubmit}>
				<div>
					<InputField
						type="number"
						formik={formik}
						name="mobileNumber"
						label="Mobile"
						isRequiredLabel
						onChange={handleMobileNumberChange}
						value={formik.values.mobileNumber}
						onBlur={formik.handleBlur}
						onKeyDown={(e) =>
							["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
						}
					/>
					<div className="mt-8">
						<LoadingButton
							type="submit"
							color="primary"
							isLoading={formik.isSubmitting}
						>
							SEND OTP
						</LoadingButton>
					</div>
				</div>
			</Form>
		</FormikProvider>
	);
}
