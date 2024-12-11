import { AppLink } from 'shared/ui/app-link/app-link';
import styles from './not-found-page.module.scss';

export const NotFoundPage = () => {
  return (
    <div className={styles.notFoundPage}>
      Ошибка 404. Страница не найдена!
      <p>
        <AppLink to="/">На главную</AppLink>
      </p>
    </div>
  );
};
