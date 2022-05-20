import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const product = {
  name: '칠성사이다, 30개입, 210ml',
  // count: '30',
  // quantity: '210ml',
  price: '15,720',
  pricePerPiece: '524',
  image: {
    src: '/product/칠성사이다.png',
  },
  user: {
    name: '김성현',
    class: '2104',
  },
  description:
    '사이다 공구할사람 구함',
  count:
    '4',
  maxcount:
    '30',
  date:
    '2022-04-30',
  href:
    'https://www.coupang.com/vp/products/319152577?itemId=230425388&vendorItemId=3590493048&pickType=COU_PICK&q=%EC%B9%A0%EC%84%B1%EC%82%AC%EC%9D%B4%EB%8B%A4&itemsCount=36&searchId=89b7e2093afa4ba69ca45c2a14b8b0b5&rank=1',
  
}

const user = {
  name: '김성현',
  value: 
    2,
}

const applyuser = [
    {
      name: '김성현',
      count: 1,
    },
    {
      name: '김강현',
      count: 2,
    },
    {
      name: '김동혁',
      count: 1,
    },
    {
      name: '김성현',
      count: 1,
    },
    {
      name: '김강현',
      count: 2,
    },
    {
      name: '김동혁',
      count: 1,
    },
    {
      name: '김성현',
      count: 1,
    },
    {
      name: '김강현',
      count: 2,
    },
    {
      name: '김동혁',
      count: 1,
    },{
      name: '김성현',
      count: 1,
    },
    {
      name: '김강현',
      count: 2,
    },
    {
      name: '김동혁',
      count: 1,
    }
]

const ProductOverview = () => {
  const [value, setValue] = useState(user.value?user.value:1)
  const onChange = e => {
    setValue(e.target.value);
  }
  const onClick = e => {
    if(user.value) {
      alert('취소하시겠습니까?')
      user.value = ''
    } else {
      alert('신청하시겠습니까?');
      user.value = value;
    }
  }
  return (
    <div className="bg-white pt-4">
      <nav aria-label="Breadcrumb">
        <ol role="list" className="max-w-2xl mx-auto px-4 flex items-center space-x-2 lg:max-w-7xl lg:px-16">
          <li>
            <div className="flex items-center">
              <Link to="/" className="mr-2 text-sm font-medium text-gray-400 hover:text-gray-600">
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
            <p className="font-medium text-gray-600">
              {product.name}
            </p>
          </li>
        </ol>
      </nav>
      <div className="mt-1 pt-2 max-w-2xl mx-auto sm:px-6 lg:mt-20 lg:max-w-[68rem] lg:p-8 lg:grid lg:grid-cols-11 lg:gap-x-8 lg:border rounded-md">
        {/* Image gallery */}
          <div className={"aspect-w-3 aspect-h-4 lg:rounded-md lg:p-6 p-4 border-y lg:border overflow-hidden h-96 lg:h-[34rem] " + (product.user.name===user.name?"lg:col-span-4" : "lg:col-span-6")}>
            <img
              src={process.env.PUBLIC_URL + product.image.src}
              alt={product.name}
              className="w-full h-full object-center object-cover lg:rounded-sm"
            />
          </div>

        {/* Product info */}
        <div className={"flex flex-col justify-center auto-cols-max p-4 lg:py-6 lg:px-8 w-full " + (product.user.name===user.name?"lg:col-span-4" : "lg:col-span-5")}>
          <div className="pl-1">
            <h1 className="text-lg font-semibold tracking-tight text-gray-800 sm:text-2xl">{product.name}</h1>
          </div>

          {/* Options */}
          <div className="lg:row-span-3 mt-4">
            <div>
              <div className="align-text-bottom  sm:text-xl text-lg font-medium">
                <span className="px-2 mb-3 text-gray-600 m-0">{product.price}원</span>
                <span className="text-base lg:pl-2 text-gray-500">(개당 {product.pricePerPiece}원)</span> 
              </div>
              
              <div className="pl-2 py-5 lg:py-6 lg:col-start-1 lg:col-span-2 lg:pr-8">
                <h3 className="text-sm font-medium text-gray-400">공구 게시자: {product.user.class + ' ' + product.user.name}</h3>
                <h3 className="text-base font-medium text-gray-600">{product.description}</h3>
                <div className="my-4 lg:my-8">
                  <h3 className="text-sm font-medium text-gray-500">안내사항</h3>
                  <div className="mt-3 pl-4 list-disc text-sm space-y-1">
                    <ul>{product.count} / {product.maxcount} 개</ul>
                    <ul>{product.date} 까지</ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">상세링크</h3>
                  <div className="mt-3 pl-4 space-y-1 text-sm text-gray-600 hover:text-indigo-600">
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
                  onClick={onClick}
                  className={"w-full  bg-indigo-600 border border-transparent rounded-md py-3 flex items-center justify-center " + 
                  "text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 float-right mb-6 lg:m-0 "
                  + (product.user.name===user.name?"lg:w-36" : "lg:w-48")}>
                  {user.value?"취소하기":"신청하기"}
                </button>
              </form>
            </div>
          </div>
        </div>
        {product.user.name===user.name ? (
          <div className={"pr-3 flex flex-col items-center w-full h-96 lg:h-[34rem] " + (product.user.name===user.name?"lg:col-span-3":"hidden")}>
          <div className="flex justify-center mt-10 mb-3">
            <h1 className="text-lg font-semibold tracking-tight text-gray-800 sm:text-2xl">신청자</h1>
          </div>
          <div className="overflow-y-scroll flex flex-col items-center w-full h-full">
            {applyuser.map((user, i) => (
              <div key={i} className="p-2 border-b flex">
                <div className="pr-2">
                  {i+1}.
                </div>
                <div className="pr-2">
                  {user.name}:
                </div>
                <div>
                  {user.count}개
                </div>
              </div>
            ))}
          </div>
          <div className="self-end my-5 mr-10 py-2 border-b">
            총: {product.count}개
          </div>
        </div>
        ):''}
      </div>
    </div>
  )
}


export default ProductOverview;