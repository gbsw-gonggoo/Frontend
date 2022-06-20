import React from 'react';
import { Link } from 'react-router-dom';
import Truncate from 'react-truncate';
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    name: '초코에몽, 180ml, 24개',
    image: {
      src: '/product/초코에몽.jpg',
    },
    price: '13,680',
    pricePerPiece: '570',
    applicants: '1',
    recruitment: '30',
    date: '2022-04-30',
  },
  {
    id: 3,
    name: "스키니피그 쿠키앤크림, 1개입, 474ml",
    image: {
      src: '/product/아이스크림.jpg',
    },
    price: '7,870',
    pricePerPiece: '7,870',
    applicants: '4',
    recruitment: '1',
    date: '2022-04-30',
  },
  {
    id: 4,
    name: "블락 바디트리머 네로 블랙, 1개입",
    image: {
      src: '/product/다리털숱제거기.jpg',
    },
    price: '8,900',
    pricePerPiece: '8,900',
    applicants: '4',
    recruitment: '1',
    date: '2022-04-30',
  },
  {
    id: 5,
    name: "롯데제과 비타C박스, 12개입, 65g",
    image: {
      src: '/product/비타C박스.jpg',
    },
    price: '17,400',
    pricePerPiece: '1,450',
    applicants: '4',
    recruitment: '12',
    date: '2022-04-30',
  },
  {
    id: 6,
    name: "토레타, 15개입, 500ml",
    image: {
      src: '/product/수분충전에는토레타.jpg',
    },
    price: '15,800',
    pricePerPiece: '1,053',
    applicants: '4',
    recruitment: '15',
    date: '2022-04-30',
  },
  {
    id: 7,
    name: "포카리스웨트, 20개입, 500ml",
    image: {
      src: '/product/토레타가없으면포카리스웨트.jpg',
    },
    price: '22,140',
    pricePerPiece: '1,107',
    applicants: '4',
    recruitment: '20',
    date: '2022-04-30',
  },
  {
    id: 8,
    name: "우리둘 커플문답 오리지널, 2개입",
    image: {
      src: '/product/커플문답.jpg',
    },
    price: '11,150',
    pricePerPiece: '5,575',
    applicants: '2',
    recruitment: '2',
    date: '2022-04-30',
  },
  {
    id: 9,
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
    id: 10,
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
    id: 11,
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
  // More products...
]

const ProductList = () => {
  const toTop = () => {
    window.scrollTo({top:0, behavior:'smooth'});
  }
  return (
    <div className="bg-slate-50 overflow-y-auto max-h-screen pb-20">
      <div className="max-w-2xl mx-auto px-4 pb-10 pt-8 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="lg:text-[1.35rem] text-xl font-semibold tracking-tight text-gray-500">공동구매 리스트</h2>

        <div className="mt-6 grid gap-y-10 gap-x-6 grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} >
              <div className="group relative border rounded-md bg-white">
                <div className="m hover-group w-full p-3 border-b rounded-t-md overflow-hidden h-48 lg:h-80 lg:aspect-none">
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
                    <p className="text-sm text-gray-500 lg:float-left lg:mr-1">{product.price}원</p>
                    <p className="text-sm text-gray-500">(개당 {product.pricePerPiece}원)</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          <div className="fixed bottom-5 right-5 w-10 h-10 rounded-full bg-white z-50 border">
            <button className="flex justify-center items-center text-gray-500 w-full h-full font-bold p-2 rounded-full" onClick={() => toTop()}>
              <FontAwesomeIcon icon={faArrowUp} className="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductList;