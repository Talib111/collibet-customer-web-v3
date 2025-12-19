import React, { useContext } from "react";
import { useFormik, Form, FormikProvider } from "formik";
import * as Yup from "yup";
import OtpInput from "react18-input-otp";
import { toast } from 'react-hot-toast';
import { LoadingButton } from "@/components/forms";
import axios from "../../utils/axios";
import { useRouter } from "next/router";
import { SET_AUTHENTICATION } from "context/actionTypes";
import { GlobalContext } from "context/globalContext";
import { useAppContext } from "context/AuthContext";
import { isValidToken, verifyToken } from "utils/jwt";

export default function VerifyOtp({ isForgetPassword,data, next, prev }) {
	const { push } = useRouter();

	const { dispatch } = useContext(GlobalContext);
	const { login } = useAppContext();


	const formik = useFormik({
		initialValues: data,
		validationSchema: Yup.object().shape({
			otp: Yup.string()
				.required("OTP is required")
				.min(6, "OTP is too short")
				.max(6, "OTP is too long"),
		}),
		onSubmit: async (values) => {
			try {
				const res = await axios.post("/v1/auth/verify-otp", {
					otp: values.otp,
					token: values?.token,
				});
				if (res.data.error === false) {
					toast.success(res.data.message);
					if (isValidToken(res.data?.payload?.token) && verifyToken(res.data?.payload?.token)) {
						login(res);
						await dispatch({
							type: SET_AUTHENTICATION,
							payload: true,
						});
					} else {
						toast.error("Something Went Wrong")
					}
					if (res.data.payload.isUserProfileExists) {
						push("/");
					} else {
						localStorage.setItem('generatedToken',res.data?.payload?.token) // saving it to use in place of pass code generation
						push(`/set-passcode?isForgetPassword=${isForgetPassword}`);
					}
				} else {
					toast.error(res.data.message);
				}
			} catch (err) {
				toast.error(err.message);
			}
		},
	});

	const { handleSubmit, setFieldValue, values, touched, errors } = formik;

	return (
		<FormikProvider value={formik}>
			<Form autoComplete="off" noValidate onSubmit={handleSubmit}>
				<div>
					<OtpInput
						isInputNum
						shouldAutoFocus={true}
						data-cy="otp-input"
						data-testid="otp-input"
						inputStyle={{
							padding: 8,
							borderRadius: 4,
							width: "100%",
							backgroundColor: "transparent",
						}}
						focusStyle={{
							border: "1px solid #3366FF",
							borderRadius: 4,
							backgroundColor: "transparent",
						}}
						onChange={(e) => setFieldValue("otp", e)}
						numInputs={6}
						value={values.otp}
						hasErrored="true"
						errorStyle={{
							border:
								touched.otp && errors.otp ? "1px solid red" : "1px solid #ccc",
						}}
						separator={<span>&nbsp; &nbsp; &nbsp; </span>}
					/>
					<div className="mt-8">
						<LoadingButton
							type="submit"
							color="primary"
							isLoading={formik.isSubmitting}
						>
							Verify
						</LoadingButton>
					</div>
				</div>
			</Form>
		</FormikProvider>
	);
}
