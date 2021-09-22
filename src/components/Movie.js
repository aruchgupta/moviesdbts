import React from "react";
import { useParams } from "react-router-dom";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

import BreadCrumb from "./BreadCrumb";
import Grid from "./Grid";
import Spinner from "./Spinner";
import Actor from "./Actor";

import NoImage from "../images/no_image.jpg";
import { useMovieFetch } from "../hooks/useMovieFetch";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";

const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (loading) return <Spinner></Spinner>;

  if (error) return <div>Something went wrong</div>;

  // console.log(movie);

  return (
    <>
      <BreadCrumb movieTitle={movie?.original_title}></BreadCrumb>

      <MovieInfo movie={movie} />

      <MovieInfoBar
        time={movie?.runtime}
        budget={movie?.budget}
        revenue={movie?.revenue}
      />

      <Grid header={"Actors"}>
        {movie?.actors.map((actor) => (
          <Actor
            key={actor?.credit_id}
            name={1 ?? actor?.name}
            character={actor?.character}
            imageUrl={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : `${NoImage}`
            }
          >
            {" "}
          </Actor>
        ))}
      </Grid>
    </>
  );
};

export default Movie;
