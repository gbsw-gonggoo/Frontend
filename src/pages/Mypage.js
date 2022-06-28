import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Truncate from 'react-truncate';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function MyPage() {
  const [user, setUser] = useState({})
  const [products, setProducts] = useState([]);
  const [products1, setProducts1] = useState([]);
  const [fixButton, setFixButton] = useState(false);
  const [nickname, setNickname] = useState(user.nickname);
  const [email, setEmail] = useState(user.email);
  const [img, setImg] = useState(`${process.env.PUBLIC_URL}/users/cat.jpg`);
  const [submitImg, setSubmitImg] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token")) 

  const format = (date) => {
    const day = new Date(date);
    return day.getFullYear() + "-" + (day.getMonth()+1) + "-" + day.getDate();
  }
  
  useEffect(() => {
    loadData();
  },[]);
  useEffect(() => {
    // console.log(result.data.user)
    console.log(user)
    
    setNickname(user.nickname)
    setEmail(user.email)
    setImg(user.profileImg)
  }, [user])

  const loadData = async () => {
    let result = await axios.get("/api/user", { withCredentials: true })

    if (result.data.success) {
      setUser(result.data.user)
    } else {
      window.location.href = "/"
    }
    // console.log(user) 
  }

  function setProfilePicture(input) {
    let myInput = document.getElementById(input)
    myInput.click();
  }

  function submitImgFile(path, file) {
    const formData = new FormData();
    formData.append('file', file);
    axios.post(`/api/user/${path}`, formData, {withCredentials: true}).then(res => console.log(res));
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
      if(id==="profile-bg-img") submitImgFile("background", file);
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

    submitImgFile("profile",submitImg);

    axios.post("/api/user", body)
      .then((res) => {console.log(res)});
  };

  // if (!products.length||!products1.length) {
  //   return (
  //     <div className="bg-slate-50 w-full h-full fixed top-0 flex justify-center items-center">
  //       <div class="loadingio-spinner-rolling-nujnwn5po0q">
  //         <div class="ldio-6wvhm66o7gx"><div /></div>
  //       </div>
  //     </div>
  //   )
  // }

  if(!token) {
    alert("로그인 후 이용해주세요")
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
      <div className="w-full h-full overflow-auto bg-slate-50">
        <div className="w-full h-full mx-auto flex flex-col items-center lg:max-w-7xl lg:px-16 relative">
          <div className="mt-5 lg:mt-0 lg:absolute lg:top-10 w-full h-60 rounded-2xl">
            <img
              id="profile-bg-img"
              className="w-full h-full object-cover rounded-md lg:rounded-2xl"
              src={user.backgroundImg?user.backgroundImg:`${process.env.PUBLIC_URL}/users/cat.jpg`}
              alt="backgroundImg"
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
                        alt="profileImg"
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
                      <div className="font-extrabold text-lg">{user.name}</div>
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
                  <div className="font-semibold my-3 text-gray-500">학번 : <input type="text" value={user.number} disabled /></div>
                  <div className="font-semibold my-3 text-gray-500">닉네임 : <input type="text" placeholder="닉네임을 입력하세요" className="text-black" onChange={(e) => setNickname(e.target.value)} value={nickname} /></div>
                  <div className="font-semibold my-3 text-gray-500">이메일 : <input type="email" placeholder="이메일을 입력하세요" className="text-black" onChange={(e) => setEmail(e.target.value)} value={email} /></div>
                </div>:
                <div className="w-full">
                  <div className="font-semibold my-3 text-gray-500">이름 : <span className="font-medium text-black">{user.name}</span></div>
                  <div className="font-semibold my-3 text-gray-500">학번 : <span className="font-normal text-black">{user.number}</span></div>
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
                          <Link to={`/product/${product.id}`} key={product.id}>
                            <div className="group w-60 border rounded-md bg-white mx-2">
                              <div className="m hover-group p-3 border-b rounded-t-md overflow-hidden h-52 aspect-none">
                                <div className="hover-text list-disc font-semibold text-base text-gray-700">
                                    <ul className="flex justify-center">{product.count} / {product.maxCount} <span className="text-[0.9rem] ml-0.5">개</span></ul>
                                    {product.targetCount!==0?<ul className="flex justify-center"><span className="text-[0.9rem] mr-1">목표수량 : </span>{product.targetCount} <span className="text-[0.9rem] ml-0.5">개</span></ul>:null}
                                    <ul className="flex justify-center">{format(product.date)} <span className="text-[0.9rem] ml-0.5">까지</span></ul>
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
                          <div className="flex items-center py-5 px-4" key={product.id}>
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
}

export default MyPage