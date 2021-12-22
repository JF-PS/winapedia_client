import React from "react";

const Figure1 = () => {
  return (
    <figure
      className="
        bg-gray-100
        dark:bg-gray-800
        rounded
        p-5
        pb-5
        pt-2
        filter
        shadow-md
      "
    >
      <h2 className="font-heading font-bold text-xl pt-3 pb-3 dark:text-gray-300">
        Milky Way Galaxy
      </h2>
      <img
        src="https://assets.codepen.io/3607040/milky-way-telescope.webp"
        alt="The Milky Way's galactic center in the night sky above the Paranal
          Observatory"
        className="rounded"
      />
      <figcaption className="text-gray-600 dark:text-gray-300 pt-5">
        The Milky Way's galactic center in the night sky above the
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
          Paranal Observatory
        </a>
      </figcaption>
    </figure>
  );
};

export default Figure1;
