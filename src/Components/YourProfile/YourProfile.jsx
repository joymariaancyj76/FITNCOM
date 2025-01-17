import React, { useState } from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import * as Yup from 'yup';
import { FaEdit, FaTrashAlt, FaPlus, FaSave } from 'react-icons/fa';
import './YourProfile.css';
import usericon from "../../Assets/Images/signin-icon.png";

// Validation Schema
const validationSchema = Yup.object().shape({
  billingAddress: Yup.object().shape({
    name: Yup.string().required('Name is required'),
    flatNo: Yup.string().required('Flat number is required'),
    street: Yup.string().required('Street is required'),
    area: Yup.string().required('Area is required'),
    district: Yup.string().required('District is required'),
    state: Yup.string().required('State is required'),
    pincode: Yup.string().required('Pincode is required'),
    phoneNo: Yup.string().required('Phone number is required'),
    landmark: Yup.string(),
  }),
  shippingAddresses: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required('Name is required'),
      flatNo: Yup.string().required('Flat number is required'),
      street: Yup.string().required('Street is required'),
      area: Yup.string().required('Area is required'),
      district: Yup.string().required('District is required'),
      state: Yup.string().required('State is required'),
      pincode: Yup.string().required('Pincode is required'),
      phoneNo: Yup.string().required('Phone number is required'),
      landmark: Yup.string(),
      isDefault: Yup.boolean(),
    })
  ),
});

const YourProfile = () => {
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [showEmailSection, setShowEmailSection] = useState(false);
  const [showPhoneSection, setShowPhoneSection] = useState(false);
  const [showPasswordSection, setShowPasswordSection] = useState(false);
  const [passwordChangeSuccess, setPasswordChangeSuccess] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const toggleEmailSection = () => {
    setShowEmailSection(!showEmailSection);
  };

  const togglePhoneSection = () => {
    setShowPhoneSection(!showPhoneSection);
  };

  const togglePasswordSection = () => {
    setShowPasswordSection(!showPasswordSection);
  };

  const handlePasswordChange = () => {
    setPasswordChangeSuccess(true);
    setShowPasswordSection(false);
  };

  return (
    <div className='YourProfile'>
      <h1>Your Profile</h1>
      <Formik
        initialValues={{
          billingAddress: {
            name: '',
            flatNo: '',
            street: '',
            area: '',
            district: '',
            state: '',
            pincode: '',
            phoneNo: '',
            landmark: '',
          },
          shippingAddresses: [{
            name: '',
            flatNo: '',
            street: '',
            area: '',
            district: '',
            state: '',
            pincode: '',
            phoneNo: '',
            landmark: '',
            isDefault: false,
          }],
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          setSavedAddresses([...savedAddresses, values]);
          alert('Successfully added address');
        }}
      >
        {({ values, setFieldValue }) => (
          <Form className="profile-form">
            {/* User Profile Section */}
            <div className="user-profile-section">
              <img src={usericon} alt="User" className="profile-signin-image" />
              <div>
                <Field name="username" placeholder="Username" className="profile-input" />
                <FaEdit className="profile-edit-icon" onClick={handleEditClick} />
              </div>
            </div>

            {/* Email, Password, PhoneNumber */}
            <div className="profile-info">
              {/* Email Section */}
              <div className="email-section">
                <div className="email-bar" onClick={toggleEmailSection}>
                  Gmail
                </div>
                {showEmailSection && (
                  <div className="email-form">
                    <Field name="email" placeholder="Gmail ID" className="profile-input" />
                  </div>
                )}
              </div>

              {/* Phone Section */}
              <div className="phoneNumber-section">
                <div className="phoneNumber-bar" onClick={togglePhoneSection}>
                  Phone Number
                </div>
                {showPhoneSection && (
                  <div className="phoneNumber-form">
                    <Field name="phoneNumber" placeholder="Phone Number" className="profile-input" />
                  </div>
                )}
              </div>

              {/* Password Section */}
              <div className="password-section">
                <div className="password-bar" onClick={togglePasswordSection}>
                  Change Password
                </div>
                {showPasswordSection && (
                  <div className="password-form">
                    <div className='password-changebox'>
                    <Field type="password" name="oldPassword" placeholder="Old Password" className="profile-input" />
                    <Field type="password" name="newPassword" placeholder="New Password" className="profile-input" />
                    <Field type="password" name="confirmPassword" placeholder="Confirm Password" className="profile-input" />
                    <button type="button" onClick={handlePasswordChange} className="profile-button">Update</button>
                    <button type="button" onClick={togglePasswordSection} className="profile-button">Cancel</button>
                  </div>
                  </div>
                )}
                {passwordChangeSuccess && <div className="success-message">Password changed successfully</div>}
              </div>
            </div>

            {/* Billing Address Section */}
            <div className="address-box">
              <h2>Billing Address</h2>
              <div className="address-entry">
                <Field name="billingAddress.name" placeholder="Name" />
                <Field name="billingAddress.flatNo" placeholder="Flat No" />
                <Field name="billingAddress.street" placeholder="Street" />
                <Field name="billingAddress.area" placeholder="Area" />
                <Field name="billingAddress.district" placeholder="District" />
                <Field name="billingAddress.state" placeholder="State" />
                <Field name="billingAddress.pincode" placeholder="Pincode" />
                <Field name="billingAddress.phoneNo" placeholder="Phone No" />
                <Field name="billingAddress.landmark" placeholder="Landmark (Optional)" />
              </div>
            </div>

            {/* Shipping Addresses Section */}
            <FieldArray name="shippingAddresses">
              {({ push, remove }) => (
                <div className="shipping-address-section">
                  {values.shippingAddresses.map((address, index) => (
                    <div key={index} className="address-box">
                      <h2>Shipping Address {index + 1}</h2>
                      <div className="address-entry">
                        <Field name={`shippingAddresses.${index}.name`} placeholder="Name" />
                        <Field name={`shippingAddresses.${index}.flatNo`} placeholder="Flat No" />
                        <Field name={`shippingAddresses.${index}.street`} placeholder="Street" />
                        <Field name={`shippingAddresses.${index}.area`} placeholder="Area" />
                        <Field name={`shippingAddresses.${index}.district`} placeholder="District" />
                        <Field name={`shippingAddresses.${index}.state`} placeholder="State" />
                        <Field name={`shippingAddresses.${index}.pincode`} placeholder="Pincode" />
                        <Field name={`shippingAddresses.${index}.phoneNo`} placeholder="Phone No" />
                        <Field name={`shippingAddresses.${index}.landmark`} placeholder="Landmark (Optional)" />
                        <label>
                          <Field
                            type="checkbox"
                            name={`shippingAddresses.${index}.isDefault`}
                            checked={address.isDefault}
                            onChange={() => {
                              const newAddresses = values.shippingAddresses.map((addr, i) => ({
                                ...addr,
                                isDefault: i === index,
                              }));
                              setFieldValue('shippingAddresses', newAddresses);
                            }}
                          />
                          Default
                        </label>
                        <div className="profile-icons">
                          <FaTrashAlt className="profile-delete-icon" onClick={() => remove(index)} />
                        </div>
                      </div>
                    </div>
                  ))}
                  <button
                    className="profile-add-icon"
                    type="button"
                    onClick={() => push({
                      name: '',
                      flatNo: '',
                      street: '',
                      area: '',
                      district: '',
                      state: '',
                      pincode: '',
                      phoneNo: '',
                      landmark: '',
                      isDefault: false,
                    })}
                  >
                    <FaPlus /> Add Address
                  </button>
                </div>
              )}
            </FieldArray>

            <button type="submit" disabled={!isEditing}>
              <FaSave /> {isEditing ? 'Save' : 'Inactive'}
            </button>
          </Form>
        )}
      </Formik>

      {/* Display Saved Addresses */}
      {savedAddresses.length > 0 && (
        <div className="saved-addresses">
          <h2>Addresses</h2>
          {savedAddresses.map((address, index) => (
            <div key={index} className="address-box">
              <p>
                {address.billingAddress.name}, {address.billingAddress.flatNo}, {address.billingAddress.street}, {address.billingAddress.area}, {address.billingAddress.district}, {address.billingAddress.state}, {address.billingAddress.pincode}, {address.billingAddress.phoneNo}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default YourProfile;
