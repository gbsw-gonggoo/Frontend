import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

const SignIn = () => {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token")) 

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(nickname);
    console.log(password);

    let body = {
      nickname: nickname,
      password: password,
    };

    axios.defaults.withCredentials = true;

    axios
      .post("/api/auth/login", body, { withCredentials: true})
      .then((res) => {
        if (res.data.success) {
          localStorage.setItem("token", true);
          window.location.href = "/";
          console.log(res);
        }
        else {
          // widow.location.href = "/";
          alert("로그인을 실패했습니다.")
        }
      });
  };

  if(token) {
    alert("이미 로그인이 된 상태입니다.")
    window.location.href = "/";
    return (
      <div className="bg-slate-50 w-full h-full fixed top-0 flex justify-center items-center">
        <div class="loadingio-spinner-rolling-nujnwn5po0q">
          <div class="ldio-6wvhm66o7gx"><div /></div>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="flex h-full fixed w-full top-0 justify-center bg-slate-50">
        <div className="min-h-full flex items-center w-full py-12 px-4 sm:px-6 lg:px-8 lg:w-4/12">
          <div className="w-full space-y-8 border p-12 lg:p-20 rounded-lg drop-shadow-2xl bg-white">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">로그인</h2>
              <p className="mt-2 text-center text-sm font-normal text-slate-400">
                로그인을 하신 후 이용 가능합니다.
              </p>
            </div>
            <form onSubmit={submitHandler} className="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div className="mb-1">
                  <label htmlFor="id" className="sr-only">
                  아이디
                  </label>
                  <input
                    id="id"
                    name="id"
                    type="text"
                    autoComplete="username"
                    required
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="아이디"
                  />
                </div>
                <div className="rounded-md">
                  <label htmlFor="password" className="sr-only">
                  비밀번호
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="비밀번호"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  로그인
                </button>
              </div>
  
              <div className="text-center">
                <div className="text-sm mb-1">
                  <Link to='/findid' className="font-normal text-slate-400 hover:text-slate-600">
                    아이디를 잊으셨나요?
                  </Link>
                </div>
                <div className="text-sm mb-1">
                  <Link to='/findpw' className="font-normal text-slate-400 hover:text-slate-600">
                    비밀번호를 잊으셨나요?
                  </Link>
                </div>
                <div className="text-sm">
                  <Link to='/signup' className="font-normal text-slate-400 hover:text-slate-600">
                    회원가입하기
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )

  }
}

export default SignIn;