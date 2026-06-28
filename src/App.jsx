import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AddWorkPage from './pages/AddWorkPage';
import EditWorkPage from './pages/EditWorkPage';
import { workLoader } from './pages/EditWorkPage';

const App = () => {

    // Add New Work
const addWork = async (newWork) => {
  const res = await fetch('/api/works', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newWork),
  });

  if (!res.ok) {
    throw new Error('Failed to add work');
  }
};


//Update Work
const updateWork = async (work) => {
  const res = await fetch(`/api/works/${work.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(work),
  });

  if (!res.ok) {
    throw new Error('Failed to update work');
  }
};


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element = {<MainLayout />}>
      <Route index element= {<HomePage />} /> 
          
      <Route path='/edit-work/:id' 
      element= {<EditWorkPage updateWorkSubmit={updateWork}/>}
      loader = {workLoader}/>

      <Route path='/add-work' 
      element= {<AddWorkPage addWorkSubmit={addWork}/>}/>
   
      </Route>
    )
  );


  return <RouterProvider router={router} />;
};

export default App
