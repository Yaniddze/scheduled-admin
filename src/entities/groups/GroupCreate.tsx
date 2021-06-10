import React from "react";
import { Create, required, SimpleForm, TextInput } from "react-admin";

export const GroupCreate: React.FC = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput
        validate={required()}
        source='name'
        fullWidth
        helperText='название гурппы'
        label='название'
      />
    </SimpleForm>
  </Create>
);
