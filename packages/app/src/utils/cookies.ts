import Cookies, { CookieSetOptions } from 'universal-cookie';

const cookies = new Cookies();

export const setCookie = (name: string, value: string, option: CookieSetOptions) => {
  cookies.set(name, value, { ...option });
};

export const removeCookie = (name: string) => {
  cookies.remove(name);
};

export const getCookie = (name: string) => cookies.get(name);
