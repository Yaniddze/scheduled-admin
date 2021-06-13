import React from "react";
import {
  Datagrid,
  List,
  TextField,
  Filter,
  TextInput,
  downloadCSV,
} from "react-admin";
import { ExportToCsv } from "export-to-csv";

const SearchFilter: React.FC<any> = (props) => (
  <Filter {...props}>
    <TextInput label='поиск' source='name' />
  </Filter>
);

const exporter = (records: any) => {
  const options = {
    fieldSeparator: ",",
    quoteStrings: '"',
    decimalSeparator: ".",
    showLabels: true,
    showTitle: true,
    title: "teachers",
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
  };
  const exporter = new ExportToCsv(options);
  exporter.generateCsv(records);
};

export const TeacherList: React.FC = (props) => {
  return (
    <List
      {...props}
      filters={<SearchFilter />}
      title='Список преподавателей'
      exporter={exporter as any}
    >
      <Datagrid rowClick='edit' isRowSelectable={(r) => false}>
        <TextField source='name' label='имя' />
      </Datagrid>
    </List>
  );
};
