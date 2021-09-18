import React from "react";
import {Link} from 'gatsby'
import {IdentityContextProvider} from 'react-netlify-identity-widget'


import './layout.css'

const Layout = ({children}) => {
  return (
    <IdentityContextProvider url="https://jam-auth-v1.netlify.app">
      <header>
        <Link to="/">Jamstack app</Link>
      </header>
      <main>{children}</main>
    </IdentityContextProvider>
  )
}

export default Layout