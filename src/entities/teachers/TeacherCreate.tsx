import React from 'react';
import {
  Create,
  required,
  SimpleForm,
  TextInput,
} from 'react-admin';

export const TeacherCreate: React.FC = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput validate={required()} source="name" fullWidth helperText="Имя преподавателя" label="имя" />
    </SimpleForm>
  </Create>
);