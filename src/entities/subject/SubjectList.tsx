import React, { useState } from "react";
import {
  Datagrid,
  List,
  TextField,
  Filter,
  TextInput,
  ReferenceField,
  Toolbar,
  downloadCSV,
  ExportButton,
} from "react-admin";
import { Button, Dialog, Input } from "@material-ui/core";
import { ExportToCsv } from "export-to-csv";

const exporter = (records: any) => {
  const options = {
    fieldSeparator: ",",
    quoteStrings: '"',
    decimalSeparator: ".",
    showLabels: true,
    showTitle: true,
    title: "subjects",
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
  };
  const exporter = new ExportToCsv(options);
  exporter.generateCsv(records);
};

const SearchFilter: React.FC<any> = (props) => (
  <Filter {...props}>
    <TextInput label='поиск' source='name' />
  </Filter>
);

const Tools = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [error, setError] = useState("");
  const [file, setFile] = useState<File | undefined>(undefined);

  const handleSubmit = () => {
    if (file === undefined) {
      setError("Выберите файл");
      return;
    }

    const splitted = file.name.split(".");
    splitted.reverse();

    if (splitted[0] !== "doc" && splitted[0] !== "docx") {
      setError("Выберите файл word");
      return;
    }

    setError("");

    const headers = new Headers();

    headers.append(
      "Authorization",
      "Bearer " + (localStorage.getItem("token") || "")
    );

    const date = new FormData();

    date.append("file", file);

    fetch("/admin/api/v1/subject/parse", {
      method: "POST",
      headers,
      body: date,
    }).then(() => {
      setOpen(false);
      setOpen2(true);
    });
  };

  return (
    <Toolbar>
      <Dialog open={open2} onClose={() => setOpen2(false)}>
        <div style={{ padding: "20px" }}>
          <div>Вы успешно загрузили файл!</div>
          <div>
            <Button onClick={() => setOpen2(false)}>Закрыть</Button>
          </div>
        </div>
      </Dialog>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <div style={{ padding: "100px" }}>
          <div style={{ color: "red" }}>{error}</div>
          <input
            type='file'
            accept='.doc,.docx'
            onChange={(e) => {
              const files = e.target.files;
              if (files) setFile(files[0]);
            }}
          />
          <div style={{ marginTop: "20px" }}>
            <Button onClick={handleSubmit}>Отправить</Button>
          </div>
        </div>
      </Dialog>
      <Button onClick={() => setOpen(true)}>Загрузить файл</Button>
      <ExportButton />
    </Toolbar>
  );
};

export const SubjectList: React.FC = (props) => {
  return (
    <List
      actions={<Tools />}
      {...props}
      filters={<SearchFilter />}
      title='Список преподавателей'
      exporter={exporter as any}
    >
      <Datagrid rowClick='edit' isRowSelectable={(r) => false}>
        <TextField source='name' label='имя' />
        <ReferenceField
          label='Преподаватель'
          reference='teacher'
          source='teacherId'
        >
          <TextField source='name' label='имя' />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
