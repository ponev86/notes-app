import clsx from 'clsx';

import styles from './label.module.scss';

export interface ILabelProps {
  text: string;
  id?: string;
  className?: string;
  disabled?: boolean;
}

const Label: React.FC<ILabelProps> = (props) => {
  const { id, text, className, disabled } = props;

  return (
    <label
      className={clsx(
        className,
        styles.label,
        disabled && styles.labelDisabled
      )}
      htmlFor={id}
    >
      {text}
    </label>
  );
};

export default Label;
