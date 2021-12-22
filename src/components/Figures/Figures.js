import React, { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import Figure from "./Figure";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import figureService from "../../services/FigureService";

const Figures = ({ figures, theme, userIsAdmin }) => {
  const [myFigures, setMyFigures] = useState([]);

  useEffect(() => {
    setMyFigures(figures);
  }, [figures]);

  const handleClick = () => {
    figureService
      .create({
        themeId: theme.id,
        title: "Tite à modifier",
        description: "Description à modifier",
        picture: "",
      })
      .then((response) => {
        setMyFigures((current) => {
          const data = [{ ...response.data }];
          if (isEmpty(current)) {
            return data;
          }
          return [...current, ...data];
        });
      });
  };

  const handleDelete = (id) => {
    setMyFigures((current) => {
      const newFigure = [...current];
      const deleteFigure = newFigure.find((figure) => figure.id === id);
      const index = newFigure.indexOf(deleteFigure);

      let text = `êtes vous sûr de vouloir supprimer l'figure : ${deleteFigure.title} ? `;
      if (window.confirm(text) === true) {
        figureService.delete(id).then(() => {
          alert(`La figure ${deleteFigure.title} à bien été supprimer`);
        });
        newFigure.splice(index, 1);
        return [...newFigure];
      } else {
        return [...current];
      }
    });
  };

  return (
    <div>
      {userIsAdmin && (
        <>
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
            <Button variant="outlined" onClick={handleClick}>
              Nouvelle Figure &nbsp;
              <AddIcon />
            </Button>
          </figure>
          <br />
        </>
      )}

      {!isEmpty(myFigures) &&
        myFigures.map((figure, index) => (
          <Figure
            key={index}
            figure={figure}
            handleDelete={handleDelete}
            userIsAdmin={userIsAdmin}
          />
        ))}
    </div>
  );
};

export default Figures;
