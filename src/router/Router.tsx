import { Route, Routes } from "react-router-dom"
import { CardsPage, CollectionsPage, ProfilePage } from "../pages"
import { AuthPage } from "../pages/AuthPage"

export const Router = () => {
    return ( 
    <Routes>
        <Route path='/' element={<ProfilePage/>}/>
        <Route path='/collections' element={<CollectionsPage />}/>
        <Route path='/cards' element={<CardsPage />}/>
        <Route path='/auth' element={<AuthPage/>}/>
    </Routes> 
  )
}