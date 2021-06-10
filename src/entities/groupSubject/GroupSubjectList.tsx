import React from "react";
import {
  Datagrid,
  List,
  TextField,
  DeleteButton,
  DateField,
  ReferenceField,
} from "react-admin";

export const GroupSubjectList: React.FC = (props) => {
  return (
    <List
      {...props}
      title='Список занятий'
      sort={{ field: "startDate", order: "DESC" }}
    >
      <Datagrid rowClick='edit' isRowSelectable={(r) => false}>
        <DateField source='startDate' label='дата начала урока' />
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
