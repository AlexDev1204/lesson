import { createBrowserHistory } from "history";
import { useEffect, useState } from "react";

const history = createBrowserHistory();

export const useCheckRoute = () => {
  let path = history.location.pathname;
  const [route, setRoute] = useState(path);

  useEffect(() => {
    const unsubscribe = history.listen((args) => setRoute(args.pathname));

    return () => unsubscribe();
  });

  return route;
};

export const useActiveRoute = (location) => {
  let path = history.location.pathname;
  const [route, setRoute] = useState(path);

  useEffect(() => {
    const unsubscribe = history.listen((args) => setRoute(args.pathname));

    return () => unsubscribe();
  });

  return route === location;
};

export default history;
