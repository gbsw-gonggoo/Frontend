import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: '칠성사이다',
    image: {
      src: '/칠성사이다.png',
    },
    price: '15,720',
    pricePerPiece: '524',
    applicants: '4',
    recruitment: '30',
    date: '2022-04-30',
  },
  {
    id: 2,
    name: '칠성사이다',
    image: {
      src: '/cat.jpg',
    },
    price: '15,720',
    pricePerPiece: '524',
    applicants: '4',
    recruitment: '30',
    date: '2022-04-30',
  },
  {
    id: 3,
    name: '칠성사이다',
    image: {
      src: '/칠성사이다.png',
    },
    price: '15,720',
    pricePerPiece: '524',
    applicants: '4',
    recruitment: '30',
    date: '2022-04-30',
  },
  {
    id: 4,
    name: '칠성사이다',
    image: {
      src: '/칠성사이다.png',
    },
    price: '15,720',
    pricePerPiece: '524',
    applicants: '4',
    recruitment: '30',
    date: '2022-04-30',
  },
  {
    id: 5,
    name: '칠성사이다',
    image: {
      src: '/칠성사이다.png',
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
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto px-4 pt-24 pb-10 lg:pt-30 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">공동구매 리스트</h2>

        <div className="mt-6 grid gap-y-10 gap-x-6 grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link to={`/product/${product.id}`}>
              <div key={product.id} className="group relative border rounded-md">
                <div className="hover-group w-full min-h-80 bg-white p-4 border-b aspect-w-1 aspect-h-1 rounded-t-md overflow-hidden h-48 lg:h-80 lg:aspect-none">
                  <div className="hover-text list-disc text-sm space-y-2">
                      <ul>{product.applicants} / {product.recruitment} 개</ul>
                      <ul>{product.date} 까지</ul>
                  </div>
                  <img
                    src={process.env.PUBLIC_URL + product.image.src}
                    alt={product.name}
                    className="hover-img w-full h-full object-center object-cover rounded-sm img-text-hover"
                  />
                </div>
                <div className="m-1 lg:m-2 lg:flex lg:justify-between p-3">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                    </h3>
                  </div>
                  <div className="lg:flex lg:justify-end">
                    <p className="text-sm text-gray-500 lg:float-left lg:mr-1">{product.price}원</p>
                    <p className="text-sm text-gray-500">(개당 {product.pricePerPiece}원)</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductList;