
import { faHome, faUsers, faCog, faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons';

export const menuItems = [
  {
    title: 'Home',
    icon: faHome,
    path: '/',
    
  },
  {
    title: 'Users',
    icon: faUsers,
    path: '/users',
    submenus: [
      {
        title: 'Profile',
        path: '/users/profile',
        icon: faUserCircle
      },
     
    ]
  },
  {
    title: 'Settings',
    icon: faCog,
    path: '/settings',
   
  },
  {
    title: 'Notifications ',
    icon: faBell,
    path: '/notifications',
    submenus: [
      {
        title: 'Profile',
        path: '/users/profile',
        icon: faUserCircle
      },
      {
        title: 'Settings',
        path: '/users/settings',
        icon: faCog
      },
    ]
  },
];
