import { AiOutlineAppstoreAdd,AiOutlineHome } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";

import {  MdOutlineMiscellaneousServices, MdAccountBalance } from "react-icons/md";

import { TfiLayersAlt } from "react-icons/tfi";
import {  IoPeopleOutline} from "react-icons/io5";
import { ImInsertTemplate } from "react-icons/im";
import { FiHome } from "react-icons/fi";
import { FaUserTag} from "react-icons/fa";
import { IoIosContacts } from "react-icons/io";
import { FcParallelTasks } from "react-icons/fc";



export const menuItems = [
  {
    title: 'Home',
    icon: <AiOutlineHome />,
    path: '/',
  },
  {
    title: "Insights",
    path: "/insights",
    icon: <AiOutlineAppstoreAdd />,
  },

  {
    title: "Inbox +",
    path: "/inbox",
    icon: <MdOutlineMail />,
  },
  {
    title: "Clients", 
    icon: <IoPeopleOutline />,
    submenus: [
      {
        title: "Accounts",
        path: "/accounts",
        icon: <MdAccountBalance />,
        
      },
      {
        title: "Contacts",
        path: "/contacts",
        icon: <IoIosContacts />,
      },
    ],
  },
  {
    title: "Workflow", 
    icon: <TfiLayersAlt />,
    submenus: [
      {
        title: "Tasks",
        path: "/marketplace",
        icon: <FcParallelTasks />,
      },
      {
        title: "Jobs",
        path: "/firmtemplates",
        icon: <FiHome />,
      },
      {
        title: "Jobrecurrences",
        path: "/tags",
        icon: <FiHome />,
      },
      {
        title: "Pipelines",
        path: "/pipeline",
        icon: <FiHome />,
      },
     
    ],
  },
  
{
    title: "Templates", 
    icon: <ImInsertTemplate />,
    submenus: [
      
      {
        title: "Firm templates",
        path: "/submenu2",
        icon: <FiHome />,
      },
     
      {
        title: "Tags",
        path: "/tags",
        icon: <FaUserTag />,
      },
      {
        title: "Services",
        path: "/submenu2",
        icon: <MdOutlineMiscellaneousServices />,
      },
     
    ],
  },
  
];
