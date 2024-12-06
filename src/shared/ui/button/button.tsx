import clsx from 'clsx';

import type { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

import styles from './button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outlineRed',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

export interface ButtonProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    square,
    disabled,
    theme = ButtonTheme.CLEAR,
    size = ButtonSize.M,
    children,
    ...other
  } = props;

  return (
    <button
      className={clsx(
        styles.button,
        className,
        styles[theme],
        square && styles.square,
        styles[size],
        disabled && styles.disabled
      )}
      disabled={disabled}
      {...other}
    >
      {children}
    </button>
  );
};
