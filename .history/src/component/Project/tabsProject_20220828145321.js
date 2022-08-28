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
        initial={{ x: -30, y: 0, opacity: 0, translate: 0.9 }}
        animate={{ x: 10, y: 10, opacity: 1, translate: 1 }}
        exit={{ x: -10, y: 40, opacity: 0, translate: 0.9 }}
        transition={{
          duration: 0.18,
          ease: [0.12, 0.93, 0.66, 0.97],
        }}
      >
        <ButtonGroup className="md:block">
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
        initial={{ x: -40, y: 20, opacity: 0, translate: 0.9 }}
        animate={{ x: 0, y: 0, opacity: 1, translate: 1 }}
        exit={{ x: 10, y: -40, opacity: 0, translate: 0.9 }}
        transition={{
          duration: 2.18,
          ease: [0.12, 0.93, 0.66, 0.97],
        }}
      >
        {active && <ListProject tab={active} />}{" "}
      </motion.div>
    </>
  );
}
// Usage
<TabGroup />;
