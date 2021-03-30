/* eslint-disable no-param-reassign */
/* eslint-disable no-prototype-builtins */
import { fetchUtils } from 'react-admin';

const isQa = false;

export function AdminHttpClient(url: string, options: any = {}): any {
  if (!options.headers) 
    options.headers = new Headers();

  options.headers.set('Accept', 'application/json');

  const token = localStorage.getItem('token');
  const authHeaderName = isQa ? 'Auth' : 'Authorization';

  options.headers.set(authHeaderName, `Bearer ${token}`);

  return fetchUtils.fetchJson(url, options);
}
