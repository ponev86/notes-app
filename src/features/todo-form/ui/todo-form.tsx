import clsx from 'clsx';
import { FC, useEffect } from 'react';
import { Button, ButtonTheme } from 'shared/ui/button/button';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from 'shared/ui/input/input';
import Checkbox from 'shared/ui/checkbox/checkbox';
import styles from './todo-form.module.scss';
import { useAppDispatch } from 'shared/hooks/use-app-dispatch';
import {
  createTodo,
  editTodo,
  getTodosIsPending,
  getTodosModal,
} from 'entities/todos';
import { useAppSelector } from 'shared/hooks/use-app-selector';
import { useNavigate } from 'react-router-dom';

interface FormProps {
  className?: string;
  isEdit?: boolean;
  onClose?: VoidFunction;
}

export interface TodoFormValues {
  todo: string;
  completed: boolean;
}

export type TValidationShape<T extends object> = Partial<
  Record<keyof T, yup.AnySchema>
>;

const todoFormResolver = yupResolver(
  yup.object().shape({
    todo: yup
      .string()
      .required('Поле обязательно для заполнения')
      .min(3, 'Минимум — 3 символа')
      .max(50, 'Максимум — 50 символов'),
    completed: yup.boolean().default(false),
  })
);

export const TodoForm: FC<FormProps> = (props) => {
  const { className, isEdit, onClose } = props;

  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const isPending = useAppSelector(getTodosIsPending);
  const todosModal = useAppSelector(getTodosModal);

  const eventText = isEdit ? 'Редактировать' : 'Создать';

  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<TodoFormValues>({
    resolver: todoFormResolver,
    mode: 'all',
    defaultValues: {
      todo: '',
      completed: false,
    },
  });

  const submitHandler: SubmitHandler<TodoFormValues> = async (data) => {
    if (isEdit && todosModal) {
      await dispatch(editTodo(todosModal.id, data));

      onClose?.();
    } else {
      await dispatch(
        createTodo({ todo: data.todo, completed: data.completed })
      );
      navigate('/', { replace: true });
    }
  };

  useEffect(() => {
    if (!todosModal) return;

    reset({
      todo: todosModal.todo,
    });
  }, [todosModal, reset]);

  return (
    <form
      className={clsx(styles.form, className)}
      onSubmit={handleSubmit(submitHandler)}
    >
      <Input
        showErrorMessage
        disabled={isPending}
        {...register('todo')}
        placeholder="Введите название"
        error={errors.todo?.message}
      />
      {!todosModal && (
        <Controller
          control={control}
          name="completed"
          render={({ field }) => (
            <Checkbox
              disabled={isPending}
              checked={field.value}
              onChange={(e) => field.onChange(e.target.checked)}
              label="Выполнено"
            />
          )}
        />
      )}
      <div className={styles.buttons}>
        {todosModal && (
          <Button
            theme={ButtonTheme.Secondary}
            disabled={isPending}
            type="button"
            onClick={onClose}
            className={styles.button}
          >
            Отмена
          </Button>
        )}
        <Button
          type="submit"
          disabled={!isValid || isPending}
          className={styles.button}
        >
          {eventText}
        </Button>
      </div>
    </form>
  );
};
