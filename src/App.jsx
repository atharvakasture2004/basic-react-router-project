import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import RootLayout from './components/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog'
import Post1 from './pages/Post1';
import Post2 from './pages/Post2'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog/>}>
        <Route path="post1" element={<Post1/>}/>
        <Route path ="post2" element={<Post2/>}/>
        </Route>
        
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;