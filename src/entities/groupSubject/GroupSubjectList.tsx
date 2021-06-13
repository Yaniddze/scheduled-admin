import React from "react";
import {
  Datagrid,
  List,
  TextField,
  DeleteButton,
  DateField,
  ReferenceField,
  FunctionField,
  downloadCSV,
} from "react-admin";
import { ExportToCsv } from "export-to-csv";

const exporter = (records: any) => {
  const options = {
    fieldSeparator: ",",
    quoteStrings: '"',
    decimalSeparator: ".",
    showLabels: true,
    showTitle: true,
    title: "lessons",
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
  };
  const exporter = new ExportToCsv(options);
  exporter.generateCsv(records);
};

export const GroupSubjectList: React.FC = (props) => {
  return (
    <List
      {...props}
      title='Список занятий'
      sort={{ field: "startDate", order: "DESC" }}
      exporter={exporter as any}
    >
      <Datagrid rowClick='edit' isRowSelectable={(r) => false}>
        <FunctionField
          label='дата начала урока'
          sortBy='startDate'
          render={(data: any) =>
            new Date(data.startDate).toLocaleString("ru-RU")
          }
        />
        <TextField source='durationInMinutes' label='продолжительность урока' />

        <ReferenceField label='Предмет' source='subjectId' reference='subject'>
          <TextField source='name' />
        </ReferenceField>

        <ReferenceField label='Группа' source='groupId' reference='group'>
          <TextField source='name' />
        </ReferenceField>

        <DeleteButton />
      </Datagrid>
    </List>
  );
};
