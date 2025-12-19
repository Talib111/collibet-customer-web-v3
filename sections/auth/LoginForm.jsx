import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useFormik, Form, FormikProvider } from "formik";
import * as Yup from "yup";
import { InputField, LoadingButton } from "@/components/forms";
import ApiList from "@/components/ApiList/ApiList";
import ApiHeader from "@/components/ApiList/ApiHeader";
import { useRouter } from "next/router";
import AxiosInterceptors from "@/components/ApiList/AxiosInterceptors";
import { useAppContext } from "context/AuthContext";
import Link from "next/link";
import { allowNumberInput } from "@/components/Snippets/PowerupFunctions";
import { RotatingLines } from "react-loader-spinner";

export default function LoginForm({ data, next }) {
	const [isLoading, setisLoading] = useState(false);
	const { setIsAuthenticated,login } = useAppContext();

	const { api_login } = ApiList();
	const router = useRouter();

	const formik = useFormik({
		initialValues: {
			mobileNumber: "",
			passCode: "",
		},
		validationSchema: Yup.object().shape({
			mobileNumber: Yup.string()
				.required("Mobile number is required")
				.min(10, "Mobile number is too short")
				.max(10, "Mobile number is too long"),
			passCode: Yup.string()
				.min(6, "Passcode is too short")
				.max(6, "Passcode is too long")
				.required("Passcode is required"),
		}),
		onSubmit: async (values) => {
			console.log("the values...", values);
			postLogin(values);
		},
	});
	const handleMobileNumberChange = (e) => {
		const { value } = e.target;
		if (/^\d{0,10}$/.test(value)) {
			formik.setFieldValue("mobileNumber", value);
		}
	};
	const handlePasswordChange = (e) => {
		const { value } = e.target;
		formik.setFieldValue("passCode", allowNumberInput(value, formik.values.passCode, 6))
	};


	// ══════════════════════════════║ THIS FUNCTION AUTHENTICATE USER ║═══════════════════════════════════
	const postLogin = (values) => {
		setisLoading(true);
		let requestBody = {
			mobileNumber: values?.mobileNumber,
			pin: values?.passCode,
			fcmToken: null,
		};

		AxiosInterceptors.post(api_login, requestBody, ApiHeader())
			.then(function (response) {
				console.log("update profile response...", response);
				if (response?.data?.error === false) {
					localStorage.setItem("token", response?.data?.payload?.token);
					setIsAuthenticated(true);
					console.log("Login Successfull");
					if (response?.data?.payload?.isUserProfileExists === false) {
						login(response)
						router.push("/Dashboard/profile");
					}
					router.push("/");
				} else {
					toast.error('Invalid Credentials !');
				setisLoading(false);
				}
			})
			.catch(function (error) {
				console.log("==2 error list...", error);
				toast.error("Something went wrongg !");
				setisLoading(false);

			})
			.finally(() => {
			});
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
					<InputField
						type="text"
						formik={formik}
						name="passCode"
						label="Password"
						onChange={handlePasswordChange}
						isRequiredLabel
					/>
					<div className="text-left text-md">
						<Link href="/ResetPassword">
							<span className="text-sm pl-2 font-medium text-indigo-600 leading-5 text-cente capitalize lg:mx-0 ">
								Forget Password ?
							</span>
						</Link>
					</div>
					<div className="mt-4">
						{
							isLoading ?<LoadingButton
							type="submit"
							color="primary"
							isLoading={formik.isSubmitting}
						>
							 <div className="w-full text-center flex justify-center align-center"><RotatingLines
                    strokeColor="white"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="25"
                    visible={true}
                  /></div>
						</LoadingButton> :
						<LoadingButton
						color="primary"
					>
						Login
					</LoadingButton>
						}
						
						
					</div>
				</div>
			</Form>
		</FormikProvider>
	);
}
