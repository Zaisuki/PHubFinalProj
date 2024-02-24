import { Outlet } from 'react-router-dom';

import { useEffect, useState } from 'react';

import SideBar from '../components/admin/sidebar';
import Header from '../components/header';
const StudentLayout = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };
    const handleOpenSideBar = () => {
        setIsClicked(true);
    };

    const handleCloseSideBar = () => {
        setIsClicked(false);
    };
    return (
        <>
            <SideBar isClicked={isClicked} onClick={handleCloseSideBar} onHover={handleMouseOver} onUnhover={handleMouseOut} />
            <main className={`${isHovered ? !isSmallScreen && 'sidebar-main-open' : ''}`}>
                <Header onClick={handleOpenSideBar} />

                <Outlet />
            </main>
        </>
    );
};

export default StudentLayout;
