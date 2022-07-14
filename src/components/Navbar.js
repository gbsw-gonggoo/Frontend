import React, { useState, useEffect } from 'react';
import { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import axios from "axios";


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState({})
  const [profileImg, setProfileImg] = useState(`${process.env.PUBLIC_URL}/users/defaultProfileImg.png`)
  const [token, setToken] = useState(localStorage.getItem("token"));
  
  const Logout = async () => {
    axios.get("/api/auth/logout", { withCredentials: true })
      .then((res) => {
        console.log(res)
        localStorage.removeItem("token");
        window.location.href = "/";
      })
  }

  useEffect(() => {
    checkLogin()
  }, [])

  useEffect(() => {
    if(user.profileImg) setProfileImg(user.profileImg)
  }, [user])

  const checkLogin = async () => {
    let result = await axios.get("/api/user", { withCredentials: true })
    if(!result.data.user) localStorage.removeItem('token')
    if (result.data.success) {
      setUser(result.data.user)
      console.log(result.data.user)
    } else {
      setUser({name: '', img: ''})
    }
  }


  
  return (
    <>
      <Disclosure as="nav" className="z-50 sticky top-0 w-full border-b bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="sticky flex items-center justify-between h-16">
            <div className="inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              {token?(
              <Disclosure.Button className={"inline-flex items-center justify-center p-2 rounded-md focus:outline-none " + (isOpen ? "text-gray-800" : "text-gray-400")}>
                {isOpen ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
              ):''}
            </div>
            
            <div className={"flex items-center sm:w-auto lg:w-auto w-full "+(token?"justify-center":"justify-start ml-7")}>
              <Link to='/'>
                <img
                  className="block h-8 w-auto"
                  src={`${process.env.PUBLIC_URL}/logo.ico`}
                  alt="logo"
                />
              </Link>
            </div>
            <div className="flex">
              <div className="hidden sm:block items-center pr-2">
                <div className="flex space-x-4">
                {token?(
                  <Link
                    to='/post'
                    className={classNames(
                      'text-gray-400 hover:text-gray-700',
                      'px-3 py-2 text-md font-semibold'
                    )}>
                    올리기
                  </Link>)
                  :''}
                </div>
              </div>
              <div className="flex items-center sm:static sm:inset-auto sm:pr-0">
                {token?(
                  <Menu as="div" className="ml-3 relative pr-2 ">
                    <div>
                      <Menu.Button className="overflow-hidden flex items-center justify-center h-8 w-8 text-sm rounded-full focus:outline-none">
                        <img
                          className="w-full h-full overflow-hidden"
                          src={profileImg}
                          alt={user.name}
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="z-50 lg:overflow-auto origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/mypage"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              프로필
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <p
                              onClick={Logout}
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              로그아웃
                            </p>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ):(
                  <div className="w-[4.5rem]  mr-3">
                    <Link
                    to='/signin'
                    className={classNames(
                      'text-gray-400 hover:text-gray-700',
                      'px-3 py-2 text-md font-semibold'
                    )}>
                      로그인
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <Disclosure.Panel className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
                to="/"
                className={classNames(
                  'text-gray-700',
                  'block px-3 py-2 rounded-md text-base font-medium'
                )}
                aria-current={'page'}
              >
                홈
            </Link>
            <Link
                to="/post"
                className={classNames(
                  'text-gray-700',
                  'block px-3 py-2 rounded-md text-base font-medium'
                )}
                aria-current={'page'}
              >
                올리기
            </Link>
          </div>
        </Disclosure.Panel>
      </Disclosure>
    </>
  )
}

export default Navbar;