import { Route, Routes } from 'react-router-dom'

import GalaxyBackground from "../components/GalaxyBackground";

import Home from '../containers/Home'
import Poesias from '../containers/Poesias'
import Livros from '../containers/Livros'
import Desenhos from '../containers/Desenhos'
import Games from '../containers/Games'
import Creditos from '../containers/Creditos'

import DefaultLayout from '../layout/DefaultLayout'

function Router() {
  return (
    <>
    <GalaxyBackground />
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/poesias" element={<Poesias />} />
        <Route path="/livros" element={<Livros />} />
        <Route path="/desenhos" element={<Desenhos />} />
        <Route path="/games" element={<Games />} />
        <Route path="/creditos" element={<Creditos />} />
      </Route>
    </Routes>
    </>
  )
}

export default Router
