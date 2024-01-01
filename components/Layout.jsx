import React from "react"
import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"

export default function Layout() {
    return (
        <main className="flex flex-column">
            <Sidebar />
            <Outlet />
        </main>
    )
}