import { useEffect, useState } from "react";
import {
  SCREEN_SIZE_MOBILE,
  INITIAL_MOVIES_MOBILE,
  LOAD_MORE_TABLET_MOBILE,
  SCREEN_SIZE_TABLET,
  INITIAL_MOVIES_TABLET,
  SCREEN_SIZE_DESKTOP,
  INITIAL_MOVIES_DESTOP,
  LOAD_MORE_DESKTOP
} from '../../utils/constants'

const useCurrentWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [size, setSize] = useState("");
  const [countMovies, setCountMovies] = useState([12, 3]);

  useEffect(() => {
    if (width <= SCREEN_SIZE_MOBILE) {
      setSize("small");
      setCountMovies([INITIAL_MOVIES_MOBILE, LOAD_MORE_TABLET_MOBILE]);
    } else if (width <= SCREEN_SIZE_TABLET) {
      setSize("middle");
      setCountMovies([INITIAL_MOVIES_TABLET, LOAD_MORE_TABLET_MOBILE]);
    } else if (width > SCREEN_SIZE_DESKTOP) {
      setSize("large");
      setCountMovies([INITIAL_MOVIES_DESTOP, LOAD_MORE_DESKTOP]);
    }
  }, [width]);

  useEffect(() => {
    // timeoutId for debounce mechanism
    let timeoutId = null;

    const resizeListener = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId);
      // change width from the state object after 150 milliseconds
      timeoutId = setTimeout(() => setWidth(window.innerWidth), 150);
    };
    // set resize listener
    window.addEventListener("resize", resizeListener);

    //clean up function after add
    return () => {
      //remove resize listener
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return { width, size, countMovies };
};

export default useCurrentWidth;
