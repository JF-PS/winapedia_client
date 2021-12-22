import React, { useEffect, useState } from "react";
import Contents from "../layout/Contents";
import Figure1 from "../layout/Figure1";
import Figure2 from "../layout/Figure2";
import Container from "../layout/Container";
import SectionInfo from "../layout/SectionInfo";
import SectionInfo2 from "../layout/SectionInfo2";
import RightBar from "../layout/RightBar";
import ThemeContext from "../contexts/ThemeContext";
import themeServices from "../services/ThemeServices";
import Articles from "../components/Articles/Articles";
import UpdateImage from "../components/UpdateImage/UpdateImage";
import Figures from "../components/Figures/Figures";
import Sections from "../components/Sections/Sections";

import { isEmpty } from "lodash";

const Test = (data) => {
  const [theme, setTheme] = useState({});
  const [userIsAdmin, setUserIsAdmin] = useState(false);

  useEffect(() => {
    themeServices.getTheme(data.match.params.id).then((response) => {
      setTheme(response.data);
    });
  }, [setTheme, data.match.params.id]);

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme }}>
      <Container userIsAdmin={userIsAdmin} setUserIsAdmin={setUserIsAdmin}>
        <Articles
          userIsAdmin={userIsAdmin}
          theme={!isEmpty(theme) && theme}
          articles={!isEmpty(theme) && !isEmpty(theme.article) && theme.article}
        />

        <RightBar>
          <Figures
            userIsAdmin={userIsAdmin}
            theme={!isEmpty(theme) && theme}
            figures={!isEmpty(theme) && !isEmpty(theme.figure) && theme.figure}
          />
          <Sections
            userIsAdmin={userIsAdmin}
            sections={
              !isEmpty(theme) && !isEmpty(theme.section) && theme.section
            }
          />
        </RightBar>

        <Contents />
      </Container>
    </ThemeContext.Provider>
  );
};

export default Test;
