import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const FindPw = () => {
  const [required, setRequired] = useState(true);
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const navigation = useNavigate();
  function goBack ()  {
    navigation(-1);
    setRequired(true);
  }

  const emailAuth = (e) => {
    e.preventDefault();

    let body = {
      id : id,
      email : email,
    };

    axios.post("/api/email", body, { withCredentials : true })
      .then((res) => {console.log(res)}); 
  };

  return (
    <div className="flex h-full fixed w-full top-0 justify-center bg-slate-50">
      <div className="min-h-full flex items-center py-12 px-4 w-full sm:px-6 lg:px-8 lg:w-4/12">
        <div className="w-full space-y-8 border p-12 lg:p-20 rounded-lg drop-shadow-2xl bg-white">
          <div>
            <h2 className="mt-6  text-center text-3xl font-extrabold text-gray-900">비밀번호 찾기</h2>
            <p className="mt-2 text-center text-sm font-normal text-slate-400">

            </p>
          </div>
          <form className="space-y-6 " action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div>
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
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="아이디"
                />
              </div>
              <div className="mb-1 flex flex-row border-0">
                <label htmlFor="email" className="sr-only">
                  이메일
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="current-email"
                  required={required}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="이메일"
                />
                <button onClick={emailAuth} className="group relative w-3/12 mx-1 flex justify-center py-2 px-1 border border-transparent text-sm font-medium rounded-md text-indigo-600 border-indigo-600 hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  인증</button>
              </div>
              <div className="mb-1">
                <label htmlFor="id" className="sr-only">
                  인증번호입력
                </label>
                <input
                  id="code"
                  name="code"
                  type="text"
                  autoComplete="off"
                  required={required}
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="인증번호입력"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="my-2 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                비밀번호 찾기
              </button>
              <button
                onClick={() => goBack()}
                className="my-2 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-indigo-600 border-indigo-600 hover:border-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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

export default FindPw;