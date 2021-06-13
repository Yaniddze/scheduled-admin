import React, { useState } from "react";
import {
  Datagrid,
  List,
  TextField,
  Filter,
  TextInput,
  downloadCSV,
  ArrayField,
  SingleFieldList,
  ChipField,
} from "react-admin";
import { ExportToCsv } from "export-to-csv";

const exporter = (records: any) => {
  const options = {
    fieldSeparator: ",",
    quoteStrings: '"',
    decimalSeparator: ".",
    showLabels: true,
    showTitle: true,
    title: "groups",
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
  };
  const exporter = new ExportToCsv(options);
  exporter.generateCsv(records);
};

const SearchFilter: React.FC<any> = (props) => (
  <Filter {...props}>
    <TextInput label='поиск' source='q' />
  </Filter>
);

export const GroupList: React.FC = (props) => {
  return (
    <List
      {...props}
      filters={<SearchFilter />}
      title='Список групп'
      exporter={exporter as any}
    >
      <Datagrid rowClick='edit' isRowSelectable={(r) => false}>
        <TextField source='name' label='название' />

        <ArrayField source='teachers' label='Преподаватели'>
          <SingleFieldList>
            <ChipField source='name' />
          </SingleFieldList>
        </ArrayField>
      </Datagrid>
    </List>
  );
};
