
import { faHome, faUsers, faCog, faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons';

export const menuItems = [
  {
    title: 'Home',
    icon: faHome,
    path: '/',
    submenus: []
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
      }
    ]
  },
  {
    title: 'Settings',
    icon: faCog,
    path: '/settings',
    submenus: []
  },
  {
    title: 'Notifications',
    icon: faBell,
    path: '/notifications',
    submenus: []
  },
];
