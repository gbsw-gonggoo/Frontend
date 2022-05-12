import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const product = {
  name: '칠성사이다',
  count: '30',
  quantity: '210ml',
  price: '15,720',
  pricePerPiece: '524',
  image: {
    // src: '/칠성사이다.png',
    src:'/cat.jpg',
  },
  description:
    '사이다 공구할사람 ㅜㅜ',
  applicants:
    '4',
  recruitment:
    '30',
  date:
    '2022-04-30',
  href:
    'https://www.coupang.com/vp/products/319152577?itemId=230425388&vendorItemId=3590493048&pickType=COU_PICK&q=%EC%B9%A0%EC%84%B1%EC%82%AC%EC%9D%B4%EB%8B%A4&itemsCount=36&searchId=89b7e2093afa4ba69ca45c2a14b8b0b5&rank=1',
}
const user = {
  value: 
    '1',
}

const ProductOverview = () => {
  const [value, setValue] = useState(user.value)
  const onChange = e => {
    setValue(e.target.value);
    user.value = value;
  }
  return (
    <div className="bg-white pt-20 lg:pt-24">
      <nav aria-label="Breadcrumb">
        <ol role="list" className="max-w-2xl mx-auto px-4 flex items-center space-x-2 lg:max-w-7xl lg:px-16">
          <li>
            <div className="flex items-center">
              <Link to="/signin" className="mr-2 text-sm font-medium text-gray-900">
                공동구매
              </Link>
              <svg
                width={16}
                height={20}
                viewBox="0 0 16 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-4 h-5 text-gray-300"
              >
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
          <li className="text-sm">
            <p className="font-medium text-gray-500 hover:text-gray-600">
              {product.name}
            </p>
          </li>
        </ol>
      </nav>
      <div className="mt-1 pt-2 max-w-2xl mx-auto sm:px-6 lg:mt-20 lg:max-w-[68rem] lg:p-8 lg:grid lg:grid-cols-5 lg:gap-x-8 lg:border rounded-md">
        {/* Image gallery */}
          <div className="lg:col-span-3 aspect-w-3 aspect-h-4 lg:rounded-md lg:p-6 p-4 border-y lg:border overflow-hidden h-96 lg:h-[34rem]">
            <img
              src={process.env.PUBLIC_URL + product.image.src}
              alt={product.name}
              className="w-full h-full object-center object-cover lg:rounded-sm"
            />
          </div>

        {/* Product info */}
        <div className="auto-cols-max max-w-2xl mx-auto px-4 py-4 sm:px-6 lg:max-w-7xl lg:py-6 lg:px-8 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:col-span-2 w-full h-[34rem]">
          <div className="pl-1 lg:pr-8">
            <h1 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">{product.name + ", " + product.count + "개입, " + product.quantity}</h1>
          </div>

          {/* Options */}
          <div className="lg:row-span-3 my-3 lg:my-8">
            <div>
              <div className="align-text-bottom text-xl">
                <span className="px-2 mb-3 text-gray-900 m-0">{product.price}원</span>
                <span className="lg:pl-2">({product.pricePerPiece}원)</span> 
              </div>
              
              <div className="pl-4 lg:py-8 py-5 lg:pt-8 lg:pb-20 lg:col-start-1 lg:col-span-2 lg:pr-8">
                <h3 className="space-y-6 text-base text-gray-900">{product.description}</h3>
                <div className="my-4 lg:my-10">
                  <h3 className="text-sm font-medium text-gray-900">안내사항</h3>
                  <div className="mt-4 pl-4 list-disc text-sm space-y-2">
                    <ul>{product.applicants} / {product.recruitment} 개</ul>
                    <ul>{product.date} 까지</ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">상세링크</h3>
                  <div className="mt-4 pl-4 space-y-6 text-sm text-gray-600 hover:text-indigo-600">
                    <a href={product.href}>자세히보기</a>
                  </div>
                </div>
              </div>
              <form className="algin-bottom">
                <div className="lg:py-2 py-6 ml-3 float-left">
                  <input className="border p-1 mr-2 w-20 rounded" min="1" type="number" value={value} onChange={onChange} />개
                </div>
                <button
                  type="submit"
                  className="w-full lg:w-48 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center 
                             text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 float-right mb-6 lg:m-0">
                  신청하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default ProductOverview;