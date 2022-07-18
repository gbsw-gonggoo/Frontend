import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from "axios";

const ProductOverview = () => {
  const [product, setProduct] = useState({})
  const [count, setCount] = useState(0)
  const [value, setValue] = useState(1)
  const [user, setUser] = useState({name : null,});
  const {id} = useParams();
  const [success, setSuccess] = useState(false);
  const [userSuccess, setUserSuccess] = useState(false);
  // const [token, setToken] = useState(localStorage.getItem("token"))
  const [applyCount, setApplyCount] = useState(0)

  // function filterByID(item) {
  //   if (isNumber(item.id) && item.id !== 0) {
  //     return true;
  //   }
  //   invalidEntries++;
  //   return false;
  // }

  useEffect(() => {
    Count();
  }, [user])

  const Count = () => {
    if(user.name&&product.id) {
      const data = user.RegisteredProduct.filter(v => v.id === product.id);
      if(data.length) {
        setCount(data[0].Apply.amount)
        setValue(data[0].Apply.amount)
      }
    }
  }

  const format = (date) => {
    const day = new Date(date);
    return day.getFullYear() + "-" + (day.getMonth()+1) + "-" + day.getDate();
  }

  useEffect(() => {
    loadData();
  },[]);

  const deletePost = (e) => {
    if(window.confirm("삭제하시겠습니까?") === false) {
      alert('취소되었습니다.');
      return false;
    }
    e.preventDefault();
    axios.delete(`/api/product/${id}`, { withCredentials : true })
      .then((res) => {
        console.log(res);
        alert(res.data.message);
        window.location.href = "/";
      })
  }

  const loadData = async () => {
    const result =  await axios.get(`/api/product/${id}`, {withCredentials: true})
    const user1 = await axios.get(`/api/user`, { withCredentials: true })

    if (result.data.success) {
      setSuccess(true);
      setProduct(result.data.product)
      console.log(result.data)

      let sum = 0
      result.data.product.RegisteredUser.forEach(user => sum += user.Apply.amount)
      setApplyCount(sum)
    } else {
      if(result.data.success) setSuccess(true);
      window.location.replace("/login");
    }
    if(user1.data.success) {
      setUser(user1.data.user);
      setUserSuccess(user1.data.success);
    }
    console.log(user1.data);
  }

  const submitHandler = async (e) => {
    const res = await axios.post(`/api/apply/${id}/${value}`, {}, { withCredentials : true })
    alert(res.data.message)
    window.location.reload();
  }

  const onChange = e => {
    setValue(e.target.value);
  }

  const onClick = e => {
    if (userSuccess) {
      if (!value) {
        if (window.confirm("취소하시겠습니까?") === false) {
          return false;
        }
        setValue('');
        alert('취소되었습니다.');
      } else {
        if (window.confirm("신청하시겠습니까?") === false) {
          return false;
        }
        setValue(value);
      }
      e.preventDefault();
      submitHandler(e);

    } else {
      alert('로그인 후 이용해주세요');
      window.location.replace('/login');
      e.preventDefault();
    }
  }

  if (!success) {
    return (
      <div className="bg-white w-full h-full fixed top-0 flex justify-center items-center">
        <div className="loadingio-spinner-rolling-nujnwn5po0q">
          <div className="ldio-6wvhm66o7gx"><div /></div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white pt-4 h-full overflow-auto flex flex-col">
        <div className="flex justify-between max-w-2xl lg:max-w-7xl sm:max-w-full w-full lg:px-16 m-auto">
          <nav aria-label="Breadcrumb" className="sm:ml-4">
            <ol role="list" className="flex items-centermx-auto px-4 space-x-2 ">
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
         {user.name===product.author?
          <div className="lg:block sm:block hidden mr-8 ">
            <button
              type="submit"
              onClick={deletePost}
              className={"bg-white text-red-600 border-red-600 border border-transparent rounded-md py-2 flex items-center justify-center w-28 " + 
              "text-base font-medium focus:outline-none float-right mb-6 m-0"}>
              글 삭제하기
            </button>
          </div>:""}
        </div>
      <div className="flex flex-col justify-center items-center lg:h-full">
        <div className="lg:h-auto pt-2 w-full sm:px-6 lg:max-w-[68rem] lg:p-8 lg:grid lg:grid-cols-11 lg:gap-x-8 lg:border rounded-md lg:overflow-auto">
          {/* Image gallery */}
        <div className={"my-2 aspect-w-3 aspect-h-4 lg:rounded-md lg:p-6 p-4 border-y lg:border h-96 lg:h-[34rem] " + (product.author===user.name?"lg:col-span-4" : "lg:col-span-6")}>
            <img
              // src={process.env.PUBLIC_URL + product.image.src}
              src = {product.image}
              alt={product.name}
              className="w-full h-full object-center object-cover lg:rounded-sm"
            />
          </div>

          {/* Product info */}
          <div className={"h-auto flex flex-col justify-start lg:justify-center auto-cols-max p-4 lg:py-2 lg:px-8 w-full " + (product.author===user.name?"lg:col-span-4" : "lg:col-span-5")}>
            <div className="pl-1">
              <h1 className="text-lg font-semibold tracking-tight text-gray-800 sm:text-2xl">{product.name+(product.amount?", "+product.amount:"")}</h1>
            </div>

            {/* Options */}
            <div className="lg:row-span-3 mt-4">
              <div>
                <div className="align-text-bottom  sm:text-xl text-lg font-medium">
                  <span className="px-2 mb-3 text-gray-600 m-0">개당 {product.price}원</span>
                </div>
                
                <div className="pl-2 py-5 lg:py-6 lg:col-start-1 lg:col-span-2 lg:pr-8">
                  <h3 className="text-sm font-medium text-gray-400">공구 게시자: {product.author}</h3>
                  <h3 className="text-base font-medium text-gray-600">{product.text?product.text:""}</h3>
                  <div className="my-4 lg:my-8">
                    <h3 className="text-sm font-medium text-gray-500">안내사항</h3>
                    <div className="mt-3 pl-4 list-disc text-sm space-y-1">
                      <ul>{product.count} / {product.maxCount} 개</ul>
                      {product.targetCount!==0?<ul>최소수량 : {product.targetCount}개</ul>:null}
                      <ul>{format(product.date)} 까지</ul>
                    </div>
                    {product.targetCount!==0?<ul className="mt-3 text-sm opacity-50">※목표수량에 도달되지 못하면 주문이 취소될 수 있습니다.</ul>:null}
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">상세링크</h3>
                    <div className="mt-3 pl-4 space-y-1 text-sm text-gray-600 hover:text-indigo-600">
                      <a href={product.link}>자세히보기</a>
                    </div>
                  </div>
                </div>
                <form className="algin-bottom">
                  <div className="lg:py-2 py-6 ml-3 float-left">
                    <input className="border p-1 mr-2 w-20 rounded" min="0" type="number" value={value} onChange={onChange} />개
                  </div>
                  <button
                    type="submit"
                    onClick={onClick}
                    className={"w-full  bg-indigo-600 border border-transparent rounded-md py-3 flex items-center justify-center " + 
                    "text-base font-medium text-white hover:bg-indigo-700 focus:outline-none float-right mb-6 lg:m-0 "
                    + (product.author===user.name?"lg:w-36" : "lg:w-48")}>
                    {count!==0?"수정하기":"신청하기"}
                  </button>
                </form>
              </div>
            </div>
            <span className="ml-3 mt-3 text-sm opacity-50">※취소를 원할 경우 갯수를 0개로 수정 부탁드립니다.</span>
          </div>
          {product.author===user.name ? (
          <div className={"py-2 px-3 flex flex-col items-center w-full lg:h-[34rem] " + (product.author===user.name?"lg:col-span-3":"hidden")}>
            <div className="flex justify-center mb-3 h-10 lg:h-8">
              <h1 className="text-lg font-semibold tracking-tight text-gray-800 sm:text-2xl">신청자</h1>
            </div>
            <div className="h-[15rem] lg:h-[23.2rem]">
              {applyCount ?
              <>
                <div className="overflow-y-scroll  w-full h-full p-5">
                  <div className="flex flex-col items-center min-h-[14rem]">
                    {product.RegisteredUser.map((user, i) => (
                      <div key={i} className="p-2 border-b flex h-auto ">
                        <div className="pr-2">
                          {i+1}.
                        </div>
                        <div className="pr-2">
                          {user.number + " " + user.name}:
                        </div>
                        <div>
                          {product.RegisteredUser.at(i).Apply.amount}개
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="my-3 mx-6 py-2 border-b">
                  총: {applyCount}개
                </div>
              </>:
              <div>신청자가 없습니다.</div>}
            </div>
            <button
              type="submit"
              onClick={deletePost}
              className={"lg:hidden sm:hidden w-full bg-white text-red-600 border-red-600 border border-transparent rounded-md py-2 flex items-center justify-center " + 
              "text-base font-medium focus:outline-none float-right mb-6 lg:m-0 "}>
              글 삭제하기
            </button>
          </div>
          ):''}
        </div>
      </div>
    </div>
  )
}


export default ProductOverview;