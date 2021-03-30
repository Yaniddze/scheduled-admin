import * as React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery, Box } from '@material-ui/core';
import Book from '@material-ui/icons/Book';
import BugReport from '@material-ui/icons/BugReport';
import Question from '@material-ui/icons/QuestionAnswer';
import ChatBubble from '@material-ui/icons/ChatBubble';
import Apartament from '@material-ui/icons/Apartment';
import MapIcon from '@material-ui/icons/Map';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import {
  useTranslate,
  MenuItemLink
} from 'react-admin';
import SubMenu from './SubMenu';



const Menu: React.FC<any> = ({ onMenuClick, logout, dense = false }) => {
  const [state, setState] = useState<{ [p: string]: boolean }>({
    diseas: true
  });
  const translate = useTranslate();
  const isXSmall = useMediaQuery((theme: any) =>
    theme.breakpoints.down('xs')
  );
  const open = useSelector((state: any) => state.admin.ui.sidebarOpen);
  useSelector((state: any) => state.theme); // force rerender on theme change

  const handleToggle = (menu: string) => {
    setState(state => ({ ...state, [menu]: !state[menu] }));
  };

  return (
    <Box mt={1}>
      {' '}
      <MenuItemLink
        to={`/vaccine`}
        primaryText={"вакцины"}
        onClick={onMenuClick}
        sidebarIsOpen={open}
        dense={dense}
        leftIcon={<Book />}
      />

      <SubMenu
        handleToggle={() => handleToggle('diseas')}
        isOpen={state.diseas}
        sidebarIsOpen={open}
        name="болезни"
        dense={dense}
        icon={<Question />}
      >
        <MenuItemLink
          to={`/region`}
          primaryText={"регион"}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
          leftIcon={<MapIcon />}
        />
        <MenuItemLink
          to={`/profession`}
          primaryText={"проф. риски"}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
          leftIcon={<CardTravelIcon />}
        />
        <MenuItemLink
          to={`/disease`}
          primaryText={"болезни"}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
          leftIcon={<BugReport />}
        />
      </SubMenu>

      <MenuItemLink
        to={`/questionnaire`}
        primaryText={"опросники"}
        onClick={onMenuClick}
        sidebarIsOpen={open}
        dense={dense}
        leftIcon={<ChatBubble />}
      />

      <MenuItemLink
        to={`/hospital`}
        primaryText={"Больницы"}
        onClick={onMenuClick}
        sidebarIsOpen={open}
        dense={dense}
        leftIcon={<Apartament />}
      />
      {isXSmall && logout}
    </Box>
  );
};

export default Menu;