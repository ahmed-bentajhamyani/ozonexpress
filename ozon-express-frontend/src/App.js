import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useDarkMode } from 'context/DarkModeContext';

import { useAuth } from 'context/AuthContext';
import AuthService from 'auth/AuthService';
import HttpClient from 'services/client/HttpClient';

import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from 'components/ErrorFallback';

import Home from 'pages/home/Home';

import Blog from 'pages/blog/Blog';
import BlogHome from 'pages/blog/Home';
import OneBlog from 'pages/blog/OneBlog';

import Market from 'pages/ozon_market/Market';
import MarketHome from 'pages/ozon_market/Home';
import Article from 'pages/ozon_market/Article';

import Login from 'auth/Login';
import RequireAuth from 'components/RequireAuth';

import Admin from 'pages/admin/Admin';
import Articles from 'pages/admin/articles/Articles';
import CreateArticle from 'pages/admin/articles/CreateArticle';
import EditArticle from 'pages/admin/articles/EditArticle';
import Categories from 'pages/admin/categories/Categories';
import CreateCategorie from 'pages/admin/categories/CreateCategorie';
import EditCategorie from 'pages/admin/categories/EditCategorie';
import Personnels from 'pages/admin/utilisateurs/personnels/Personnels';
import CreatePersonnel from 'pages/admin/utilisateurs/personnels/CreatePersonnel';
import EditPersonnel from 'pages/admin/utilisateurs/personnels/EditPersonnel';
import FAQs from 'pages/admin/faqs/FAQs';
import CreateFAQ from 'pages/admin/faqs/CreateFAQ';
import EditFAQ from 'pages/admin/faqs/EditFAQ';
import Tarifs from 'pages/admin/tarifs/Tarifs';
import CreateTarif from 'pages/admin/tarifs/CreateTarif';
import EditTarif from 'pages/admin/tarifs/EditTarif';
import Agences from 'pages/admin/agences/Agences';
import CreateAgence from 'pages/admin/agences/CreateAgence';
import EditAgence from 'pages/admin/agences/EditAgence';
import Blogs from 'pages/admin/blogs/Blogs';
import CreateBlog from 'pages/admin/blogs/CreateBlog';
import EditBlog from 'pages/admin/blogs/EditBlog';
import Commentaires from 'pages/admin/commentaires/Commentaires';
import ScrollToTop from 'utils/ScrollToTop';

function App() {
  const { darkMode } = useDarkMode();
  const { user, setUser, jwtToken } = useAuth();
  const [userFetched, setUserFetched] = useState(false);

  useEffect(() => {
    const getAuthUser = async () => {
      let formData = new FormData();
      formData.append('jwtToken', jwtToken)

      const authService = new AuthService(HttpClient)
      try {
        const response = await authService.getUser(formData)
        if (response) {
          const user = await response;
          setUser(user);
        }
      } catch (error) {
        console.error(error)
      }

      setUserFetched(true)
    }

    getAuthUser();
  }, [])

  return (
    <div id='home' className={`font-poppins ${darkMode && 'dark bg-black'}`} data-simplebar>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/blogs" element={<Blog />} >
              <Route path="" element={<BlogHome />} />
              <Route path=":id" element={<OneBlog />} />
            </Route>

            <Route path="/market" element={<Market />} >
              <Route path="" element={<MarketHome />} />
              <Route path="article/:id" element={<Article />} />
            </Route>

            <Route path="/login" element={<Login />} />

            {userFetched &&
              <Route element={<RequireAuth user={user} />}>
                <Route path="/admin" element={<Admin />} >
                  <Route exact path="" element={<Articles />} />

                  <Route path="commandes" element={<Articles />} />

                  <Route path="articles" element={<Articles />} />
                  <Route path="articles/create" element={<CreateArticle />} />
                  <Route path="articles/edit/:id" element={<EditArticle />} />

                  <Route path="categories" element={<Categories />} />
                  <Route path="categories/create" element={<CreateCategorie />} />
                  <Route path="categories/edit/:id" element={<EditCategorie />} />

                  <Route path="personnels" element={<Personnels />} />
                  <Route path="personnels/create" element={<CreatePersonnel />} />
                  <Route path="personnels/edit/:id" element={<EditPersonnel />} />

                  <Route path="categories" element={<Categories />} />
                  <Route path="categories/create" element={<CreateCategorie />} />
                  <Route path="categories/edit/:id" element={<EditCategorie />} />

                  <Route path="faqs" element={<FAQs />} />
                  <Route path="faqs/create" element={<CreateFAQ />} />
                  <Route path="faqs/edit/:id" element={<EditFAQ />} />

                  <Route path="tarifs" element={<Tarifs />} />
                  <Route path="tarifs/create" element={<CreateTarif />} />
                  <Route path="tarifs/edit/:id" element={<EditTarif />} />

                  <Route path="agences" element={<Agences />} />
                  <Route path="agences/create" element={<CreateAgence />} />
                  <Route path="agences/edit/:id" element={<EditAgence />} />

                  <Route path="blogs" element={<Blogs />} />
                  <Route path="blogs/create" element={<CreateBlog />} />
                  <Route path="blogs/edit/:id" element={<EditBlog />} />

                  <Route path="commentaires" element={<Commentaires />} />
                  {/* <Route path="commentaires/create" element={<CreateCommentaire />} />
          <Route path="commentaires/edit/:id" element={<CreateCommentaire />} /> */}
                </Route>
              </Route>
            }
          </Routes>
        </ScrollToTop>
      </ErrorBoundary>
    </div>
  );
}

export default App;
