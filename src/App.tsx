import React from 'react';
import { Admin, Resource, Login } from 'react-admin';
import PostIcon from '@material-ui/icons/Book';
import polyglotI18nProvider from 'ra-i18n-polyglot';

import { dataProvider } from './configuration';

import authProvider from './authProvider';
import LoginForm from './pages/LoginForm';

import './App.css';
import { theme } from './static/theme';
import NotFound from './components/NotFound/NotFound';

import {
  TeacherCreate,
  TeacherEdit,
  TeacherList,
} from './entities/teachers';

import {
  SubjectCreate,
  SubjectEdit,
  SubjectList,
} from './entities/subject';

const russianMessages = require('ra-language-russian');

const i18nProvider = polyglotI18nProvider(() => russianMessages, 'ru');

const LoginPage = (props: any) => {
  return <Login {...props}>
      <React.Fragment>
        <LoginForm {...props} />
      </React.Fragment>
    </Login>
}

export default function App() {
  return (
    <Admin
      theme={theme}
      dataProvider={dataProvider}
      catchAll={NotFound}
      i18nProvider={i18nProvider}
      authProvider={authProvider}
      loginPage={LoginPage}
    >
      <Resource name="teacher" 
        list={TeacherList} 
        create={TeacherCreate}
        edit={TeacherEdit}
        icon={PostIcon} 
        options={{
          label: 'Преподаватели'
        }} 
      />

      <Resource name="subject" 
        list={SubjectList} 
        create={SubjectCreate}
        edit={SubjectEdit}
        icon={PostIcon} 
        options={{
          label: 'Предметы'
        }} 
      />

    </Admin>
  );
}
