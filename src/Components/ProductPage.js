import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { client, urlFor } from '../lib/client';
import ImageBanner from './ImageBanner';

export default function ProductPage() {

    const [searchParams, setSearchParams] = useSearchParams();

    const productId = searchParams.get('id');
    const [productData, setProductData] = useState(null);

    useEffect(() => {
        const getProductInfo = async() => {
            const query = `*[_type == "product" && _id == "${productId}"]`;
            const productInfo = await client.fetch(query);

            return productInfo;
        }

        getProductInfo()
        .then(res => setProductData(res[0]));
    }, [])

    useEffect(() => {
        console.log(productData)
        console.log(productData?.image[0].asset)
    }, [productData])
    

  return (
    <>
    {productData &&
        <>
            <h1>{productData.name}</h1>
            <img src={urlFor(productData?.image[0].asset).url()} />
            <h2>{`Starting at $${productData.price}`}</h2>
            <ul>
                {productData.powerOption.map((element, index) => {
                    return <li key={index}>{element}</li>
                    })
                }
            </ul>
            <p>{productData.details}</p>
        </>
    }
    </>
  )
}