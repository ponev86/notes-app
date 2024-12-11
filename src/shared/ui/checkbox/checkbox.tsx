import clsx from 'clsx';
import { InputHTMLAttributes, LabelHTMLAttributes, forwardRef } from 'react';

import CheckInputIcon from '../../assets/icons/check-input-icon.svg?react';

import styles from './checkbox.module.scss';

export interface ICheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  labelProps?: Omit<
    LabelHTMLAttributes<HTMLLabelElement>,
    'htmlFor' | 'children'
  >;
}

const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>((props, ref) => {
  const { labelProps, label, disabled, ...rest } = props;

  return (
    <label
      htmlFor={rest.id}
      {...labelProps}
      className={clsx(
        styles.label,
        labelProps?.className,
        disabled && styles.labelDisabled
      )}
    >
      <input
        className={styles.input}
        {...rest}
        ref={ref}
        type="checkbox"
        disabled={disabled}
      />
      <div className={styles.indicator}>
        <CheckInputIcon className={styles.icon} />
      </div>
      {label}
    </label>
  );
});

export default Checkbox;
