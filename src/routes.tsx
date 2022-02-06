import { BrowserRouter, Routes, Route } from 'react-router-dom'

import InfoRepos from './Pages/InfoRepos'
import Search from './Pages/Search'
import Profile from './Pages/Profile'
import Followers from './Pages/Followers'
import Following from './Pages/Following'
import InfoRepo from './Pages/InfoRepos'

export default function RoutesPages() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Search />} />
                <Route path="inforepos" element={<InfoRepos />} />
                <Route path="profile/:login" element={<Profile />} />
                <Route path="profile/:login/followers" element={<Followers />} />
                <Route path="profile/:login/following" element={<Following />} />
                <Route path="profile/:login/:repo" element={<InfoRepo />} />
            </Routes>
        </BrowserRouter>
    )
}