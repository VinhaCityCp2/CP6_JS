import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx';
import Livros from './routes/Livros.jsx';
import EditarLivro from './routes/EditarLivro.jsx';
import ExcluirLivro from './routes/ExcluirLivro.jsx';
import InserirLivro from './routes/InserirLivro.jsx';
import Sobre from './routes/Sobre.jsx';
import Pedido from './routes/Pedido.jsx';
import EditarPedido from './routes/EditarPedido.jsx';
import ExcluirPedido from './routes/ExcluirPedido.jsx';
import InserirPedido from './routes/InserirPedido.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,


    children:[
      {path: '/', element: <Home /> },
      {path: '/home', element: <Home /> },
      {path: '/login', element: <Login /> },
      {path: '/livros', element: <Livros /> },
      {path: '/editar/livro/:id', element: <EditarLivro />},
      {path: '/excluir/livro/:id', element: <ExcluirLivro />},
      {path: '/inserirlivro', element: <InserirLivro />},
      {path: '/sobre', element: <Sobre /> },
      {path: '/pedido', element: <Pedido />},
      {path: '/editar/pedido/:id', element: <EditarPedido /> },
      {path: '/excluir/pedido/:id', element: <ExcluirPedido /> },
      {path: '/inserirpedido', element: <InserirPedido/> },
      
    ]
    
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
