//import compenentele ce tine de routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page404 from "./pages/Page404";
import Favourites from "./pages/Favourites";
import NewsDetails from "./pages/NewsDetails";
import NewsCategory from "./pages/NewsCategory";
import { useEffect } from "react";
import { getNewsCategoriesEndpoit } from "./api/endpoints";

//Ne definim rutele necesare aplicatiei
const router = createBrowserRouter([{
  path: '/',
  element: <div></div>,
  errorElement: <Page404 />,
}, {
  path:'/favourits',
  element: <Favourites />,
}, {
  path:'/category/:categoryId',
  element: <NewsCategory/>
}, {
  path:'/news/:newsId',
  element: <NewsDetails/>
}
  
]);

function App() {
  useEffect(() =>{
    const categoryApiLink= getNewsCategoriesEndpoit('football')
  fetch(categoryApiLink)
  .then((response) => response.json)
  .then((data) => {
    
  })
  },[])
  return (
    <div className="App">
      {/*Adaugam providerul de rute */}
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
