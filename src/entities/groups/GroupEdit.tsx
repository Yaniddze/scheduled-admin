import React from "react";
import { Edit, required, SimpleForm, TextInput } from "react-admin";

export const GroupEdit: React.FC = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput
        validate={required()}
        source='name'
        fullWidth
        helperText='название гурппы'
        label='название'
      />
    </SimpleForm>
  </Edit>
);
