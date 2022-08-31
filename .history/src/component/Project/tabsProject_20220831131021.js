import React, { useState } from "react";
import { Tab, ButtonGroup } from "./styled";
import ListProject from "./ListProject";
import { motion } from "framer-motion";

const types = ["React", "Laravel", "WordPress"];
export default function TabGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <>
      <motion.div
        initial={{ x: 0, y: 20, opacity: 0, translate: 0.4 }}
        animate={{ x: 0, y: 0, opacity: 1, translate: 1 }}
        exit={{ x: 0, y: -20, opacity: 0, translate: 0.4 }}
        transition={{
          duration: 0.18,
          ease: [0.12, 0.93, 0.66, 0.97],
        }}
      >
        <ButtonGroup>
          {types.map((type) => (
            <Tab
              key={type}
              active={active === type}
              onClick={() => setActive(type)}
            >
              {type}
            </Tab>
          ))}
        </ButtonGroup>
      </motion.div>
      <motion.div
        initial={{ x: 0, y: 20, opacity: 0, translate: 0.4 }}
        animate={{ x: 0, y: 0, opacity: 1, translate: 1 }}
        exit={{ x: 0, y: -20, opacity: 0, translate: 0.4 }}
        transition={{
          duration: 2.18,
          ease: [0.12, 0.93, 0.66, 0.97],
        }}
      >
        {active && <ListProject tab={active} />}
      </motion.div>
    </>
  );
}
// Usage
<TabGroup />;
