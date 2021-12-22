import React, { useState } from "react";
import Axios from "axios";
import Dropzone from "react-dropzone";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import IconButton from "@mui/material/IconButton";
// import SpotService from "../../services/SpotService";
import DoneAllIcon from "@mui/icons-material/DoneAll";

// import { useHistory } from "react-router-dom";
// import { createStyles, makeStyles } from "@material-ui/core/styles";

const UpdateImage = () => {
  const [imageSelected, setImageSelected] = useState("");

  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "traveler-spot");

    Axios.post(
      "https://api.cloudinary.com/v1_1/db00tntyg/image/upload",
      formData
    ).then((response) => {
      console.log(response.data.url);
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    uploadImage();
  };

  return (
    <Stack direction="row" spacing={2}>
      <Dropzone onDrop={(acceptedFiles) => setImageSelected(acceptedFiles[0])}>
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

      <IconButton aria-label="Remplacer l'image" onClick={handleClick}>
        <DoneAllIcon />
      </IconButton>
    </Stack>
  );
};

export default UpdateImage;
