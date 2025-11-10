import React from 'react';
import type { UseFormRegister } from 'react-hook-form';
import styles from './Checkbox.module.scss';
import type { FormValues } from '../../types';


interface CustomCheckboxProps {
  label: string;
  name: keyof FormValues;
  error?: string;
  register: UseFormRegister<FormValues>;
  validation?: object;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ label, register, name, error, validation }) => {
  return (
    <>
        <label className={styles.checkboxContainer}>
        <input
            type="checkbox"
            className={styles.checkboxInput}
            {...register(name, validation)}
        />
        <span className={styles.customCheckbox}></span>
        {label}
        </label>
        {error && <span className={styles.error}>{error}</span>}
    </>
  );
};

export default CustomCheckbox;
