'use client'
import ActiveLink from "@/components/ActiveLink/ActiveLink";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import './style.css'

const layout = ({ children }) => {
  const [open, setOpen] = useState(false)



  const dashboardRouting = [
    { path: '/dashboard', name: 'Overview', },
    { path: '/dashboard/add-product', name: 'Add Project', },
    { path: '/dashboard/manage-products', name: 'Manage Projects', },
  ]
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-2  pt-[95px] sm:pt-[50px] ">

        {/* this content just small dives  */}

        <div className="fixed text-3xl ease-in-out duration- z-[99] " id="dashboard_menu_icon">


          {
            open ? <IoClose
              className="sm:hidden" onClick={() => setOpen(false)} />
              :
              <IoMdMenu className="sm:hidden" onClick={() => setOpen(true)} />
          }
        </div>
        {/* end  */}
        <div className='flex gap-0 relative'>
          {
            open && <div className=''>
              <aside className='absolute sm:hidden w-[70%] bg-[#122033] h-[100vh]  py-5 ease-in-out duration-700 top-[-10%] left-[0%]'>
                <ul className=" py-32">
                  {dashboardRouting.map(({ path, name }) =>
                    <li key={path} className="px-3 py-1">
                      <ActiveLink exact={path === '/dashboard'} ActiveClassName='text-blue-600' href={path}>{name}</ActiveLink>
                    </li>
                  )}
                </ul>
              </aside>
            </div>
          }
          <aside className="hidden sm:block sm:w-[30%] bg-[#122033] h-[100vh]  py-5 ease-in-out duration-700 rounded shadow-2xl">
            <ul>
              {dashboardRouting.map(({ path, name }) =>
                <li key={path} className="px-3 py-1">
                  <ActiveLink exact={path === '/dashboard'} ActiveClassName='text-blue-600' href={path}>{name}</ActiveLink>
                </li>
              )}
            </ul>
          </aside>
          <div className="w-[100%] bg-[#0f1b2b] p-5 h-[100vh] mt-[-8%] sm:mt-0 rounded shadow-2xl " id="dashboard_content">
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default layout;