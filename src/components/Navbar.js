import React, { useState } from 'react';
import { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { faHouse, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {img1} from '../../public/logo.icon';

const navigation = [
  { name: "home", icon: faHouse, to: '/', current: true },
  { name: "post", icon: faPlus, to: '/signin', current: true },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Disclosure as="nav" className="z-50 sticky top-0 w-full border-b bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className={"inline-flex items-center justify-center p-2 rounded-md focus:outline-none " + (isOpen ? "text-gray-800" : "text-gray-400")}>
                {isOpen ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            
            {/* <div className="flex items-center sm:items-stretch sm:justify-start "> */}
            <div className="flex items-center ">
              <Link to='/'>
                <img
                  className="block h-8 w-auto"
                  src={`${process.env.PUBLIC_URL}/logo.ico`}
                />
              </Link>
            </div>
            <div className="flex">
              <div className="hidden sm:block items-center pr-2">
                <div className="flex space-x-4">
                  <Link
                    to='/signin'
                    className={classNames(
                      false ? 'text-gray-700' : 'text-gray-400 hover:text-gray-700',
                      'px-3 py-2 text-md font-semibold'
                    )}
                    // aria-current={true ? 'page' : undefined}
                  >
                    {/* <FontAwesomeIcon icon={faPlus} size="lg" /> */}
                    POST
                  </Link>
                </div>
              </div>
              <div className="flex items-center pr-2 sm:static sm:inset-auto sm:pr-0">
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="overflow-hidden rounded-full flex items-center justify-center h-8 w-8 text-sm rounded-full focus:outline-none ">
                      <img
                        className=""
                        src={`${process.env.PUBLIC_URL}/user/무서운이야기1.jpg`}
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
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/mypage"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </div>
        <Disclosure.Panel className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
                to="/"
                className={classNames(
                  true ? 'text-gray-700' : 'text-gray-300 hover:bg-gray-300 hover:text-gray-700',
                  'block px-3 py-2 rounded-md text-base font-medium'
                )}
                aria-current={true? 'page' : undefined}
              >
                HOME
            </Link>
            <Link
                to="/signin"
                className={classNames(
                  true ? 'text-gray-700' : 'text-gray-300 hover:bg-gray-300 hover:text-gray-700',
                  'block px-3 py-2 rounded-md text-base font-medium'
                )}
                aria-current={true? 'page' : undefined}
              >
                POST
            </Link>
          </div>
        </Disclosure.Panel>
      </Disclosure>
    </>
  )
}

export default Navbar;