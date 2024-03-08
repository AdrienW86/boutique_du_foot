import { useEffect } from 'react';

const CookieSetter = ({ name, value, days }) => {
  useEffect(() => {
    const setCookie = (name, value, days) => {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      const expires = "expires=" + date.toUTCString();
      document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    setCookie(name, value, days);

    return () => {
      document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
  }, [name, value, days]);

  return null;
}

export default CookieSetter;