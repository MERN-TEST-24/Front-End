import { FC } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
  Navigate
} from 'react-router-dom'
import ManegePage from '../pages/ManegePage'
import AuthPage from '../pages/AuthPage/AuthPage'
import SignUpPage from '../pages/AuthPage/SignUpPage/SignUpPage'
import SignInPage from '../pages/AuthPage/SignInPage/SignInPage'
import GradesPage from '../pages/GradesPage'
import TeachersPage from '../pages/TeachersPage'
import SubjectsPage from '../pages/SubjectsPage'
import StudentsPage from '../pages/StudentsPage'

interface RoutesProps {
  isAuthenticated: boolean
}

const getRoutes = (isAuthenticated: boolean): RouteObject[] => {
  if (isAuthenticated) {
    return [
      {
        path: '/',
        element: <ManegePage />
      },
      {
        path: '/Grades',
        element: <GradesPage />
      },
      {
        path: '/Teachers',
        element: <TeachersPage />
      },
      {
        path: '/Subjects',
        element: <SubjectsPage />
      },
      {
        path: '/Students',
        element: <StudentsPage />
      },
      {
        path: '*',
        element: <Navigate replace to='/' />
      }
    ]
  } else {
    return [
      {
        path: '/',
        element: <AuthPage />
      },
      {
        path: '/Sign-up',
        element: <SignUpPage />
      },
      {
        path: '/Sign-in',
        element: <SignInPage />
      },
      {
        path: '*',
        element: <Navigate replace to='/' />
      }
    ]
  }
}

const RoutesComponent: FC<RoutesProps> = ({ isAuthenticated }) => {
  const router = createBrowserRouter(getRoutes(isAuthenticated))

  return <RouterProvider router={router} />
}

export default RoutesComponent
