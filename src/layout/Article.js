import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../contexts/ThemeContext.js";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import Button from "@mui/material/Button";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import articleService from "../services/ArticleService";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Article = ({ id, title, description, handleDelete, userIsAdmin }) => {
  const themeContext = useContext(ThemeContext);

  const [isEditionMode, setIsEditionMode] = useState(false);
  const [myTitle, setMyTitle] = useState(title);
  const [myDescription, setMyDescription] = useState(description);

  useEffect(() => {
    console.log(themeContext.theme);
  }, [themeContext]);

  const handleTitleChange = (e) => {
    setMyTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setMyDescription(e.target.value);
  };

  const handleClick = () => {
    articleService
      .update(id, { title: myTitle, description: myDescription })
      .then((response) => {
        console.log(response);
      });

    setIsEditionMode(false);
  };

  return (
    <article>
      {isEditionMode && userIsAdmin ? (
        <>
          <IconButton
            aria-label="Annule"
            onClick={() => setIsEditionMode(false)}
          >
            <CancelPresentationIcon />
          </IconButton>
          <TextField
            id="outlined-textarea"
            label="Tire"
            placeholder="Placeholder"
            value={myTitle}
            onChange={handleTitleChange}
            variant="outlined"
            sx={{ width: "100%" }}
          />
          <h2 className="text-2xl  font-medium text-gray-600 dark:text-gray-300">
            {myTitle}
          </h2>
          <TextField
            id="outlined-textarea"
            label="Article"
            placeholder="Placeholder"
            multiline
            onChange={handleDescriptionChange}
            value={myDescription}
            variant="outlined"
            sx={{ width: "100%" }}
          />
          <p className="font-text font-medium text-gray-600 dark:text-gray-300">
            {myDescription}
          </p>
          <Button variant="outlined" onClick={handleClick}>
            Enregistré &nbsp;
            <DoneAllIcon />
          </Button>
        </>
      ) : (
        <>
          <h2 className="text-2xl  font-medium text-gray-600 dark:text-gray-300">
            {myTitle}
            {userIsAdmin && (
              <>
                <IconButton
                  aria-label="Annule"
                  onClick={() => setIsEditionMode(true)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  aria-label="Delete"
                  onClick={() => handleDelete(id)}
                >
                  <DeleteForeverIcon />
                </IconButton>
              </>
            )}
          </h2>
          <br />
          <p className="font-text font-medium text-gray-600 dark:text-gray-300">
            {myDescription}
          </p>
        </>
      )}
    </article>
  );
};

export default Article;
