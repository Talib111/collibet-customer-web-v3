import React from 'react';
import { getIn } from 'formik';
import propTypes from 'prop-types';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

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
  size: propTypes.string
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
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <div className="form-group col-span-12 md:col-span-2 mb-6 ">
      <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">
        {label}
        {isRequiredLabel && (
          <small className="mt-1 text-sm font-semibold text-red-600 inline ">
            {' '}
            *
          </small>
        )}
      </label>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          className={`form-control block w-full px-3  ${
            size === 'small'
              ? 'py-1.5'
              : size === 'large'
              ? 'py-2.5'
              : size === 'extraLarge'
              ? 'py-3.5'
              : 'py-2.5'
          } 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid
        ${
          isDynamic
            ? getIn(formik?.touched, name) && getIn(formik?.errors, name)
              ? 'border-red-300 bg-red-50'
              : 'border-gray-300 bg-transparent'
            : formik?.touched[name] && formik?.errors[name]
            ? 'border-red-300 bg-red-50'
            : 'border-gray-300 bg-transparent'
        }
          rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-transparent focus:border-blue-600 focus:outline-none placeholder-gray-600`}
          {...(formik && formik?.getFieldProps(name))}
          {...props}
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
          {showPassword ? (
            <AiFillEye
              className="cursor-pointer text-gray-500 hover:text-gray-700 w-5 h-5"
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <AiFillEyeInvisible
              className="cursor-pointer text-gray-500 hover:text-gray-700 w-5 h-5"
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
        </div>
      </div>
      <h1 className="text-red-500 text-xs mt-1">
        {isDynamic
          ? getIn(formik?.touched, name) && getIn(formik?.errors, name)
          : formik?.touched[name] && formik?.errors[name]}
      </h1>
    </div>
  );
}
