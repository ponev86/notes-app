import { Children, FC } from 'react';

import { getCellData } from './table.utils';

import styles from './table.module.scss';
import { hasValue } from 'shared/utils/common';
import Skeleton from '../skeleton/skeleton';

export type TDataItem = Record<string, React.ReactNode>;

export interface IColumn {
  dataIndex: string;
  title?: string;
  width?: number;
}

export interface ITableProps {
  columns: IColumn[];
  dataSource: TDataItem[];
  className?: string;
  isLoading?: boolean;
  skeletonCount?: number;
  skeletonClassName?: string;
}

const Table: FC<ITableProps> = (props) => {
  const { dataSource, columns, isLoading, skeletonCount, skeletonClassName } =
    props;

  return (
    <table className={styles.table}>
      <thead className={styles.tableHead}>
        <tr className={styles.tableHeadRow}>
          {columns.map((column) => (
            <th
              key={column.dataIndex}
              className={styles.tableHeadCell}
              style={{
                ...(hasValue(column.width) && { width: `${column.width}px` }),
              }}
            >
              {column.title}
            </th>
          ))}
        </tr>
      </thead>

      <tbody className={styles.tableBody}>
        {Children.toArray(
          isLoading
            ? Array(skeletonCount || 10).fill(
                <tr className={styles.tableBodyRowEmpty}>
                  <td
                    className={styles.tableBodyEmpty}
                    colSpan={columns.length}
                  >
                    <Skeleton className={skeletonClassName} />
                  </td>
                </tr>
              )
            : dataSource.map((dataItem) => (
                <tr className={styles.tableBodyRow}>
                  {Children.toArray(
                    columns.map((column) => (
                      <td className={styles.tableBodyCell}>
                        {getCellData(dataItem, column.dataIndex)}
                      </td>
                    ))
                  )}
                </tr>
              ))
        )}
      </tbody>
    </table>
  );
};

export default Table;
