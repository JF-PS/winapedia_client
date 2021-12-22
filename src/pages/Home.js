import React, { useEffect, useState } from "react";
import Container from "../layout/Container";
import { isEmpty } from "lodash";
import CardTheme from "../components/CardTheme/CardTheme";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import poster from "../assets/images/poster.jpg";

import themeServices from "../services/ThemeServices";

const Home = () => {
  const [themes, setThemes] = useState([]);
  const [userIsAdmin, setUserIsAdmin] = useState(false);

  useEffect(() => {
    themeServices.getAllTheme().then((response) => {
      setThemes(response.data);
    });
  }, []);

  const removeTheme = (id) => {
    setThemes((current) => {
      const deleteTheme = [...current].find((theme) => theme.id === id);
      const newThemes = [...current];
      newThemes.splice(newThemes.indexOf(deleteTheme), 1);
      return newThemes;
    });
  };

  const handleClick = () => {
    themeServices
      .create({
        description: "Description à modifier",
        title: "Titre à Modifier",
      })
      .then((response) => {
        const data = [{ ...response.data, picture: poster }];
        setThemes((current) => {
          return [...current, ...data];
        });
      });
  };

  return (
    <>
      <Container userIsAdmin={userIsAdmin} setUserIsAdmin={setUserIsAdmin}>
        {!isEmpty(themes) &&
          themes.map((theme, index) => (
            <CardTheme
              theme={theme}
              key={index}
              removeTheme={removeTheme}
              userIsAdmin={userIsAdmin}
            />
          ))}
      </Container>
      <Fab
        sx={{
          position: "fixed",
          bottom: 30,
          right: 30,
        }}
        aria-label="Add"
        onClick={handleClick}
      >
        <AddIcon />
      </Fab>
    </>
  );
};

export default Home;
