import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/createProfile.module.css';
import AxiosInterceptors from '@/components/ApiList/AxiosInterceptors';
import ApiList from '@/components/ApiList/ApiList';
import ApiHeaderProfile from '@/components/ApiList/ApiHeaderProfile';

const CreateProfile = () => {
  const [isLoading, setisLoading] = useState(false)
  const {api_updateProfile} = ApiList()

  const router = useRouter();

  const [inputValues, setInputValues] = useState({
    name: '',
    email: '',
    address: '',
    pinCode: '',
    gender: '',
  });

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;
    if (type === 'radio') {
      setInputValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    } else {
      setInputValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };


  // ══════════════════════════════║ THIS FUNCTION UPDATES PROFILE INFO ║═══════════════════════════════════
  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, address, email, pinCode, gender } = inputValues;
    let requestBody = {
      name: name,
      address: address,
      email: email,
      pinCode: pinCode,
      gender: gender
    }

    AxiosInterceptors.post(api_updateProfile, requestBody, ApiHeaderProfile())
      .then(function (response) {
        console.log('update profile response...', response)
        if (response?.data?.error === false) {
          console.log('profile updated...')
          router.push('/Dashboard/profile')
        }
      })
      .catch(function (error) {
        console.log('==2 error list...', error)
      }).finally(() => {
        setisLoading(false)
      })
  }

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="flex justify-center min-h-screen">
          <div
            className="hidden bg-cover lg:block lg:w-2/5"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80'"
            }}
          ></div>

          <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
              <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                Update your profile information
              </h1>
             

              <div className={styles.db_sub_container_2}>
                <div className={styles.db_sub_container_2_form_container}>
                  <div className={styles.db_sub_container_2_input_container}>
                    <label className={styles.db_sub_container_2_input_label} htmlFor="firstName">Name</label>
                    <input
                      className={styles.db_sub_container_2_input}
                      type="text"
                      name='name'
                      onChange={handleInputChange}
                    />
                    <div className={styles.underline}></div>
                  </div>
                  <div className={styles.db_sub_container_2_input_container}>
                    <label className={styles.db_sub_container_2_input_label} htmlFor="lastName">Email</label>
                    <input
                      className={styles.db_sub_container_2_input}
                      type="email"
                      name='email'
                      onChange={handleInputChange}
                    />
                    <div className={styles.underline}></div>
                  </div>
                  <div className={styles.db_sub_container_2_input_container}>
                    <label className={styles.db_sub_container_2_input_label} htmlFor="address">Address</label>
                    <textarea
                      className={styles.db_sub_container_2_textarea}
                      type="text"
                      name='address'
                      onChange={handleInputChange}
                    ></textarea>
                    <div className={styles.underline}></div>
                  </div>
                  <div className={styles.db_sub_container_2_input_container}>
                    <label className={styles.db_sub_container_2_input_label} htmlFor="lastName">Pin Code</label>
                    <input
                      className={styles.db_sub_container_2_input}
                      type="number"
                      name='pinCode'
                      onChange={handleInputChange}
                    />
                    <div className={styles.underline}></div>
                  </div>
                  <div className={styles.db_sub_container_2_input_container}>
                    <label className={styles.db_sub_container_2_input_label}>Gender</label>
                    <div className={styles.radio_container}>
                      <label className={styles.radio_label}>
                        <input
                          type="radio"
                          name="gender"
                          value="male"
                          onChange={handleInputChange}
                          className={styles.radio_input}
                        />
                        <span className={styles.radio_custom}></span> Male
                      </label>
                      <label className={styles.radio_label}>
                        <input
                          type="radio"
                          name="gender"
                          value="female"
                          onChange={handleInputChange}
                          className={styles.radio_input}
                        />
                        <span className={styles.radio_custom}></span> Female
                      </label>
                      <label className={styles.radio_label}>
                        <input
                          type="radio"
                          name="gender"
                          value="other"
                          onChange={handleInputChange}
                          className={styles.radio_input}
                        />
                        <span className={styles.radio_custom}></span> Other
                      </label>
                    </div>
                  </div>

                  <div className={styles.submit_button_container}>
                    <button className={styles.submit_button}
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateProfile;
