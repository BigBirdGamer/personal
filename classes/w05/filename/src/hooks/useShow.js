//? hook (function) has to be named useXXX

import { useEffect, useState } from "react";

function useShow(id) {
  const [show, setShow] = useState({});

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => res.json())
      .then((data) => setShow(data)); //* save the data in state
  }, [id]); //* only do once on mount

  return show;
}

export default useShow;