import React, { useState } from "react";
import { Tab, ButtonGroup } from "./styled";
import ListProject from "./ListProject";

const types = ["React", "Laravel", "WordPress"];
export default function TabGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <>
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
      <p />
      <div className="p-5 border border-[#44566c] bg-white">
        {" "}
        {active && <ListProject tab={active} />}{" "}
      </div>
    </>
  );
}
// Usage
<TabGroup />;
