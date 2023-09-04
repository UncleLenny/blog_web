import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import SinglePost from './components/Post/SinglePost';
import Write from './components/Write';
import Profile from './components/Profile/Profile';
import HomeAdmin from './backOffice/HomeAdmin/HomeAdmin';
import Stories from './backOffice/HomeAdmin/Stories';
import { BlogContextProvider } from './components/dataContext/BlogContext';
import Dashboard from './backOffice/HomeAdmin/Dashboard';
import Users from './backOffice/HomeAdmin/Users';
import NewStory from './backOffice/HomeAdmin/NewStory';
import NewUsers from './backOffice/HomeAdmin/NewUsers';

function App() {
  return (
    <BrowserRouter>
      <BlogContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/post' element={<SinglePost />} />
          <Route path='/write' element={<Write /> } />
          <Route path='/profile' element={<Profile /> } />
          <Route path='/story/:id' element={<SinglePost />} />
          <Route path='/admin' element={<HomeAdmin />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/stories' element={<Stories />} />
          <Route path='/users' element={<Users />} />
          <Route path='/newStory' element={<NewStory />} />
          <Route path='/newUsers' element={<NewUsers />} />
        </Routes>
      </BlogContextProvider>
    </BrowserRouter>
  );
}

export default App;
