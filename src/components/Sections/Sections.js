import React, { useEffect } from "react";
import { isEmpty } from "lodash";
import Section from "./Section";

const Sections = ({ sections }) => {
  useEffect(() => {
    console.log(sections);
  }, [sections]);
  return (
    <div>
      {!isEmpty(sections) &&
        sections.map((section, index) => (
          <Section key={index} section={section} />
        ))}
    </div>
  );
};

export default Sections;
