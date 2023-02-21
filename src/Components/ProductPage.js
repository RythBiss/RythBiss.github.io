import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { client, urlFor } from '../lib/client';
import ImageBanner from './ImageBanner';
import HexArt from '../images/hex-art.svg'
import RedBar from './RedBar';


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
    }, [productData])
    

  return (
    <>
    <ImageBanner image='https://upload.wikimedia.org/wikipedia/commons/4/42/Hoover_Dam%2C_Boulder.jpg' bigText={`${productData?.name}`} />
    {productData &&
        <div className='product-page'>
            <div className='art-container'>
                <img className='hex-art' src={HexArt} alt='hex art'/>
                <img className='hex-art alt-position' src={HexArt} alt='hex art'/>
            </div>
            <RedBar text={`${productData.name}`} />
            <div className='product-info-container'>
                <div className='product-image-frame'>
                    <img src={urlFor(productData?.image[0].asset).url()} />
                </div>
                <div className='product-specs-container'>
                    <div className='product-specs'>
                        <h2 className='price'>{`Starting at $${productData.price}`}</h2>
                        <div className='power-list'>
                            <h2>Power Options:</h2>
                            <ul>
                                {productData.powerOption.map((element, index) => {
                                    return <li key={index}>{element}</li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <p className='product-details'>{productData.details}</p>
                </div>
            </div>

        </div>
    }
    </>
  )
}