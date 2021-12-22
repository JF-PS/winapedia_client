import React, { useEffect, useState } from "react";
import Article from "../../layout/Article";
import { isEmpty } from "lodash";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";

import articleService from "../../services/ArticleService";

const Articles = ({ articles, theme, userIsAdmin }) => {
  const [myArticles, setMyArticles] = useState([]);

  useEffect(() => {
    setMyArticles(articles);
  }, [articles]);

  const handleClick = () => {
    articleService
      .create({
        themeId: theme.id,
        title: "Tite à modifier",
        description:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      })
      .then((response) => {
        setMyArticles((current) => {
          const data = [{ ...response.data }];
          if (isEmpty(current)) {
            return data;
          }
          return [...current, ...data];
        });
      });
  };

  const handleDelete = (id) => {
    setMyArticles((current) => {
      const newArticle = [...current];
      const deleteArticle = newArticle.find((article) => article.id === id);
      const index = newArticle.indexOf(deleteArticle);

      let text = `êtes vous sûr de vouloir supprimer l'article : ${deleteArticle.title} ? `;
      if (window.confirm(text) === true) {
        articleService.delete(id).then(() => {
          alert(`L'article ${deleteArticle.title} à bien été supprimer`);
        });
        newArticle.splice(index, 1);
        return [...newArticle];
      } else {
        return [...current];
      }
    });
  };

  return (
    <div
      className="lg:col-start-1 
      lg:row-start-1 
      lg:row-span-full 
      lg:place-self-center
      xl:col-start-1 
      xl:col-span-2
      2xl:place-self-start"
    >
      <h1 className="text-4xl font-heading font-bold dark:text-gray-300 ">
        {theme.title}
      </h1>
      <br />
      <hr />

      {userIsAdmin && (
        <>
          <br />
          <Button variant="outlined" onClick={handleClick}>
            Nouvelle Article &nbsp;
            <AddIcon />
          </Button>
          <br />
        </>
      )}

      {!isEmpty(myArticles) &&
        myArticles.map((article, index) => (
          <div key={"div" + index}>
            <br key={"Br" + index} />
            <Article
              key={index}
              id={article.id}
              title={article.title}
              description={article.description}
              handleDelete={handleDelete}
              userIsAdmin={userIsAdmin}
            />
            <br key={"Br2" + index} />
            <hr key={"Br1" + index} />
          </div>
        ))}
    </div>
  );
};

export default Articles;
