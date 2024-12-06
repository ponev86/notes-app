import { MainPage } from 'pages/main-page';
import { NotFoundPage } from 'pages/not-found-page';
import { TodoPage } from 'pages/todo-page';

import type { RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  TODO_DETAILS = 'todo_details',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.TODO_DETAILS]: '/todo/',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.TODO_DETAILS]: {
    path: `${RoutePath.todo_details}:id`,
    element: <TodoPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
