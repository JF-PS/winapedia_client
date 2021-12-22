import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { useHistory } from "react-router-dom";
import themeService from "../../services/ThemeServices";
import { CardActionArea } from "@mui/material";
import { isEmpty } from "lodash";
import poster from "../../assets/images/poster.jpg";

const CardTheme = ({ theme, removeTheme, userIsAdmin }) => {
  const [isEditionMode, setIsEditionMode] = useState(false);
  const [myTitle, setMyTitle] = useState(theme.title);
  const [myDescription, setMyDescription] = useState(theme.description);
  const history = useHistory();

  const handleTitleChange = (e) => {
    setMyTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setMyDescription(e.target.value);
  };

  const handleClick = () => {
    themeService
      .update(theme.id, { title: myTitle, description: myDescription })
      .then((response) => {
        console.log(response);
      });

    setIsEditionMode(false);
  };

  const handleDelete = (id, name) => {
    let text = `êtes vous sûr de vouloir supprimer ${name} ? `;
    if (window.confirm(text) === true) {
      themeService.delete(id).then(() => {
        alert(`La page ${name} à bien été supprimer`);
        removeTheme(id);
      });
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          sx={{ padding: "20px", "&:hover": { transform: "scale(1.1)" } }}
          onClick={() => {
            history.push(`/shearch/${theme.id}`);
          }}
          component="img"
          height="140"
          image={
            !isEmpty(theme.figure) && theme.figure[0].picture !== ""
              ? theme.figure[0].picture
              : poster
          }
          alt="green iguana"
        />
        <CardContent>
          {isEditionMode && userIsAdmin ? (
            <>
              <TextField
                id="outlined-textarea"
                label="Tire"
                placeholder="Placeholder"
                value={myTitle}
                onChange={handleTitleChange}
                variant="outlined"
                sx={{ width: "100%" }}
              />
              <TextField
                id="outlined-textarea"
                label="Tire"
                placeholder="Placeholder"
                value={myDescription}
                onChange={handleDescriptionChange}
                variant="outlined"
                sx={{ width: "100%" }}
              />
              <Button variant="outlined" onClick={handleClick}>
                Enregistré &nbsp;
                <DoneAllIcon />
              </Button>
            </>
          ) : (
            <>
              <Typography gutterBottom variant="h5" component="div">
                {myTitle}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {myDescription}
              </Typography>
            </>
          )}
        </CardContent>

        {userIsAdmin && (
          <CardActions>
            <IconButton
              aria-label="Annule"
              onClick={() => setIsEditionMode(true)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="Delete"
              onClick={() => handleDelete(theme.id, myTitle)}
            >
              <DeleteForeverIcon />
            </IconButton>
          </CardActions>
        )}
      </CardActionArea>
    </Card>
  );
};

export default CardTheme;
