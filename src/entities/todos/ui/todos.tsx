import { FC } from 'react';
import { Todo } from '../model/types/todos-schema';
import Table from 'shared/ui/table/table';

import styles from './todos.module.scss';
import { useGetTodosTableData } from '../lib/hooks/use-get-todos-table-data';

interface TodosProps {
  isLoading: boolean;
  todos?: Todo[];
}

export const Todos: FC<TodosProps> = (props) => {
  const { isLoading, todos } = props;

  const { dataSource, tableColumns } = useGetTodosTableData(todos);

  return (
    <Table
      dataSource={dataSource}
      isLoading={isLoading}
      skeletonCount={30}
      columns={tableColumns}
      skeletonClassName={styles.skeleton}
    />
  );
};
