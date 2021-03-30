import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  required,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';

export const SubjectEdit: React.FC = props => {
  return (
    <Edit {...props} undoable={false}>
      <SimpleForm>
        <TextInput validate={required()} source="name" fullWidth helperText="название предмета" label="название" />
        <ReferenceInput label="Преподаватель" reference="teacher" source="teacherId">
          <AutocompleteInput source="name" />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  )
};