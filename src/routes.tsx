import { BrowserRouter, Routes, Route } from 'react-router-dom'

import InfoRepos from './Pages/InfoRepos'
import Search from './Pages/Search'
import Profile from './Pages/Profile'

export default function RoutesPages() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Search />} />
                <Route path="/inforepos" element={<InfoRepos />} />
                <Route path="profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}