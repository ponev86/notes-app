import { hasValue } from 'shared/utils/common';
import { TDataItem } from './table';

export function getCellData(
  dataSource: TDataItem,
  dataIndex: string
): React.ReactNode {
  if (dataIndex in dataSource && hasValue(dataSource[dataIndex])) {
    return dataSource[dataIndex];
  }

  return null;
}
