import {link, data, setData, setisFetching} from '../../types';

const fetchData = async (link, data, setData, setisFetching) => {
  const res = await fetch(link);
  try {
    const resData = await res.json();
    setData([...data, ...resData]);
    setisFetching(false);
  } catch (error) {
    setisFetching(false);
    // console.log(error);
  }
};

export { fetchData };
