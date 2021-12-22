import React from "react";

const SectionInfo = () => {
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
          <tr>
            <h2
              className="
                    font-heading font-bold
                    text-xl
                    pt-3
                    pb-3
                    dark:text-gray-300
                  "
            >
              Observation Data
            </h2>
          </tr>
        </thead>
        <tbody>
          <tr className="flex justify-between">
            <td className="font-semibold">Constellation</td>
            <td>Sagittarius</td>
          </tr>
          <tr className="flex justify-between">
            <td className="font-semibold">Right ascension</td>
            <td>17h 45m 40.0409s</td>
          </tr>
          <tr className="flex justify-between">
            <td className="font-semibold">Declination</td>
            <td>−29° 0′ 28.118″</td>
          </tr>
          <tr className="flex justify-between">
            <td className="font-semibold">Distance</td>
            <td>25.6–27.1 kly</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SectionInfo;
