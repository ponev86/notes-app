import { TodoForm } from 'features/todo-form';
import styles from './todo-create-page.module.scss';

const TodoCreatePage = () => {
  return (
    <>
      <h1>Создать заметку</h1>
      <div className={styles.container}>
        <TodoForm />
      </div>
    </>
  );
};

export default TodoCreatePage;
