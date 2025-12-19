import React from "react";
import { getIn } from "formik";
import propTypes from "prop-types";

// ...props is used to pass HTMLInput attributes like type, placeholder, etc.

InputField.propTypes = {
	formik: propTypes.object,
	name: propTypes.string,
	label: propTypes.string,
	type: propTypes.string,
	placeholder: propTypes.string,
	disabled: propTypes.bool,
	isRequiredLabel: propTypes.bool,
	onInput: propTypes.func,
	isDynamic: propTypes.bool,
	size: propTypes.string,
};

export default function InputField({
	formik,
	name,
	label,
	type,
	placeholder,
	disabled,
	isRequiredLabel,
	onInput,
	isDynamic,
	size,
	...props
}) {
	return (
		<div className="form-group col-span-12 md:col-span-2 mb-6 ">
			<label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">
				{label}
				{isRequiredLabel && (
					<small className="mt-1 text-sm font-semibold text-red-600 inline ">
						{" "}
						*
					</small>
				)}
			</label>
			<input
				type={type}
				placeholder={placeholder}
				className={`form-control block w-full px-3  ${
					size === "small"
						? "py-1.5"
						: size === "large"
						? "py-2.5"
						: size === "extraLarge"
						? "py-3.5"
						: "py-2.5"
				} 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid
        ${
					isDynamic
						? getIn(formik?.touched, name) && getIn(formik?.errors, name)
							? "border-red-300 bg-red-50"
							: "border-gray-300 bg-transparent"
						: formik?.touched[name] && formik?.errors[name]
						? "border-red-300 bg-red-50"
						: "border-gray-300 bg-transparent"
				}
          rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-transparent focus:border-blue-600 focus:outline-none placeholder-gray-600`}
				{...(formik && formik?.getFieldProps(name))}
				{...props}
			/>
			<h1 className="text-red-500 text-xs mt-1">
				{isDynamic
					? getIn(formik?.touched, name) && getIn(formik?.errors, name)
					: formik?.touched[name] && formik?.errors[name]}
			</h1>
		</div>
	);
}
