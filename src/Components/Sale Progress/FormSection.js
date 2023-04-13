import React from "react";
import styles from "../../Styles/Sale Progress/FormSection.module.css";

const FormSection = () => {
  return (
    <div className={`${styles.mainContainer}`}>
      <p className={`${styles.upperTxt}`}>
        Leave your details below and we'll contact you to discuss purchasing
        $hILO
      </p>
      <div className={`${styles.inputFieldsContainer}`}> 
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" id="firstName" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" id="lastName" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="number" name="phoneNumber" id="phoneNumber" />
        </div>
        <div>
          <label htmlFor="bestTimeContact">Best Time To Contact</label>
          <input type="number" name="bestTimeContact" id="bestTimeContact" />
        </div>
        <div>
          <label htmlFor="budget">Budget</label>
          <input type="number" name="budget" id="budget" />
        </div>
        <button className={`${styles.submitBtn}`}>Submit</button>
      </div>
    </div>
  );
};

export default FormSection;
