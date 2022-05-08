import React from 'react'
import { Outlet } from 'react-router-dom'
type Props = {}

const Homepage = (props: Props) => {
  return (
    <div>
    <header></header>
    <main>
        <Outlet />
    </main>
</div>
  )
}

export default Homepage