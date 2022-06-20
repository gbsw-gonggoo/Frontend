import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [required, setRequired] = useState(true);
  const navigation = useNavigate();
  function goBack ()  {
    navigation(-1);
    setRequired(true);
  }
  return (
    <div className="flex h-full fixed w-full top-0 justify-center bg-slate-50">
      <div className="min-h-full flex w-full items-center py-12 px-4 sm:px-6 lg:px-8 lg:w-4/12">
        <div className="w-full space-y-8 border p-12 lg:p-20 rounded-lg drop-shadow-2xl bg-white">
          <div>
            <h2 className="mt-6  text-center text-3xl font-extrabold text-gray-900">회원가입</h2>
            <p className="mt-2 text-center text-sm font-normal text-slate-400">

            </p>
          </div>
          <form className="space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm">
              <div className="mb-1">
                <label htmlFor="id" className="sr-only">
                  아이디
                </label>
                <input
                  id="id"
                  name="id"
                  type="text"
                  autoComplete="userid"
                  required={required}
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="아이디"
                />
              </div>
              <div className="mb-1">
                <label htmlFor="password" className="sr-only">
                  비밀번호
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required={required}
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="비밀번호"
                />
              </div>
              <div className="mb-1">
                <label htmlFor="passwordConfirm" className="sr-only">
                  비밀번호 확인
                </label>
                <input
                  id="passwordConfirm"
                  name="passwordConfirm"
                  type="password"
                  autoComplete="current-passwordConfirm"
                  required={required}
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="비밀번호 확인"
                />
              </div>
              <div className="mb-1 ">
                <label htmlFor="name" className="sr-only">
                  이름
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="current-name"
                  required={required}
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="이름"
                />
              </div>
              <div className="mb-1 ">
                <label htmlFor="email" className="sr-only">
                  이메일
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="current-email"
                  required={required}
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="이메일"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="my-2 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                회원가입
              </button>
              <button
                onClick={() => goBack()}
                className="my-2 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                뒤로가기
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp;