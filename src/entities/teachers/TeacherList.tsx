import React from 'react';
import {
  Datagrid,
  List,
  TextField,
  Filter,
  TextInput,
} from 'react-admin';

const SearchFilter: React.FC<any> = (props) => (
  <Filter {...props}>
    <TextInput label="поиск" source="name" />
  </Filter>
);

export const TeacherList: React.FC = props => {
  return (
    <List {...props} filters={<SearchFilter />} title="Список преподавателей">
      <Datagrid rowClick="edit" isRowSelectable={r => false}>
        <TextField source="name" label="имя" />
      </Datagrid>
    </List>
  );
};