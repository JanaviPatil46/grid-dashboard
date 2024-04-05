import React from 'react'
import { BrowserRouter ,Route,Routes } from 'react-router-dom';
import NoPage from '../src/pages/NoPage'
import Insights  from '../src/pages/Insights'
import Home from '../src/pages/Home'
// import Layout from './components/Layout';
import Sidebar from './components/Sidebar'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Sidebar />}>
        <Route index element={<Home />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/email" element={<Insights />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>

  )
}

export default App



// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import AdminLogin from './Login&Signup/AdminLogin';
// import ForgotPassword from './Login&Signup/ForgotPassword';
// import Signup from './Login&Signup/Signup';

// const App = () => {
//   return (
//     <BrowserRouter>
      
//       <Routes>
//         <Route exact path="/" element={<AdminLogin />} />
//         <Route path='/signup' element={<Signup />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;