import clsx from 'clsx';

import styles from './skeleton.module.scss';

interface ISkeletonProps {
  className?: string;
}

const Skeleton: React.FC<ISkeletonProps> = (props) => {
  const { className } = props;

  return <div className={clsx(className, styles.skeleton)} />;
};

export default Skeleton;
