import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Truncate from 'react-truncate';
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const products = [
//   {
//     id: 1,
//     name: '칠성사이다',
//     image: {
//       src: '/product/칠성사이다.png',
//     },
//     amount: '210ml',
//     price: '600',
//     text: '구매해주세요',
//     targetCount: 0,
//     count: 12,
//     maxCount: 30,
//     date: '2022-04-30',
//     link: 'https://www.coupang.com/vp/products/319152577?itemId=230425388&vendorItemId=3590493048&pickType=COU_PICK&q=%EC%B9%A0%EC%84%B1%EC%82%AC%EC%9D%B4%EB%8B%A4&itemsCount=36&searchId=89b7e2093afa4ba69ca45c2a14b8b0b5&rank=1',
//     value: 0,
//     author: {
//       name: '김성현',
//       class: '2104',
//     },
//     user : [
//       {
//         name: '김성현',
//         count: 3,
//       },
//       {
//         name: '김강현',
//         count: 1,
//       },
//       {
//         name: '김동혁',
//         count: 1,
//       },
//       {
//         name: '조수빈',
//         count: 4,
//       },
//       {
//         name: '박민혁',
//         count: 2,
//       },
//       {
//         name: '김성희',
//         count: 1,
//       },
//     ]
//   },
//   {
//     id: 2,
//     name: '초코에몽',
//     image: {
//       src: '/product/초코에몽.jpg',
//     },
//     amount: '180ml',
//     price: '600',
//     text: '구매해주세요',
//     targetCount: 10,
//     count: 14,
//     maxCount: 24,
//     date: '2022-04-30',
//     link: 'https://www.coupang.com/vp/products/319152577?itemId=230425388&vendorItemId=3590493048&pickType=COU_PICK&q=%EC%B9%A0%EC%84%B1%EC%82%AC%EC%9D%B4%EB%8B%A4&itemsCount=36&searchId=89b7e2093afa4ba69ca45c2a14b8b0b5&rank=1',
//     value: 0,
//     author: {
//       name: '김성현',
//       class: '2104',
//     },
//     user : [
//       {
//         name: '김성현',
//         count: 3,
//       },
//       {
//         name: '김강현',
//         count: 1,
//       },
//       {
//         name: '김동혁',
//         count: 1,
//       },
//       {
//         name: '조수빈',
//         count: 4,
//       },
//       {
//         name: '박민혁',
//         count: 2,
//       },
//       {
//         name: '김성희',
//         count: 1,
//       },
//     ]
//   },
//   {
//     id: 3,
//     name: "스키니피그 쿠키앤크림",
//     image: {
//       src: '/product/아이스크림.jpg',
//     },
//     amount: '474ml',
//     price: '7,870',
//     text: '구매해주세요',
//     targetCount: 2,
//     count: 1,
//     maxCount: 4,
//     date: '2022-04-30',
//     link: 'https://www.coupang.com/vp/products/319152577?itemId=230425388&vendorItemId=3590493048&pickType=COU_PICK&q=%EC%B9%A0%EC%84%B1%EC%82%AC%EC%9D%B4%EB%8B%A4&itemsCount=36&searchId=89b7e2093afa4ba69ca45c2a14b8b0b5&rank=1',
//     author: {
//       name: '김성현',
//       class: '2104',
//     },
//     user : [
//       {
//         name: '김성현',
//         count: 3,
//       },
//       {
//         name: '김강현',
//         count: 1,
//       },
//       {
//         name: '김동혁',
//         count: 1,
//       },
//       {
//         name: '조수빈',
//         count: 4,
//       },
//       {
//         name: '박민혁',
//         count: 2,
//       },
//       {
//         name: '김성희',
//         count: 1,
//       },
//     ]
//   },
//   {
//     id: 4,
//     name: "블락 바디트리머 네로 블랙",
//     image: {
//       src: '/product/다리털숱제거기.jpg',
//     },
//     amount: '',
//     price: '8,900',
//     text: '구매해주세요',
//     targetCount: 2,
//     count: 1,
//     maxCount: 4,
//     date: '2022-04-30',
//     link: 'https://www.coupang.com/vp/products/319152577?itemId=230425388&vendorItemId=3590493048&pickType=COU_PICK&q=%EC%B9%A0%EC%84%B1%EC%82%AC%EC%9D%B4%EB%8B%A4&itemsCount=36&searchId=89b7e2093afa4ba69ca45c2a14b8b0b5&rank=1',
//     author: {
//       name: '김성현',
//       class: '2104',
//     },
//     user : [
//       {
//         name: '김성현',
//         count: 3,
//       },
//       {
//         name: '김강현',
//         count: 1,
//       },
//       {
//         name: '김동혁',
//         count: 1,
//       },
//       {
//         name: '조수빈',
//         count: 4,
//       },
//       {
//         name: '박민혁',
//         count: 2,
//       },
//       {
//         name: '김성희',
//         count: 1,
//       },
//     ],
//   },
//   {
//     id: 5,
//     name: "롯데제과 비타C박스",
//     image: {
//       src: '/product/비타C박스.jpg',
//     },
//     amount: '210ml',
//     price: '65g',
//     text: '구매해주세요',
//     targetCount: 10,
//     count: 4,
//     maxCount: 12,
//     date: '2022-04-30',
//     link: 'https://www.coupang.com/vp/products/319152577?itemId=230425388&vendorItemId=3590493048&pickType=COU_PICK&q=%EC%B9%A0%EC%84%B1%EC%82%AC%EC%9D%B4%EB%8B%A4&itemsCount=36&searchId=89b7e2093afa4ba69ca45c2a14b8b0b5&rank=1',
//     author: {
//       name: '김성현',
//       class: '2104',
//     },
//     user : [
//       {
//         name: '김성현',
//         count: 3,
//       },
//       {
//         name: '김강현',
//         count: 1,
//       },
//       {
//         name: '김동혁',
//         count: 1,
//       },
//       {
//         name: '조수빈',
//         count: 4,
//       },
//       {
//         name: '박민혁',
//         count: 2,
//       },
//       {
//         name: '김성희',
//         count: 1,
//       },
//     ],
//   },
//   {
//     id: 6,
//     name: "토레타",
//     image: {
//       src: '/product/수분충전에는토레타.jpg',
//     },
//     amount: '500ml',
//     price: '1,100',
//     text: '구매해주세요',
//     targetCount: 8,
//     count: 5,
//     maxCount: 15,
//     date: '2022-04-30',
//     link: 'https://www.coupang.com/vp/products/319152577?itemId=230425388&vendorItemId=3590493048&pickType=COU_PICK&q=%EC%B9%A0%EC%84%B1%EC%82%AC%EC%9D%B4%EB%8B%A4&itemsCount=36&searchId=89b7e2093afa4ba69ca45c2a14b8b0b5&rank=1',
//     author: {
//       name: '김성현',
//       class: '2104',
//     },
//     user : [
//       {
//         name: '김성현',
//         count: 3,
//       },
//       {
//         name: '김강현',
//         count: 1,
//       },
//       {
//         name: '김동혁',
//         count: 1,
//       },
//       {
//         name: '조수빈',
//         count: 4,
//       },
//       {
//         name: '박민혁',
//         count: 2,
//       },
//       {
//         name: '김성희',
//         count: 1,
//       },
//     ]
//   },
//   {
//     id: 7,
//     name: "포카리스웨트",
//     image: {
//       src: '/product/토레타가없으면포카리스웨트.jpg',
//     },
//     amount: '500ml',
//     price: '1,200',
//     text: '구매해주세요',
//     targetCount: 4,
//     count: 5,
//     maxCount: 10,
//     date: '2022-04-30',
//     link: 'https://www.coupang.com/vp/products/319152577?itemId=230425388&vendorItemId=3590493048&pickType=COU_PICK&q=%EC%B9%A0%EC%84%B1%EC%82%AC%EC%9D%B4%EB%8B%A4&itemsCount=36&searchId=89b7e2093afa4ba69ca45c2a14b8b0b5&rank=1',
//     author: {
//       name: '김성현',
//       class: '2104',
//     },
//   },
//   {
//     id: 8,
//     name: "우리둘 커플문답 오리지널",
//     image: {
//       src: '/product/커플문답.jpg',
//     },
//     amount: '210ml',
//     price: '5,600',
//     text: '구매해주세요',
//     targetCount: 2,
//     count: 1,
//     maxCount: 2,
//     date: '2022-04-30',
//     link: 'https://www.coupang.com/vp/products/319152577?itemId=230425388&vendorItemId=3590493048&pickType=COU_PICK&q=%EC%B9%A0%EC%84%B1%EC%82%AC%EC%9D%B4%EB%8B%A4&itemsCount=36&searchId=89b7e2093afa4ba69ca45c2a14b8b0b5&rank=1',
//     author: {
//       name: '김성현',
//       class: '2104',
//     },
//   },
//   // More products...
// ]

const ProductList = () => {
  const toTop = () => {
    window.scrollTo({top:0, behavior:'smooth'});
  }

  const [products, setProducts] = useState([{
    id: 0,
    name: '',
    image: {},
    amount: '',
    price: '',
    text: '',
    targetCount: 0,
    count: 0,
    maxCount: 0,
    date: '',
    link: '',
    value: 0,
    author: {},
    user : [{},]
  },]);

  async function loadData() {
    const response = await fetch(`http://172.16.1.42:8002/product`);
    const data = await response.json();
    console.log(data);
    
    if(data.success) setProducts(data.product);
    console.log(products);
  }

  useEffect(() => {
    loadData();
  },[]);

  return (
    <div className="bg-slate-50 overflow-y-auto max-h-screen h-full pb-20">
      <div className="max-w-2xl mx-auto px-4 pb-10 pt-8 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="lg:text-[1.35rem] text-xl font-semibold tracking-tight text-gray-500">공동구매 리스트</h2>

        <div className="mt-6 grid gap-y-10 gap-x-6 grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {!products?
          <div>
            공동구매글이 없습니다.
          </div>:
          products.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} state={{ product: product }}>
              <div className="group relative border rounded-md bg-white">
                <div className="m hover-group w-full p-3 border-b rounded-t-md overflow-hidden h-48 lg:h-80 lg:aspect-none">
                  <div className="hover-text list-disc font-semibold text-base text-gray-700">
                      <ul className="flex justify-center">{product.count} / {product.maxCount} <span className="text-[0.9rem] ml-0.5">개</span></ul>
                      {product.targetCount!==0?<ul className="flex justify-center"><span className="text-[0.9rem] mr-1">목표수량 : </span>{product.targetCount} <span className="text-[0.9rem] ml-0.5">개</span></ul>:null}
                      <ul className="flex justify-center">{product.date} <span className="text-[0.9rem] ml-0.5">까지</span></ul>
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
                      {product.name+(product.amount?", "+product.amount:"")}
                    </Truncate>
                  </div>
                  <div className="lg:mt-1 lg:flex lg:font-medium">
                    <p className="text-sm text-gray-500 lg:float-left lg:mr-1">개당 {product.price}원</p>
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