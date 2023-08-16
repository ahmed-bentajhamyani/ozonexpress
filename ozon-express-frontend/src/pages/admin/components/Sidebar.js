import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import Box from 'assets/brand/ozon_box.png';
import OzonExpress from 'assets/brand/ozonexpress_logo.png';
import { RxDashboard } from 'react-icons/rx';
import { BsChevronRight, BsQuestionCircle } from 'react-icons/bs';
import { BiCategoryAlt, BiCommentDetail, BiDollarCircle } from 'react-icons/bi';
import { MdOutlinePolicy } from 'react-icons/md';
import { FaBloggerB, FaRegBuilding } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { HiOutlineNewspaper } from 'react-icons/hi';
import { CiBoxList } from 'react-icons/ci';
import { TiChevronRightOutline } from 'react-icons/ti';
import { isBrowser, isMobile } from 'react-device-detect';

function Sidebar({ sidebarOpen, toggleSidebarOpen }) {

    // Close submenus when close the sidebar
    useEffect(() => {
        if (!sidebarOpen) {
            const updatedMenus = menus.map((menu) => {
                if (menu.submenu) {
                    return { ...menu, submenuOpen: false };
                }
                return menu;
            });

            setMenus(updatedMenus);
        }
    }, [sidebarOpen])

    // Open submenu
    const toggleSubmenuOpen = (menuId) => {

        if (isBrowser) { toggleSidebarOpen(true); }

        const updatedMenus = menus.map((menu) => {
            if (menu.id === menuId) {
                return { ...menu, submenuOpen: sidebarOpen ? !menu.submenuOpen : true };
            }
            return menu;
        });

        setMenus(updatedMenus);
    }

    // Menus
    const [menus, setMenus] = useState([
        { id: 1, title: "Tableau de board", icon: <RxDashboard />, url: '/admin' },
        {
            id: 2,
            title: "Commandes",
            icon: <HiOutlineNewspaper />,
            url: '/admin/reservations',
            submenu: true,
            submenuOpen: false,
            submenuItems: [
                { title: "Commandes", url: '/admin/commandes' },
                { title: "Commandes en attentes", url: '/admin/commandes/enattentes' },
                { title: "Commandes en cours", url: '/admin/commandes/encours' },
                { title: "Commandes livrées", url: '/admin/commandes/livrees' }
            ],
            spacing: true
        },
        { id: 3, title: "Articles", icon: <CiBoxList />, url: '/admin/articles' },
        { id: 4, title: "Categories", icon: <BiCategoryAlt />, url: '/admin/categories' },
        {
            id: 5,
            title: "Utilisateurs",
            icon: <FiUsers />,
            submenu: true,
            submenuOpen: false,
            submenuItems: [
                { title: "Personnels", url: '/admin/personnels' },
                { title: "Clients", url: '/admin/clients' }
            ]
        },
        { id: 6, title: "FAQs", icon: <BsQuestionCircle />, url: '/admin/faqs', spacing: true },
        { id: 7, title: "Tarifs", icon: <BiDollarCircle />, url: '/admin/tarifs' },
        { id: 8, title: "Agences", icon: <FaRegBuilding />, url: '/admin/agences' },
        { id: 9, title: "Blogs", icon: <FaBloggerB />, url: '/admin/blogs' },
        { id: 9, title: "Commentaires", icon: <BiCommentDetail />, url: '/admin/commentaires' },
        { id: 10, title: "Terms et conditions", icon: <MdOutlinePolicy />, url: '/admin/terms' },
    ]);


    const navigate = useNavigate();

    const goTo = (route) => {
        navigate(route);

        // Close sidebar when click a menu
        if (isMobile) toggleSidebarOpen(false);

        // Open sidebar when click a menu
        // if (isBrowser && !sidebarOpen) toggleSidebarOpen(true);
    }

    const year = new Date().getFullYear();

    return (
        <>
            <aside id='sidebar' className={`flex flex-col lg:sticky top-0 z-40 h-screen overflow-hidden bg-white shadow-sm duration-300 dark:bg-black ${sidebarOpen ? 'fixed top-0 left-0 w-[240px]' : 'sticky w-[70px]'}`}>
                <div className='flex flex-col h-screen'>
                    <a href="/market" className='flex bg-white sticky h-16 w-full top-0 py-3 px-2 z-30 shadow-sm duration-500 dark:bg-black'>
                        <img src={Box} alt='OzonExpress logo' className={`h-10 ${sidebarOpen && 'hidden'}`} />
                        <img src={OzonExpress} alt='OzonExpress logo' className={`h-12 ${!sidebarOpen && 'scale-0'}`} />
                    </a>

                    <ul className={`py-2.5 px-3 flex-grow overflow-y-auto ${sidebarOpen && 'w-full'}`}>
                        {menus.map((menu, index) => (
                            <div key={index}>
                                {!menu.submenu ? (
                                    <li className={`flex text-lg hover:text-ozon-red w-full p-2 cursor-pointer select-none duration-300 dark:text-white dark:hover:text-ozon-yellow ${sidebarOpen && 'gap-x-2'} ${menu.spacing && 'mt-5'}`} onClick={() => goTo(menu.url)}>
                                        <span className={`w-5 h-5 ${sidebarOpen && 'text-ozon-red float-left dark:text-ozon-yellow'}`}>
                                            {menu.icon}
                                        </span>
                                        <span className={`text-sm whitespace-nowrap flex-1 duration-300 ${!sidebarOpen && 'hidden'}`}>{menu.title}</span>
                                    </li >
                                ) : (
                                    <div className={`${menu.spacing && 'mt-5'}`}>
                                        <li className={`flex text-lg hover:text-ozon-red w-full p-2 cursor-pointer select-none duration-300 dark:text-white dark:hover:text-ozon-yellow ${sidebarOpen && 'gap-x-2'}`} onClick={() => { toggleSubmenuOpen(menu.id, menu.submenuOpen) }}>
                                            <span className={`w-5 h-5 ${sidebarOpen && 'text-ozon-red float-left dark:text-ozon-yellow'}`}>
                                                {menu.icon}
                                            </span>
                                            <div className={`flex flex-auto justify-between items-center text-sm ${!sidebarOpen && 'hidden'}`}>
                                                <span>{menu.title}</span>
                                                <span className={`duration-300 ${menu.submenuOpen && 'rotate-90'}`}>
                                                    <BsChevronRight />
                                                </span>
                                            </div>
                                        </li>

                                        {menu.submenu && menu.submenuOpen && sidebarOpen && (
                                            <ul className='ml-5'>
                                                {menu.submenuItems.map((submenuItem, index) => (
                                                    <li className={`flex items-center text-xs hover:text-ozon-red w-full p-2 cursor-pointer select-none duration-300 dark:text-white dark:hover:text-ozon-yellow ${sidebarOpen ? 'gap-x-2' : 'max-w-min'}`} onClick={() => goTo(menu.url)} key={index}>
                                                        <span className={`${sidebarOpen && 'float-left'}`}>
                                                            <TiChevronRightOutline />
                                                        </span>
                                                        <span className={`whitespace-nowrap flex-1 duration-400 ${!sidebarOpen && 'hidden'}`}>{submenuItem.title}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}

                        <div className={`flex-1 mt-5 py-3 text-end dark:text-white ${!sidebarOpen && 'hidden'}`}>
                            <p className="text-xs text-center px-5">© {year} OzonExpress. All rights reserved</p>
                        </div>
                    </ul>
                </div>
            </aside>
            <div onClick={() => toggleSidebarOpen()} className={`opacity-25 fixed inset-0 z-20 bg-black lg:hidden ${sidebarOpen ? '' : 'hidden'}`}></div>
        </>
    )
}

export default Sidebar