import React from "react";
import {
  Create,
  DateField,
  ReferenceField,
  SimpleForm,
  DateTimeInput,
  TextInput,
  required,
  number,
  AutocompleteInput,
  ReferenceInput,
} from "react-admin";

export const GroupSubjectCreate: React.FC = (props) => (
  <Create
    {...props}
    transform={(data: any) => {
      const selectedDate = new Date(data.startDate);
      const time = selectedDate.getTime();
      const offset = selectedDate.getTimezoneOffset() * 6e4;

      const currentDate = new Date(time - offset);
      return {
        ...data,
        startDate: currentDate.toISOString(),
      };
    }}
  >
    <SimpleForm>
      <DateTimeInput
        source='startDate'
        label='дата начала урока'
        validate={required()}
      />
      <TextInput
        source='durationInMinutes'
        label='продолжительность урока'
        validate={[required(), number()]}
      />

      <ReferenceInput
        label='Предмет'
        source='subjectId'
        reference='subject'
        validate={required()}
      >
        <AutocompleteInput source='Name' />
      </ReferenceInput>

      <ReferenceInput
        label='Группа'
        source='groupId'
        reference='group'
        validate={required()}
      >
        <AutocompleteInput source='Name' />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
