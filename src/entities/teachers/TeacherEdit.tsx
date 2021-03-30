import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  required
} from 'react-admin';

export const TeacherEdit: React.FC = props => {
  return (
    <Edit {...props} undoable={false}>
      <SimpleForm>
        <TextInput validate={required()} source="name" fullWidth helperText="имя вакцины" label="имя" />
      </SimpleForm>
    </Edit>
  )
};