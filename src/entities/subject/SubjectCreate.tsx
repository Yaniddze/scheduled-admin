import React from 'react';
import {
  Create,
  required,
  SimpleForm,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';

export const SubjectCreate: React.FC = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput validate={required()} source="name" fullWidth helperText="название предмета" label="название" />
      <ReferenceInput label="Преподаватель" reference="teacher" source="teacherId">
        <AutocompleteInput source="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);