import React from "react";

const SectionInfo2 = () => {
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
              Characteristics
            </h2>
          </tr>
        </thead>
        <tbody>
          <tr className="flex justify-between gap-4">
            <td className="font-semibold">Type</td>
            <td>Sb, Sbc, or SB(rs)bc (barred spiral galaxy)</td>
          </tr>
          <tr className="flex justify-between gap-4">
            <td className="font-semibold">Mass</td>
            <td>(0.8–1.5)×1012 M</td>
          </tr>
          <tr className="flex justify-between gap-4">
            <td className="font-semibold">Number of stars</td>
            <td>100–400 billion</td>
          </tr>
          <tr className="flex justify-between gap-4">
            <td className="font-semibold">Size</td>
            <td>Stellar disk: 185 ± 15 kly</td>
          </tr>
          <tr className="flex justify-between gap-4">
            <td className="font-semibold">Thickness of thin stellar disk</td>
            <td>≈2 kly (0.6 kpc)</td>
          </tr>
          <tr className="flex justify-between gap-4">
            <td className="font-semibold">Angular momentum</td>
            <td>≈1×1067 J s</td>
          </tr>
          <tr className="flex justify-between gap-4">
            <td className="font-semibold">Sun's Galactic rotation period</td>
            <td>240 Myr</td>
          </tr>
          <tr className="flex justify-between gap-4">
            <td className="font-semibold">Spiral pattern rotation period</td>
            <td>220–360 Myr</td>
          </tr>
          <tr className="flex justify-between gap-4">
            <td className="font-semibold">Bar pattern rotation period</td>
            <td>100–120 Myr</td>
          </tr>
          <tr className="flex justify-between gap-4">
            <td className="font-semibold">Speed relative to CMB rest frame</td>
            <td>552.2±5.5 km/s</td>
          </tr>
          <tr className="flex justify-between gap-4">
            <td className="font-semibold">Escape velocity at Sun's position</td>
            <td>550 km/s</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SectionInfo2;
