const { locale } = useI18n();
const baseURL = 'https://handleits.com/api';

export const fetchData = async (endpoint, locale) => {
    try {
        const { data, error } = await useFetch(`${baseURL}/${endpoint}`, {
         headers: {
          'Accept': 'application/json',
          'Accept-Language': locale
        }
      });
      if (error.value) {
        throw new Error(error.value);
      }
      return data.value;
    } catch (err) {
      console.error('Fetch error:', err.message);
      throw err;
    }
  };
  
//   const { data, error } = await fetchData('home', locale.value);
  