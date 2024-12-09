import {
  fetchNotes,
  getNotesData,
  getNotesError,
  getNotesIsLoading,
  Notes,
} from 'entities/notes';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/hooks/use-app-dispatch';
import { useAppSelector } from 'shared/hooks/use-app-selector';

const MainPage = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getNotesIsLoading);
  const error = useAppSelector(getNotesError);
  const notes = useAppSelector(getNotesData);

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  return (
    <>
      <h1>Список заметок</h1>
      {error && <p>Ошибка: {error}</p>}
      <Notes isLoading={isLoading} notes={notes} />
    </>
  );
};

export default MainPage;
