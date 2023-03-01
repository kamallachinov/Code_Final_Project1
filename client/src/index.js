import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "animate.css/animate.min.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Pages/Main/Main';
import AboutPage from './Pages/AboutPage/AboutPage';
import RoomsSuits from './Pages/Rooms & Suits/RoomsSuits';
import Restaurant from './Pages/Restaurant/Restaurant';
import SpaPage from './Pages/SpaPage/SpaPage';
import ContactUs from './Pages/ContactUs/ContactUs';
import PagesServices from './Pages/PagesServices/PagesServices';
import PagesHotelFacilities from './Pages/PagesHotelFacilities/PagesHotelFacilities';
import PagesTeam from './Pages/PagesTeam/PagesTeam';
import PagesPricing from './Pages/PagesPricing/PagesPricing';
import PagesCareers from './Pages/PagesCareers/PagesCareers';
import PagesFaqs from './Pages/PagesFaqs/PagesFaqs';
import Pages404 from './Pages/Pages404/Pages404';
import News1 from './Pages/News1/News1';
import RoomsSuits2 from './Pages/Rooms&Suits2/RoomsSuits2';
import RoomDetails from './Pages/RoomDetails/RoomDetails';
import NewsSinglePost from './Pages/NewsSinglePost/NewsSinglePost';
import LogIn from './Pages/LogIn/LogIn';
import SignUp from './Pages/SignUp/SignUp';
import SearchResult from './Pages/searchResult/SearchResult'
import BookingPage from './Pages/BookingPage/BookingPage';
import { AuthContextProvider } from "./Context/AuthContext";
import Profile from './Pages/ProfilePage/Profile';
import AdminPanel from './AdminPanel/adminPanel';
import Charts from './AdminPanel/Charts/Charts';
import Users from './AdminPanel/Users/Users'
import UserDetails from './AdminPanel/UserDetails/UserDetails';
import AdminPanelRooms from './AdminPanel/AdminPanelRooms/AdminPanelRooms'
import AdminPanelRoomDetails from './AdminPanel/AdminPanelRoomDetails/AdminPanelRoomDetails';
import AdminPanelRoomEdit from './AdminPanel/AdminPanelRoomEdit/AdminPanelRoomEdit';
import Calendar from './AdminPanel/Calendar/Calendar';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/aboutPage",
        element: <AboutPage />,
      },
      {
        path: "/rooms",
        element: <RoomsSuits />,
      },
      {
        path: "/restaurant",
        element: <Restaurant />,
      },
      {
        path: "/spa",
        element: <SpaPage />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/services",
        element: <PagesServices />,
      },
      {
        path: "/HotelFacilities",
        element: <PagesHotelFacilities />,
      },
      {
        path: "/PagesTeam",
        element: <PagesTeam />,
      },
      {
        path: "/PagesPricing",
        element: <PagesPricing />,
      },
      {
        path: "/PagesCareers",
        element: <PagesCareers />,
      },
      {
        path: "/PagesFaqs",
        element: <PagesFaqs />,
      },
      {
        path: "/news1",
        element: <News1 />,
      },
      {
        path: "/rooms2",
        element: <RoomsSuits2 />,
      },
      {
        path: "/roomDetails/:supId",
        element: <RoomDetails />,
      },
      {
        path: "/newsSinglePost",
        element: <NewsSinglePost />,
      },
      {
        path: "/searchResult",
        element: <SearchResult />,
      },
      {
        path: "/roomDetails/booking/:supId",
        element: <BookingPage />,
      },
      {
        path: "/profile/:userId",
        element: <Profile />,
      }
    ]

  }, {
    path: "/Pages404",
    element: <Pages404 />,
  },
  {
    path: "/logIn",
    element: <LogIn />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/adminPanel",
    element: <AdminPanel />,
    children: [
      {
        path: "/adminPanel",
        element: <Charts />,
      },
      {
        path: "/adminPanel/userList",
        element: <Users />,
      },
      {
        path: "/adminPanel/userList/:userId",
        element: <UserDetails />,
      },
      {
        path: "/adminPanel/roomList",
        element: <AdminPanelRooms />,
      },
      {
        path: "/adminPanel/roomList/:roomId",
        element: <AdminPanelRoomDetails />,
      },
      {
        path: "/adminPanel/roomEdit/:roomId",
        element: <AdminPanelRoomEdit />,
      },
      {
        path: "/adminPanel/calendar",
        element: <Calendar />,
      },

    ]
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <RouterProvider router={router} />
  </AuthContextProvider>

);
