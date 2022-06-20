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
    0,
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
  }, {
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

function readImage(input) {
  // 인풋 태그에 파일이 있는 경우
  if(input.files && input.files[0]) {
      // 이미지 파일인지 검사 (생략)
      // FileReader 인스턴스 생성
      const reader = new FileReader()
      // 이미지가 로드가 된 경우
      reader.onload = e => {
          const previewImage = document.getElementById("preview-image")
          previewImage.src = e.target.result
      }
      // reader가 이미지 읽도록 하기
      reader.readAsDataURL(input.files[0])
  }
}

const Post = () => {
  const [value, setValue] = useState(user.value ? user.value : 1)
  const onChange = e => {
    setValue(e.target.value);
  }
  const onClick = e => {
    if (user.value) {
      alert('취소하시겠습니까?')
      user.value = ''
    } else {
      alert('신청하시겠습니까?');
      user.value = value;
    }
  }
  return (
    <div className="bg-white lg:pt-4 h-full static">
      <div className="max-w-2xl h-full lg:h-auto overflow-y-scroll lg:overflow-auto mx-auto sm:px-6 lg:mt-28 lg:max-w-[68rem] lg:p-8 lg:grid lg:grid-cols-11 lg:gap-x-8 lg:border rounded-md">
        {/* Image gallery */}
        {/* <div class="image-container">
          <img style="width: 500px;" id="preview-image" src="https://dummyimage.com/500x500/ffffff/000000.png&text=preview+image"/>
          <input style="display: block;" type="file" id="input-image"/>
        </div> */}
        <div className="aspect-w-3 aspect-h-4 lg:rounded-md lg:p-6 p-4 border-y lg:border overflow-hidden h-90 lg:h-[34rem] lg:col-span-6">
          <img 
          // className="lg:h-[29rem] w-full overflow-hidden" 
            className="w-full lg:h-[28rem] object-center object-cover lg:rounded-sm mb-4"
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
                <h3 className="text-[0.95rem] font-medium text-gray-600 w-20"><label for='object'>물품명 : </label></h3>
                <input className="border p-1 mx-2 w-64 rounded px-2 " type="text" name='object' id='object' placeholder='ex ) 칠성사이다' />
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
              <h3 className="text-[0.95rem] font-medium text-gray-600 w-20"><label for='price'>상세내용 : </label></h3>
              <textarea className="border p-1 mx-2 w-64 rounded px-2 " type="number" name='price' id='price' placeholder='ex ) 구매해주세요'/>
                {/* <input className="border p-1 mx-2 w-64 rounded px-2 " type="number" name='price' id='price' placeholder='상세내용을 입력해주세요' /> */}
              </div>
            </div>
            <div className="py-2 lg:p-0 lg:mb-6 lg:pt-0 lg:col-start-1 lg:col-span-2">
              <div className="my-2 lg:my-2">
                <h3 className="text-sm font-medium text-gray-500">안내사항</h3>
                <div className="mt-3 pl-4 list-disc text-[0.95rem] space-y-1">
                  <ul className="flex items-center"><p className="w-20" for="count1">목표수량 : </p><input className="border p-1 mx-2 w-40 rounded" type='number' name="count1" id="count1" placeholder='ex ) 10' />개</ul>
                  <ul className="flex items-center"><p className="w-20" for="count2">마감수량 : </p><input className="border p-1 mx-2 w-40 rounded" type='number' name="count2" id="count2" placeholder='ex ) 30' />개</ul>
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
                onClick={onClick}
                className="w-full  bg-indigo-600 border border-transparent rounded-md py-3 flex items-center justify-center
                  text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 float-right mb-6 lg:m-0 ">
                게시하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Post;