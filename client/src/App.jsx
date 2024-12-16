import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Button } from "./components/ui/button";
import AppLayout from './layouts/app-layout';
import LandingPage from './pages/landing';
import Onboarding from './pages/onboarding';
import JobListing from './pages/job-listing';
import Job from './pages/job';
import MyJobs from './pages/myjobs';
import SavedJobs from './pages/saved-jobs';
import PostJob from './pages/post-job';
import { ThemeProvider } from './components/theme-provider';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/onboarding',
        element: <Onboarding />
      },
      {
        path: '/jobs',
        element: <JobListing />
      },
      {
        path: '/job/:id',
        element: <Job />
      },
      {
        path: '/my-jobs',
        element: <MyJobs />
      },
      {
        path: '/saved-jobs',
        element: <SavedJobs />
      },
      {
        path: '/post-job',
        element: <PostJob />
      }
    ]
  }   

])

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
