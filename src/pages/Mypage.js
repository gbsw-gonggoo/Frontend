import React, { useState } from "react";
import { Link } from "react-router-dom";
import Truncate from 'react-truncate';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const products = [
  {
    id: 1,
    name: "칠성사이다, 30개입, 210ml",
    image: {
      src: '/product/칠성사이다.png',
    },
    price: '15,720',
    pricePerPiece: '524',
    applicants: '4',
    recruitment: '30',
    date: '2022-04-30',
  },
  {
    id: 2,
    name: "칠성사이다, 30개입, 210ml",
    image: {
      src: '/product/칠성사이다.png',
    },
    price: '15,720',
    pricePerPiece: '524',
    applicants: '4',
    recruitment: '30',
    date: '2022-04-30',
  },
  {
    id: 3,
    name: "칠성사이다, 30개입, 210ml",
    image: {
      src: '/product/칠성사이다.png',
    },
    price: '15,720',
    pricePerPiece: '524',
    applicants: '4',
    recruitment: '30',
    date: '2022-04-30',
  },
  {
    id: 4,
    name: "칠성사이다, 30개입, 210ml",
    image: {
      src: '/product/칠성사이다.png',
    },
    price: '15,720',
    pricePerPiece: '524',
    applicants: '4',
    recruitment: '30',
    date: '2022-04-30',
  },
  {
    id: 5,
    name: "칠성사이다, 30개입, 210ml",
    image: {
      src: '/product/칠성사이다.png',
    },
    price: '15,720',
    pricePerPiece: '524',
    applicants: '4',
    recruitment: '30',
    date: '2022-04-30',
  },
  {
    id: 6,
    name: "칠성사이다, 30개입, 210ml",
    image: {
      src: '/product/칠성사이다.png',
    },
    price: '15,720',
    pricePerPiece: '524',
    applicants: '4',
    recruitment: '30',
    date: '2022-04-30',
  },
]

const products1 = [
  {
    id: 1,
    name: "칠성사이다, 30개입, 210ml",
    image: {
      src: '/product/칠성사이다.png',
    },
    price: '15,720',
    pricePerPiece: '524',
    applicants: '4',
    recruitment: '30',
    date: '2022-04-30',
  },
  {
    id: 2,
    name: "칠성사이다, 30개입, 210ml",
    image: {
      src: '/product/칠성사이다.png',
    },
    price: '15,720',
    pricePerPiece: '524',
    applicants: '4',
    recruitment: '30',
    date: '2022-04-30',
  },
  {
    id: 3,
    name: "칠성사이다, 30개입, 210ml",
    image: {
      src: '/product/칠성사이다.png',
    },
    price: '15,720',
    pricePerPiece: '524',
    applicants: '4',
    recruitment: '30',
    date: '2022-04-30',
  },
  {
    id: 4,
    name: "칠성사이다, 30개입, 210ml",
    image: {
      src: '/product/칠성사이다.png',
    },
    price: '15,720',
    pricePerPiece: '524',
    applicants: '4',
    recruitment: '30',
    date: '2022-04-30',
  },
  {
    id: 5,
    name: "칠성사이다, 30개입, 210ml",
    image: {
      src: '/product/칠성사이다.png',
    },
    price: '15,720',
    pricePerPiece: '524',
    applicants: '4',
    recruitment: '30',
    date: '2022-04-30',
  },
  {
    id: 6,
    name: "칠성사이다, 30개입, 210ml",
    image: {
      src: '/product/칠성사이다.png',
    },
    price: '15,720',
    pricePerPiece: '524',
    applicants: '4',
    recruitment: '30',
    date: '2022-04-30',
  },
]

const user = {
  name: '김동혁',
  class: '2103',
  nickname: 'hot-dong',
  email: 'kdh10222555@gmail.com'
}


function MyPage() {
  const [fixClick, setFixClick] = useState(false);
  const [email, setEmail] = useState(user.email);
  const [nickname, setNickname] = useState(user.nickname);

  return (
    <div className="w-full h-full lg:fixed bg-slate-50">
      <div className="w-full h-full mx-auto flex flex-col items-center lg:max-w-7xl lg:px-16 lg:relative lg:overflow-y-hidden">
        <div className="mt-5 lg:mt-0 lg:absolute lg:top-10 w-full h-60 rounded-2xl">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={`${process.env.PUBLIC_URL}/user/무서운이야기1.jpg`}/>
        </div>
        <div className="absolute top-20 w-full lg:h-full mt-20 lg:mt-0 lg:top-40 lg:w-11/12 lg:overflow-hidden drop-shadow-2xl bg-white border lg:rounded-lg sm:rounded-lg z-30">
          <div className="flex items-center">
            <img
              src={`${process.env.PUBLIC_URL}/user/cat.jpg`}
              alt=""
              className="lg:w-20 lg:h-20 sm:w-18 sm:h-18 w-14 h-14 rounded-full ml-7 mt-7" />
            <div className="mt-9 ml-5">
              <div className="font-extrabold text-lg">김동혁</div>
            </div>
          </div>
          <div className="flex lg:mt-8 sm:mt-10 mt-5 lg:max-h-60 justify-between flex-col lg:flex-row lg:px-8 sm:px-8 px-4 w-auto">
            <div className="justify-between w-1/2">
              <div className="flex w-full lg:flex-row mb-3 justify-between mr-10 lg:mr-0">
                <div>
                  <div className="font-semibold">프로필</div>
                </div>
                <button onClick={() => {setFixClick(!fixClick); setEmail(email)}} className="text-slate-500 text-sm lg: mr-20">
                  <FontAwesomeIcon icon={faPen} className="" />
                </button>
              </div>
              <div className={"w-full " + (fixClick ? "hidden" : "block")}>
                <div className="font-semibold my-3 text-gray-500">이름 : <span className="font-medium text-black">{user.name}</span></div>
                <div className="font-semibold my-3 text-gray-500">학번 : <span className="font-normal text-black">{user.class}</span></div>
                <div className="font-semibold my-3 text-gray-500">닉네임 : <span className="font-normal text-black">{nickname}</span></div>
                <div className="font-semibold my-3 text-gray-500">이메일 : <span className="font-normal text-black" id="email">{email}</span></div>
              </div>
              <div className={"w-full " + (!fixClick ? "hidden" : "block")}>
                <div className="font-semibold my-3 text-gray-500">이름 : <input type="email" value={user.name} disabled /></div>
                <div className="font-semibold my-3 text-gray-500">학번 : <input type="email" value={user.class} disabled /></div>
                <div className="font-semibold my-3 text-gray-500">닉네임 : <input type="email" placeholder="닉네임을 입력하세요" onChange={(e) => setNickname(e.value)} /></div>
                <div className="font-semibold my-3 text-gray-500">이메일 : <input type="email" placeholder="이메일을 입력하세요" onChange={(e) => setEmail(e.value)} /></div>
              </div>
            </div>
            <div className="w-12/12 lg:w-6/12">
              <div className="font-semibold mb-2 mt-10 lg:mt-0">신청된 상품 목록</div>
              <div className="lg:h-52 lg:pr-10 lg:overflow-auto">
                {products.map(product => (
                  <div className="flex justify-between my-5 lg:my-4 items-center" key={product.id}>
                    <div className="flex items-center">
                      <img
                        src={process.env.PUBLIC_URL + product.image.src}
                        alt={product.name}
                        className="w-14 h-14 rounded-full mr-4" />
                      <div>
                        <div className="font-semibold">{ product.name }</div>
                        <div className="text-slate-500 text-sm">{product.price}원(개당 {product.pricePerPiece}원)</div>
                      </div>
                    </div>
                    <div className="font-semibold text-sm text-sky-500">
                      <a href="#">100개</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:px-8 sm:px-8 px-4 lg:mt-5">
            <div className="w-full">
              <div className="font-semibold mb-2 mt-10 lg:mt-0">내가 올린 게시물</div>
              <div className="flex flex-col lg:flex-row justify-between">
                <div className="hidden my-2 py-2 lg:flex overflow-auto">
                  {products1.map((product) => (
                    <Link to={`/product/${product.id}`} key={product.id} >
                      <div className="group w-60 border rounded-md bg-white mx-2">
                        <div className="m hover-group p-3 border-b rounded-t-md overflow-hidden h-52 aspect-none">
                          <div className="hover-text list-disc font-semibold text-base text-gray-700">
                              <ul>{product.applicants} / {product.recruitment} <span className="font-semibold text-[0.9rem]">개</span></ul>
                              <ul>{product.date} <span className="font-semibold text-[0.9rem]">까지</span></ul>
                          </div>
                          <img
                            src={process.env.PUBLIC_URL + product.image.src}
                            alt={product.name}
                            className="hover-img w-full h-full object-center object-cover rounded-sm img-text-hover"
                          />
                        </div>
                        <div className="m lg:m-2 p-3">
                          <div>
                            <Truncate lines={1} ellipsis={"..."} className="text-sm font-semibold text-gray-800">
                              {product.name}
                            </Truncate>
                          </div>
                          <div className="lg:mt-1 lg:flex lg:font-medium">
                            <p className="text-sm text-gray-500 lg:float-left lg:mr-1">{product.price}<span className="lg:font-semibold lg:text-[0.8rem]">원</span></p>
                            <p className="text-sm text-gray-500">(<span className="lg:font-semibold lg:text-[0.8rem]">개당</span> {product.pricePerPiece}<span className="lg:font-semibold lg:text-[0.8rem]">원</span>)</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="block lg:hidden">
                  {products1.map(product => (
                    <div className="flex items-center my-5" key={product.id}>
                      <img
                        src={process.env.PUBLIC_URL + product.image.src}
                        alt={product.name}
                        className="w-14 h-14 rounded-full mr-4" />
                      <div>
                        <div className="font-semibold">{ product.name }</div>
                        <div className="text-slate-500 text-sm">{product.price}원(개당 {product.pricePerPiece}원)</div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* <div className="flex items-center my-5">
                  <img
                    src={`${process.env.PUBLIC_URL}/cat.jpg`}
                    alt=""
                    className="w-14 h-14 rounded-full mr-4" />
                  <div>
                    <div className="font-semibold">근본없는 닥터페퍼, 10개입, 900ml</div>
                    <div className="text-slate-500 text-sm">20,000원(개당 2,000원)</div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyPage;