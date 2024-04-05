import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home';
import User from '../pages/User';
import Setting from '../pages/Settings';
import Notification from '../pages/Notification';
import Insights from "../pages/Insights"
// import Accounts from '../pages/Accounts';
const Routing = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<User />} />
                <Route path="/settings" element={<Setting />} />
                <Route path="/notifications" element={<Notification />} />
                <Route path='/insights' element={<Insights />} />
                {/* <Route path='/accounts' element={<Accounts />} /> */}
            </Routes>
        </>
    )
}

export default Routing



{/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/tags" element={<Tagcreate />} />
          <Route path="/accounts" element={<AccountsData />} />
          <Route path="/contacts" element={<ContactTable />} />
          <Route path="/createFoldertemplate" element={<CreateFolderTemplate />} />
          <Route path="/pipeline" element={<Pipeline />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="login1" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter> */}