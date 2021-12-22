import { isEmpty } from "lodash";
import Definition from "./Definition";

const Section = ({ section }) => {
  return (
    <div
      className="
          bg-gray-100
          dark:bg-gray-800
          rounded
          p-5
          pb-5
          pt-2
          mt-5
          filter
          shadow-md
        "
    >
      <table className="table-auto w-full text-gray-600 dark:text-gray-300">
        <thead>
          <tr
            className="
                  font-heading font-bold
                  text-xl
                  pt-3
                  pb-3
                  dark:text-gray-300
                "
          >
            {section.title}
          </tr>
        </thead>
        <tbody>
          {!isEmpty(section) &&
            section.definition.map((definition, index) => (
              <Definition key={index} definition={definition} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Section;
