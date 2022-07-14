import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Truncate from 'react-truncate';
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [success, setSuccess] = useState(false);
  
  const format = (date) => {
    const day = new Date(date);
    return day.getFullYear() + "-" + (day.getMonth()+1) + "-" + day.getDate();
  }

  useEffect(() => {
    loadData();
  },[]);

  const loadData = async () => {
    const result =  await axios.get("/api/product", {withCredentials: true})
    if (result.data.success) {
      setSuccess(true);
    } 
    console.log(result.data)
    setProducts(result.data.product)
  }

  const toTop = () => {
    window.scrollTo({top:0, behavior:'smooth'});
  }

  if (!success) {
    return (
      <div className="bg-slate-50 w-full h-full fixed top-0 flex justify-center items-center">
        <div class="loadingio-spinner-rolling-nujnwn5po0q">
          <div class="ldio-6wvhm66o7gx"><div /></div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-slate-50 overflow-y-auto h-full pb-10">
      <div className="max-w-2xl mx-auto px-4 pb-10 pt-8 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="lg:text-[1.35rem] text-xl font-semibold tracking-tight text-gray-500">공동구매 리스트</h2>

        <div className="mt-6 grid gap-y-10 gap-x-6 grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {!products.length?
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
                      <ul className="flex justify-center">{format(product.date)} <span className="text-[0.9rem] ml-0.5">까지</span></ul>
                  </div>
                  <img
                    src = {product.image}
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