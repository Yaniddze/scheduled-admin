// Core
import jsonServerProvider from 'ra-data-json-server';

// Components
import config from '../../config';
import { AdminHttpClient } from './AdminHttpClient';

export const dataProvider = jsonServerProvider(config.baseApiUrl, AdminHttpClient);
