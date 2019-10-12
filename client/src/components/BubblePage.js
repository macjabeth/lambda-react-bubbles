import React, { useState, useEffect } from "react";
import { serverHandshake } from '../auth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await serverHandshake(true).get('/colors');
      setColorList(response.data);
    })();
  }, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
