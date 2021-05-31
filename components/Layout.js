import Navbar from "./Navbar"

const Layout = ({ children }) => {
  // Creacion del Layout para que muestra en todas la páginas información persistente
  return(
    <>
      <Navbar/>
      
      { children }
    </>
  )
}

export default Layout;