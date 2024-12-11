import clsx from 'clsx';
import { forwardRef, ReactNode, useId } from 'react';

import styles from './input.module.scss';
import Label from '../label/label';

export interface IInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  prefix?: React.ReactNode;
  prefixClassName?: string | boolean;
  suffix?: React.ReactNode;
  suffixClassName?: string;
  error?: string | boolean;
  showErrorMessage?: boolean;
  label?: string;
  extra?: ReactNode;
  wrapperClassName?: string;
}

const Input = forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  const {
    className,
    prefix,
    prefixClassName,
    suffix,
    suffixClassName,
    error,
    showErrorMessage = false,
    label,
    extra,
    disabled,
    wrapperClassName,
    ...rest
  } = props;

  const id = useId();

  const isHeaderVisible = !!label || !!extra;

  const inputClassName = clsx(
    className,
    styles.input,
    !!prefix && styles.inputPrefix,
    !!suffix && styles.inputSuffix,
    !!error && styles.inputError
  );

  return (
    <div
      className={clsx(
        wrapperClassName,
        styles.wrapper,
        disabled && styles.wrapperDisabled
      )}
    >
      {isHeaderVisible && (
        <div className={styles.header}>
          {label && <Label text={label} id={id} disabled={disabled} />}
          {extra}
        </div>
      )}
      <div className={styles.container}>
        {prefix && (
          <div
            className={clsx(styles.prefix, prefixClassName)}
            {...(disabled && {
              onClick: (event) => event.stopPropagation(),
            })}
          >
            {prefix}
          </div>
        )}

        <input
          ref={ref}
          id={id}
          className={inputClassName}
          {...rest}
          disabled={disabled}
        />

        {suffix && (
          <div
            className={clsx(styles.suffix, suffixClassName)}
            {...(disabled && {
              onClick: (event) => event.stopPropagation(),
            })}
          >
            {suffix}
          </div>
        )}
      </div>
      {showErrorMessage && <div className={styles.error}>{error}</div>}
    </div>
  );
});

export default Input;
