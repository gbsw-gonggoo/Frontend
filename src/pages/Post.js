import React, { useState } from 'react';
import axios from "axios";

const Post = () => {
  const [button, setButton] = useState(false);
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [profileImg, setProfileImg] = useState([]);

  function submitImgFile(file) {
    const formData = new FormData();
    formData.append('file', file);
    axios.post("http://172.16.1.42:8002/img/", formData).then(res => console.log(res));
    console.log(file);
    console.log("사진 전송!");
  }

  function readImage(input, id) {
    const file = input.files[0];
    if(input.files && file) {
      const reader = new FileReader()
      reader.onload = e => {
        const previewImage = document.getElementById(id)
        previewImage.src = e.target.result
      }
      reader.readAsDataURL(file);

      if(id==="profile-img") setProfileImg(file);
      if(id==="profile-bg-img") submitImgFile(file);
    }
  };
  
  const submitHandler = (e) => {
    if(window.confirm("등록하시겠습니까?") === false) {
      return false;
    }
    
    e.preventDefault();
    console.log(nickname);
    console.log(email);

    let body = {
      nickname: nickname,
      email: email,
    };

    submitImgFile(profileImg);

    // axios.post("http://172.16.1.42:8002/mypage", body)
    //   .then((res) => {console.log(res)});
  };

  function readImage(input) {
    if(input.files && input.files[0]) {
        const reader = new FileReader()
        reader.onload = e => {
            const previewImage = document.getElementById("preview-image")
            previewImage.src = e.target.result
        }
        reader.readAsDataURL(input.files[0])
    }
  }
  
  return (
    <div className="bg-white pt-4 overflow-y-scroll max-h-screen h-full pb-10">
      <div className="flex justify-center h-full lg:h-auto w-full overflow-inherit">
        <div class="sm:max-w-2xl lg:overflow-auto h-full lg:h-auto mx-auto sm:px-6 lg:mt-28 lg:max-w-[68rem] lg:p-8 lg:grid lg:grid-cols-11 lg:gap-x-8 lg:border rounded-md">
          <div className="aspect-w-3 aspect-h-4 lg:rounded-md lg:p-6 p-4 border-y sm:border sm:mt-5 lg:border overflow-hidden h-90 lg:h-[34rem] lg:col-span-6">
            <img 
              className="w-full lg:h-[28rem] object-center object-cover lg:rounded-sm mb-4 sm:border"
              id="preview-image" src={"https://dummyimage.com/500x500/ffffff/000000.png&text=preview+image"} />
            <input
              type='file'
              id="avatar"
              name='avatar'
              accept='image/png, image/jpeg'
              // src={process.env.PUBLIC_URL + product.image.src}
              // alt={product.name}
              onChange={(e) => readImage(e.target)}
            />
          </div>

          {/* Product info */}
          <div className="flex flex-col h-[36rem] lg:h-auto justify-start lg:justify-center auto-cols-max p-4 lg:py-0 lg:px-8 w-full lg:col-span-5">
            <div className="px-2 ">
              <div className="text-[0.95rem] font-medium my-2">
                <div className="my-2 list-disc text-[0.95rem] flex items-center">
                  <h3 className="text-[0.95rem] font-medium text-gray-600 w-20"><label for='name'>물품명 : </label></h3>
                  <input className="border p-1 mx-2 w-64 rounded px-2 " type="text" name='name' id='name' placeholder='ex ) 칠성사이다' />
                </div>
                <div className="my-2 list-disc text-[0.95rem] flex items-center">
                  <h3 className="text-[0.95rem] font-medium text-gray-600 w-20"><label for='amount'>용량 : </label></h3>
                  <input className="border p-1 mx-2 w-64 rounded px-2 " type="text" name='amount' id='amount' placeholder='ex ) 210ml' />
                </div>
                <div className="my-2 list-disc text-[0.95rem] flex items-center">
                <h3 className="text-[0.95rem] font-medium text-gray-600 w-20"><label for='price'>개당 가격 : </label></h3>
                  <input className="border p-1 mx-2 w-64 rounded px-2 " type="number" name='price' id='price' placeholder='ex ) 600' />
                </div>
                <div className="my-2 list-disc text-[0.95rem] flex items-start">
                <h3 className="text-[0.95rem] font-medium text-gray-600 w-20"><label for='text'>상세내용 : </label></h3>
                <textarea className="border p-1 mx-2 w-64 rounded px-2 " type="number" name='text' id='text' placeholder='ex ) 구매해주세요'/>
                </div>
              </div>
              <div className="py-2 lg:p-0 lg:mb-6 lg:pt-0 lg:col-start-1 lg:col-span-2">
                <div className="my-2 lg:my-2">
                  <h3 className="text-sm font-medium text-gray-500">안내사항</h3>
                  <div className="mt-3 pl-4 list-disc text-[0.95rem] space-y-1">
                    <ul className="flex items-center"><p className="w-20" for="targetCount">목표수량 : </p><input className="border p-1 mx-2 w-40 rounded" type='number' min="1" name="count1" id="count1" placeholder='ex ) 10' />개</ul>
                    <ul className="text-sm opacity-50">※목표하는 수량이 없다면 0으로 게시해주세요.</ul>
                    <ul className="flex items-center"><p className="w-20" for="maxCount">마감수량 : </p><input className="border p-1 mx-2 w-40 rounded" type='number' min="1" name="count2" id="count2" placeholder='ex ) 30' />개</ul>
                    <ul className="flex items-center"><p className="w-20" for="date">마감일 : </p><input className="border p-0.5 mx-2 w-40 rounded" type='date' name="date" id="date" /> 까지</ul>
                  </div>
                </div>
                <div className="my-2 lg:my-0 lg:py-2">
                  <h3 className="text-sm font-medium text-gray-500"><label for='detail-link'>상세링크</label></h3>
                  <div className="mt-3 pl-8 pr-5 space-y-1 text-[0.95rem] text-gray-600 hover:text-indigo-600">
                    <input className="border p-1 w-full rounded" type="text" name='detail-link' id='detail-link' placeholder='ex ) https://gonggoo.gbsw.hs.kr' />
                  </div>
                </div>
              </div>
              <form className="algin-bottom">
                <button
                  type="submit"
                  onChange={(e) => setButton(e.target.value)}
                  className="w-full  bg-indigo-600 border border-transparent rounded-md py-3 flex items-center justify-center
                    text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 float-right mb-6 lg:m-0 ">
                  게시하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Post;