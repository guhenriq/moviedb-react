import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Filmes } from './pages/Filmes'

export function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/filmes" element={<Filmes />} />
        </Routes>
    )
}