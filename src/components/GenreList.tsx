import React from "react";
import { useGenres } from "../hooks/useGenres";

type Props = {};

function GenreList({}: Props) {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
}

export default GenreList;
