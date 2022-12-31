import React from 'react';
import { Home, Blogs,About} from "./../Pages";

const appRoutes = [
  {
    name:"about",
    exact:true,
    path: "/about",
    element: <About/>,
  },
  {
  	name:"blogs",
  	exact:true,
    path: "/blogs",
    element: <Blogs/>,
  },
  {
  	name:"home",
  	exact:true,
    path: "/pelatge.github.io",
    element: <Home/>,
  }
];

export default appRoutes;
