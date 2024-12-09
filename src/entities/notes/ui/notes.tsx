import { FC } from 'react';
import { Notes as NotesData } from '../model/types/notes-schema';
import Table from 'shared/ui/table/table';

import styles from './notes.module.scss';

interface NotesProps {
  isLoading: boolean;
  notes?: NotesData[];
}

export const Notes: FC<NotesProps> = (props) => {
  const { isLoading, notes } = props;

  return (
    <div className={styles.notes}>
      <Table
        dataSource={[]}
        isLoading={isLoading && !notes}
        skeletonCount={30}
        columns={[
          { title: '№', dataIndex: 'ordering' },
          { title: 'Название', dataIndex: 'title' },
          { title: 'Выполнен', dataIndex: 'check' },
          { dataIndex: 'edit', width: 150 },
          { dataIndex: 'delete', width: 150 },
        ]}
        skeletonClassName={styles.skeleton}
      />
    </div>
  );
};
