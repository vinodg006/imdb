import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Card, Image } from "semantic-ui-react";
import RemoveFilmModal from "./RemoveFilmModal";
import FormFilmModal from "./FormFilmModal";
import { removeFilm } from "../actions/index";
import { useNavigate } from "react-router-dom";

const FilmCard = ({
  Poster,
  Title,
  Year,
  Runtime,
  Genre,
  Director,
  imdbID,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const deleteFilm = () => {
    dispatch(removeFilm(imdbID));
    setShowDeleteModal(false);
  };

  return (
    <Card  onClick={() => navigate(`/movie/${imdbID}`)}>
      <Image src={Poster} alt={Title} wrapped  />
      <Card.Content >
        <Card.Header>{Title}</Card.Header>
      </Card.Content>
      <FormFilmModal
        deleteFilm={deleteFilm}
        setOpen={setShowEditModal}
        open={showEditModal}
        Poster={Poster}
        Title={Title}
        Year={Year}
        Runtime={Runtime}
        Genre={Genre}
        Director={Director}
        imdbID={imdbID}
      />
      <RemoveFilmModal
        deleteFilm={deleteFilm}
        setOpen={setShowDeleteModal}
        open={showDeleteModal}
      />
    </Card>
  );
};

export default FilmCard;
