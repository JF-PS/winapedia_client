import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import Dropzone from "react-dropzone";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import EditIcon from "@mui/icons-material/Edit";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import IconButton from "@mui/material/IconButton";
import figureService from "../../services/FigureService";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import poster from "../../assets/images/poster.jpg";

const Figure = ({ figure, handleDelete, userIsAdmin }) => {
  const [imageSelected, setImageSelected] = useState("");
  const [isEditionMode, setIsEditionMode] = useState(false);
  const [picture, setPicture] = useState(figure.picture);
  const [title, setTitle] = useState(figure.title);
  const [description, setDescription] = useState(figure.description);

  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "traveler-spot");

    Axios.post(
      "https://api.cloudinary.com/v1_1/db00tntyg/image/upload",
      formData
    ).then((response) => {
      const data = {
        id: figure.id,
        title,
        description,
        picture: response.data.url,
      };
      setPicture(response.data.url);
      figureService.update(data, figure.id).then((response) => {
        console.log(response);
        setIsEditionMode(false);
      });
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (imageSelected !== "") {
      uploadImage();
    } else {
      const data = {
        id: figure.id,
        title,
        description,
      };
      figureService.update(data, figure.id).then((response) => {
        console.log(response);
        setIsEditionMode(false);
      });
    }
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div>
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
        {isEditionMode && userIsAdmin ? (
          <>
            <TextField
              id="standard-basic"
              label="title"
              variant="filled"
              value={title}
              onChange={handleChangeTitle}
            />
            <IconButton
              aria-label="Annule"
              onClick={() => setIsEditionMode(false)}
            >
              <CancelPresentationIcon />
            </IconButton>
          </>
        ) : (
          <h2 className="font-heading font-bold text-xl pt-3 pb-3 dark:text-gray-300">
            {title}
            {userIsAdmin && (
              <>
                <IconButton
                  aria-label="Edit"
                  onClick={() => setIsEditionMode(true)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  aria-label="Delete"
                  onClick={() => handleDelete(figure.id)}
                >
                  <DeleteForeverIcon />
                </IconButton>
              </>
            )}
          </h2>
        )}

        <img
          src={picture === "" ? poster : picture}
          alt={figure.title}
          className="rounded"
        />
        {isEditionMode && userIsAdmin && (
          <Dropzone
            onDrop={(acceptedFiles) => setImageSelected(acceptedFiles[0])}
          >
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <IconButton aria-label="Remplacer l'image">
                    <SystemUpdateAltIcon />
                  </IconButton>
                </div>
              </section>
            )}
          </Dropzone>
        )}

        {isEditionMode && userIsAdmin ? (
          <>
            <TextField
              id="standard-basic"
              label="description"
              variant="filled"
              value={description}
              onChange={handleChangeDescription}
            />
            <br /> <br />
            <Button variant="outlined" onClick={handleClick}>
              Enregistré &nbsp;
              <DoneAllIcon />
            </Button>
          </>
        ) : (
          <figcaption className="text-gray-600 dark:text-gray-300 pt-5">
            {description}
          </figcaption>
        )}
      </figure>
    </div>
  );
};

export default Figure;
