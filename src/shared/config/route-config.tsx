import { MainPage } from 'pages/main-page';
import { NotFoundPage } from 'pages/not-found-page';
import { TodoPage } from 'pages/todo-page';
import { TodoCreatePage } from 'pages/todo-create-page';

import type { RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  TODO_DETAILS = 'todo_details',
  TODO_CREATE = 'todo_create',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.TODO_DETAILS]: '/todo/',
  [AppRoutes.TODO_CREATE]: '/add',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.TODO_DETAILS]: {
    path: `${RoutePath.todo_details}:alias`,
    element: <TodoPage />,
  },
  [AppRoutes.TODO_CREATE]: {
    path: RoutePath.todo_create,
    element: <TodoCreatePage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
