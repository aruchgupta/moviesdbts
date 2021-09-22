import { useState, useEffect } from 'react';

import API, { Movie, Cast, Crew } from '../API';

import { isPersistedState } from '../helpers';

export type MovieState = Movie & { actors: Cast[]; directors: Crew[] | [] };

export const useMovieFetch = (movieId: string) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [state, setState] = useState<MovieState>({} as MovieState);

  const fetchMovie = async (movieId: string) => {
    // create using useCallback
    try {
      setError(false);
      setLoading(true);
      const movie = await API.fetchMovie(movieId);
      const credits = await API.fetchCredits(movieId);

      //get director only

      const directors = credits.crew.filter(
        (member: Crew) => member.job.toLowerCase() === 'director'
      );

      //   console.log(movies);
      setState(() => ({ ...movie, actors: credits?.cast, directors }));
    } catch (ex) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    const sessionState = isPersistedState(movieId);
    if (sessionState) {
      setState(sessionState);
      setLoading(false);
      return;
    }
    fetchMovie(movieId);
  }, [movieId]);

  useEffect(() => {
    sessionStorage.setItem(movieId, JSON.stringify(state));
  }, [movieId, state]);

  return { state, loading, error };
};
