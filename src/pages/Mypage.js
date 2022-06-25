import React, { useState } from "react";
import { Link } from "react-router-dom";
import Truncate from 'react-truncate';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useEffect } from "react";

const _products = [
  {
    id: 1,
    name: '칠성사이다',
    image: {
      src: '/product/칠성사이다.png',
    },
    amount: '210ml',
    price: '600',
    text: '구매해주세요',
    targetCount: 0,
    count: 12,
    maxCount: 30,
    date: '2022-04-30',
    link: 'https://www.coupang.com/vp/products/319152577?itemId=230425388&vendorItemId=3590493048&pickType=COU_PICK&q=%EC%B9%A0%EC%84%B1%EC%82%AC%EC%9D%B4%EB%8B%A4&itemsCount=36&searchId=89b7e2093afa4ba69ca45c2a14b8b0b5&rank=1',
    value: 1,
    author: {
      name: '김성현',
      class: '2104',
    },
    user : [
      {
        userclass: 1234,
        name: '김성현',
        count: 3,
      },
      {
        userclass: 1234,
        name: '김강현',
        count: 1,
      },
      {
        userclass: 1234,
        name: '김동혁',
        count: 1,
      },
      {
        userclass: 1234,
        name: '조수빈',
        count: 4,
      },
      {
        userclass: 1234,
        name: '박민혁',
        count: 2,
      },
      {
        userclass: 1234,
        name: '김성희',
        count: 1,
      },
    ]
  },
  {
    id: 2,
    name: '초코에몽',
    image: {
      src: '/product/초코에몽.jpg',
    },
    amount: '180ml',
    price: '600',
    text: '구매해주세요',
    targetCount: 10,
    count: 14,
    maxCount: 24,
    date: '2022-04-30',
    link: 'https://www.coupang.com/vp/products/319152577?itemId=230425388&vendorItemId=3590493048&pickType=COU_PICK&q=%EC%B9%A0%EC%84%B1%EC%82%AC%EC%9D%B4%EB%8B%A4&itemsCount=36&searchId=89b7e2093afa4ba69ca45c2a14b8b0b5&rank=1',
    value: 1,
    author: {
      name: '김성현',
      class: '2104',
    },
    user : [
      {
        userclass: 1234,
        name: '김성현',
        count: 3,
      },
      {
        userclass: 1234,
        name: '김강현',
        count: 1,
      },
      {
        userclass: 1234,
        name: '김동혁',
        count: 1,
      },
      {
        userclass: 1234,
        name: '조수빈',
        count: 4,
      },
      {
        userclass: 1234,
        name: '박민혁',
        count: 2,
      },
      {
        userclass: 1234,
        name: '김성희',
        count: 1,
      },
    ]
  },
  {
    id: 3,
    name: "스키니피그 쿠키앤크림",
    image: {
      src: '/product/아이스크림.jpg',
    },
    amount: '474ml',
    price: '7,870',
    text: '구매해주세요',
    targetCount: 2,
    count: 1,
    maxCount: 4,
    date: '2022-04-30',
    link: 'https://www.coupang.com/vp/products/319152577?itemId=230425388&vendorItemId=3590493048&pickType=COU_PICK&q=%EC%B9%A0%EC%84%B1%EC%82%AC%EC%9D%B4%EB%8B%A4&itemsCount=36&searchId=89b7e2093afa4ba69ca45c2a14b8b0b5&rank=1',
    value: 1,
    author: {
      name: '김성현',
      class: '2104',
    },
    user : [
      {
        userclass: 1234,
        name: '김성현',
        count: 3,
      },
      {
        userclass: 1234,
        name: '김강현',
        count: 1,
      },
      {
        userclass: 1234,
        name: '김동혁',
        count: 1,
      },
      {
        userclass: 1234,
        name: '조수빈',
        count: 4,
      },
      {
        userclass: 1234,
        name: '박민혁',
        count: 2,
      },
      {
        userclass: 1234,
        name: '김성희',
        count: 1,
      },
    ]
  },
  {
    id: 4,
    name: "블락 바디트리머 네로 블랙",
    image: {
      src: '/product/다리털숱제거기.jpg',
    },
    amount: '',
    price: '8,900',
    text: '구매해주세요',
    targetCount: 2,
    count: 1,
    maxCount: 4,
    date: '2022-04-30',
    link: 'https://www.coupang.com/vp/products/319152577?itemId=230425388&vendorItemId=3590493048&pickType=COU_PICK&q=%EC%B9%A0%EC%84%B1%EC%82%AC%EC%9D%B4%EB%8B%A4&itemsCount=36&searchId=89b7e2093afa4ba69ca45c2a14b8b0b5&rank=1',
    value: 1,
    author: {
      name: '김성현',
      class: '2104',
    },
    user : [
      {
        userclass: 1234,
        name: '김성현',
        count: 3,
      },
      {
        userclass: 1234,
        name: '김강현',
        count: 1,
      },
      {
        userclass: 1234,
        name: '김동혁',
        count: 1,
      },
      {
        userclass: 1234,
        name: '조수빈',
        count: 4,
      },
      {
        userclass: 1234,
        name: '박민혁',
        count: 2,
      },
      {
        userclass: 1234,
        name: '김성희',
        count: 1,
      },
    ]
  },
]

const _products1 = [
  {
    id: 1,
    name: '칠성사이다',
    image: {
      src: '/product/칠성사이다.png',
    },
    amount: '210ml',
    price: '600',
    text: '구매해주세요',
    targetCount: 0,
    count: 12,
    maxCount: 30,
    date: '2022-04-30',
    link: 'https://www.coupang.com/vp/products/319152577?itemId=230425388&vendorItemId=3590493048&pickType=COU_PICK&q=%EC%B9%A0%EC%84%B1%EC%82%AC%EC%9D%B4%EB%8B%A4&itemsCount=36&searchId=89b7e2093afa4ba69ca45c2a14b8b0b5&rank=1',
    value: 1,
    author: {
      name: '김성현',
      class: '2104',
    },
    user : [
      {
        userclass: 1234,
        name: '김성현',
        count: 3,
      },
      {
        userclass: 1234,
        name: '김강현',
        count: 1,
      },
      {
        userclass: 1234,
        name: '김동혁',
        count: 1,
      },
      {
        userclass: 1234,
        name: '조수빈',
        count: 4,
      },
      {
        userclass: 1234,
        name: '박민혁',
        count: 2,
      },
      {
        userclass: 1234,
        name: '김성희',
        count: 1,
      },
    ]
  },
  {
    id: 2,
    name: '초코에몽',
    image: {
      src: '/product/초코에몽.jpg',
    },
    amount: '180ml',
    price: '600',
    text: '구매해주세요',
    targetCount: 10,
    count: 14,
    maxCount: 24,
    date: '2022-04-30',
    link: 'https://www.coupang.com/vp/products/319152577?itemId=230425388&vendorItemId=3590493048&pickType=COU_PICK&q=%EC%B9%A0%EC%84%B1%EC%82%AC%EC%9D%B4%EB%8B%A4&itemsCount=36&searchId=89b7e2093afa4ba69ca45c2a14b8b0b5&rank=1',
    value: 1,
    author: {
      name: '김성현',
      class: '2104',
    },
    user : [
      {
        userclass: 1234,
        name: '김성현',
        count: 3,
      },
      {
        userclass: 1234,
        name: '김강현',
        count: 1,
      },
      {
        userclass: 1234,
        name: '김동혁',
        count: 1,
      },
      {
        userclass: 1234,
        name: '조수빈',
        count: 4,
      },
      {
        userclass: 1234,
        name: '박민혁',
        count: 2,
      },
      {
        userclass: 1234,
        name: '김성희',
        count: 1,
      },
    ]
  },
]

const user = {
  name: '김동혁',
  class: '2103',
  nickname: 'hot-dong',
  email: 'kdh10222555@gmail.com',
  backgroundImg: `${process.env.PUBLIC_URL}/user/무서운이야기1.jpg`,
  profileImg: `${process.env.PUBLIC_URL}/user/cat.jpg`,
}

function MyPage() {
  const [products, setProducts] = useState([]);
  const [products1, setProducts1] = useState([]);
  const [fixButton, setFixButton] = useState(false);
  const [nickname, setNickname] = useState(user.nickname);
  const [email, setEmail] = useState(user.email);
  const [img, setImg] = useState(user.profileImg);
  const [submitImg, setSubmitImg] = useState([]);
  
  useEffect(() => {
    loadData();
  },[]);

  async function loadData() {
    const data = await fetch(`http://172.16.1.42:8002/mypage`)
      .then((res) => res.json())
      .catch(() => ({ success: false }))
    
    if(data.success) {
      setProducts(data.products);
      setProducts1(data.products1);
    }
    else {
      setProducts(_products);
      setProducts1(_products1);
    }
  }

  function setProfilePicture(input) {
    let myInput = document.getElementById(input)
    myInput.click();
  }

  function submitImgFile(path, file) {
    const formData = new FormData();
    formData.append('file', file);
    axios.post(`http://172.16.1.42:8002/product/${path}`, formData).then(res => console.log(res));
    console.log(file);
    console.log("사진 전송!");
  }

  function readImage(input, id) {
    const file = input.files[0];
    if(input.files && file) {
      const reader = new FileReader()
      reader.onload = e => {
        if(id==="profile-img") setImg(e.target.result);
        else {
          const previewImage = document.getElementById(id)
          previewImage.src = e.target.result
        }
      }
      reader.readAsDataURL(file);

      if(id==="profile-img") setSubmitImg(file);
      if(id==="profile-bg-img") submitImgFile("img", file);
    }
  };

  function fixButtonHandler() {
    setFixButton(!fixButton);
    if(!fixButton||(nickname===user.nickname&&email===user.email&&img===user.profileImg)) return false;
    if(window.confirm("수정하시겠습니까?") === false) {
      setNickname(user.nickname);
      setEmail(user.email);
      setImg(user.profileImg);
      return false;
    }
    return true;
  }
  
  const submitHandler = (e) => {
    console.log(fixButton);
    if(!fixButtonHandler()) return false;
    
    e.preventDefault();
    console.log(nickname);
    console.log(email);

    let body = {
      nickname: nickname,
      email: email,
    };

    submitImgFile("img",submitImg);

    // axios.post("http://172.16.1.42:8002/mypage", body)
    //   .then((res) => {console.log(res)});
  };

  if (!products.length||!products1.length) {
    return (
      <div className="bg-slate-50 w-full h-full fixed top-0 flex justify-center items-center">
        <div class="loadingio-spinner-rolling-nujnwn5po0q">
          <div class="ldio-6wvhm66o7gx"><div /></div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-full overflow-auto bg-slate-50">
      <div className="w-full h-full mx-auto flex flex-col items-center lg:max-w-7xl lg:px-16 relative">
        <div className="mt-5 lg:mt-0 lg:absolute lg:top-10 w-full h-60 rounded-2xl">
          <img
            id="profile-bg-img"
            className="w-full h-full object-cover rounded-md lg:rounded-2xl"
            src={user.backgroundImg}
            />
          <div className="rounded-md w-7 h-7 flex justify-center items-center bg-white text-slate-500 text-sm lg:m-5 absolute top-0 right-0 mt-6 mr-1">
            <button onClick={() => setProfilePicture('profile-bg-img-input')}>
              <FontAwesomeIcon icon={faPen} className="" />
            </button>
          </div>
          <div>
            <input
              type='file'
              id="profile-bg-img-input"
              name='profile-bg-img-input'
              accept='image/png, image/jpeg'
              className="hidden"
              onChange={(e) => {readImage(e.target, 'profile-bg-img')}}
            />
          </div>
        </div>
        <div className="absolute flex flex-col w-full h-auto mt-28 lg:mt-0 lg:top-36 lg:w-11/12 drop-shadow-2xl bg-white border lg:rounded-lg sm:rounded-lg z-30">
          <div className="h-full flex lg:mt-8 mt-5 lg:max-h-[24rem] justify-between flex-col lg:flex-row lg:px-8 px-4 w-auto">
            <div className="justify-between lg:w-1/2 mx-7 mt-7">
              <div className="flex items-center mb-10 justify-between ">
                <div className="flex items-center">
                  <div>
                    <img
                      id="profile-img"
                      src={img}
                      alt=""
                      className="lg:w-20 lg:h-20 sm:w-18 sm:h-18 w-14 h-14 rounded-full"
                      onClick={(fixButton ? () => setProfilePicture('profile-img-input') : null)} 
                    />
                  </div>
                  <div>
                    <input
                      type='file'
                      id="profile-img-input"
                      name='profile-img-input'
                      accept='image/png, image/jpeg'
                      className="hidden"
                      onChange={(e) => {readImage(e.target, 'profile-img')}}
                    />
                  </div>
                  <div className="ml-5">
                    <div className="font-extrabold text-lg">김동혁</div>
                  </div>
                </div>
                <button onClick={submitHandler} className="text-slate-500 text-sm lg:mr-10">
                  <FontAwesomeIcon icon={faPen} />
                </button>
              </div>
              <div className="flex w-full lg:flex-row mb-3 mr-10 lg:mr-0">
                <div>
                  <div className="font-semibold">프로필</div>
                </div>
              </div>
              {fixButton?
                <div className="w-full">
                <div className="font-semibold my-3 text-gray-500">이름 : <input type="text" value={user.name} disabled /></div>
                <div className="font-semibold my-3 text-gray-500">학번 : <input type="text" value={user.class} disabled /></div>
                <div className="font-semibold my-3 text-gray-500">닉네임 : <input type="text" placeholder="닉네임을 입력하세요" className="text-black" onChange={(e) => setNickname(e.target.value)} value={nickname} /></div>
                <div className="font-semibold my-3 text-gray-500">이메일 : <input type="email" placeholder="이메일을 입력하세요" className="text-black" onChange={(e) => setEmail(e.target.value)} value={email} /></div>
              </div>:
              <div className="w-full">
                <div className="font-semibold my-3 text-gray-500">이름 : <span className="font-medium text-black">{user.name}</span></div>
                <div className="font-semibold my-3 text-gray-500">학번 : <span className="font-normal text-black">{user.class}</span></div>
                <div className="font-semibold my-3 text-gray-500">닉네임 : <span className="font-normal text-black">{nickname}</span></div>
                <div className="font-semibold my-3 text-gray-500">이메일 : <span className="font-normal text-black">{email}</span></div>
              </div>
              }
              
              
              <span className="mt-3 text-sm opacity-50">※프로필 이미지는 수정 버튼을 클릭후 이미지를 누르면 변경 가능합니다.</span>
            </div>
            <div className="w-12/12 lg:w-6/12 mt-7">
              <div className="font-semibold mb-2 mt-10 lg:mt-0">신청된 상품 목록</div>
              <div className="lg:h-72 lg:pr-10 lg:overflow-auto">
                {!products?
                  <div>
                    신청한 공동구매가 없습니다.
                  </div>:
                  products.map(product => (
                  <Link to={`/product/${product.id}`} key={product.id} state={{ product: product }}>
                    <div className="flex justify-between py-5 lg:py-4 px-4 items-center hover:bg-slate-50	">
                      <div className="flex items-center">
                        <img
                          src={process.env.PUBLIC_URL + product.image.src}
                          alt={product.name}
                          className="w-14 h-14 rounded-full mr-4" />
                        <div>
                          <div className="font-semibold">{ product.name }</div>
                          <div className="text-slate-500 text-sm">개당 {product.price}원</div>
                        </div>
                      </div>
                      <div className="font-semibold text-sm text-sky-500">
                        <p>{product.value}개</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:px-8 px-4 lg:mt-5 mb-5 h-auto">
            <div className="w-full h-full mb-5">
              <div className="font-semibold mb-2 mt-10 lg:mt-5">내가 올린 게시물</div>
              <div className="flex flex-col lg:flex-row justify-between">
                {!products1?
                  <div>
                    게시한 공동구매가 없습니다.
                  </div>:
                  <div>
                    <div className="hidden my-2 py-2 lg:flex overflow-auto">
                      {products1.map((product) => (
                        <Link to={`/product/${product.id}`} key={product.id} state={{ product: product }} >
                          <div className="group w-60 border rounded-md bg-white mx-2">
                            <div className="m hover-group p-3 border-b rounded-t-md overflow-hidden h-52 aspect-none">
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
                    </div>
                    <div className="block lg:hidden">
                      {products1.map(product => (
                        <div className="flex items-center py-5 px-4" key={product.id} state={{ product: product }}>
                          <img
                            src={process.env.PUBLIC_URL + product.image.src}
                            alt={product.name}
                            className="w-14 h-14 rounded-full mr-4" />
                          <div>
                            <div className="font-semibold">{ product.name }</div>
                            <div className="text-slate-500 text-sm">개당 {product.price}원</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyPage