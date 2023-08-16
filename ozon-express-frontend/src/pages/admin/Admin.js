import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import useToggle from 'hooks/useToggle'
import { isMobile, isTablet } from 'react-device-detect'
import Articles from './articles/Articles'
import CreateArticle from './articles/CreateArticle'
import EditArticle from './articles/EditArticle'
import Categories from './categories/Categories'
import CreateCategorie from './categories/CreateCategorie'
import EditCategorie from './categories/EditCategorie'
import FAQs from './faqs/FAQs'
import CreateFAQ from './faqs/CreateFAQ'
import EditFAQ from './faqs/EditFAQ'
import Tarifs from './tarifs/Tarifs'
import CreateTarif from './tarifs/CreateTarif'
import EditTarif from './tarifs/EditTarif'
import Agences from './agences/Agences'
import CreateAgence from './agences/CreateAgence'
import EditAgence from './agences/EditAgence'
import Blogs from './blogs/Blogs'
import CreateBlog from './blogs/CreateBlog'
import EditBlog from './blogs/EditBlog'
import Commentaires from './commentaires/Commentaires'

function Admin() {

    const [sidebarOpen, setSidebarOpen] = useToggle(isMobile || isTablet ? false : true)

    return (
        <div className='flex bg-ozon-gray dark:bg-ozon-dark-gray'>
            <Sidebar sidebarOpen={sidebarOpen} toggleSidebarOpen={setSidebarOpen} />
            <div className='flex flex-col flex-1'>
                <Navbar sidebarOpen={sidebarOpen} toggleSidebarOpen={setSidebarOpen} />
                <Routes>
                    <Route path="" element={<Articles />} />

                    <Route path="commandes" element={<Articles />} />

                    <Route path="articles" element={<Articles />} />
                    <Route path="articles/create" element={<CreateArticle />} />
                    <Route path="articles/edit/:id" element={<EditArticle />} />

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
                </Routes>
            </div>
        </div>
    )
}

export default Admin