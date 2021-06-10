import React, { useState } from "react";
import { Datagrid, List, TextField, Filter, TextInput } from "react-admin";

const SearchFilter: React.FC<any> = (props) => (
  <Filter {...props}>
    <TextInput label='поиск' source='q' />
  </Filter>
);

export const GroupList: React.FC = (props) => {
  return (
    <List {...props} filters={<SearchFilter />} title='Список групп'>
      <Datagrid rowClick='edit' isRowSelectable={(r) => false}>
        <TextField source='name' label='название' />
      </Datagrid>
    </List>
  );
};
