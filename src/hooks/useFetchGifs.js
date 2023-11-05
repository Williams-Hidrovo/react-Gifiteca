import { useEffect, useState } from "react";
import getGifs from "../helpers/getGifs";

//usar use al principio de archivo dice que es un hook
export const useFetchGifs = (categoria) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(categoria).then((imgs) => {
      console.log(imgs);
      setState({
        data: imgs,
        loading: false,
      });
    });
  }, [categoria]);

  return state; //{data[], loading: true}
};
