import React from "react";

const Figure2 = () => {
  return (
    <figure
      className="
            bg-gray-100
            dark:bg-gray-800
            rounded
            mt-5
            p-5
            pb-5
            pt-5
            filter
            shadow-md
            grid
          "
    >
      <img
        src="https://assets.codepen.io/3607040/milky-way-constellation.webp"
        alt="A view of the Milky Way toward the constellation Sagittarius"
        className="rounded justify-self-center"
      />
      <figcaption className="text-gray-600 dark:text-gray-300 pt-5">
        A view of the Milky Way toward the constellation
        <a
          href="#"
          className="
                pointer
                text-blue-500
                hover:bg-blue-500
                rounded
                hover:text-white
                px-0.5
                py-0.5
                transition
                ease-in-out
              "
        >
          Sagittarius
        </a>
        (including the
        <a
          href="#"
          className="
                pointer
                text-blue-500
                hover:bg-blue-500
                rounded
                hover:text-white
                px-0.5
                py-0.5
                transition
                ease-in-out
              "
        >
          Galactic Center
        </a>
        ), as seen from a dark site with little
        <a
          href="#"
          className="
                pointer
                text-blue-500
                hover:bg-blue-500
                rounded
                hover:text-white
                px-0.5
                py-0.5
                transition
                ease-in-out
              "
        >
          light pollution
        </a>
        (the
        <a
          href="#"
          className="
                pointer
                text-blue-500
                hover:bg-blue-500
                rounded
                hover:text-white
                px-0.5
                py-0.5
                transition
                ease-in-out
              "
        >
          Black Rock Desert
        </a>
        , Nevada), the bright object on the lower right is Jupiter, just above
        <a
          href="#"
          className="
                pointer
                text-blue-500
                hover:bg-blue-500
                rounded
                hover:text-white
                px-0.5
                py-0.5
                transition
                ease-in-out
              "
        >
          Antares
        </a>
      </figcaption>
    </figure>
  );
};

export default Figure2;
