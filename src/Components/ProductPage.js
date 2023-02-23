import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { client, urlFor } from '../lib/client';
import ImageBanner from './ImageBanner';
import HexArt from '../images/hex-art.svg'
import { featureMissingAlert } from '../exports';


export default function ProductPage() {

    const [searchParams, setSearchParams] = useSearchParams();

    const productId = searchParams.get('id');
    const [productData, setProductData] = useState(null);

    const [quantityValue, setQuantityValue] = useState(1);
    const [albumPos, setAlbumPos] = useState(0);

    const verifyQuantity = (input) => {
        if(input > 0 || input === ''){
            setQuantityValue(input)
        }else{
            setQuantityValue(1)
        }
    }

    const changeImage = (input) => {
        const albumLength = productData.image.length;

        if(albumPos + input >= 0 && albumPos + input < albumLength){
            setAlbumPos(albumPos + input)
        }
    }

    useEffect(() => {
        console.log(albumPos)
    }, [albumPos])

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
            <h1 className='product-name'>{productData.name}</h1>
            <div className='product-info-container'>
                <div className='product-image-frame'>
                    <img src={urlFor(productData?.image[albumPos].asset).url()} />
                    {productData?.image.length > 1 &&
                        <>
                            <div className='album-controls' >
                                <button onClick={() => changeImage(-1)} className='red-button'>Prev</button>
                                <h3>{albumPos+1}</h3>
                                <button onClick={() => changeImage(1)} className='red-button'>Next</button>
                            </div>
                        </>
                    }
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
                    <div className='product-purchase'>
                        <input type='number' name='product-quantity' value={quantityValue} onChange={(e) => verifyQuantity(e.target.value)} />
                        <button className='white-button' onClick={featureMissingAlert}>Add To Cart</button>
                    </div>
                </div>
            </div>
            <div  className='product-details' >
            {productData &&
            <>
                <p>{productData?.details}</p>
                <ul>
                    {productData?.bullets?.map((element, index) => {
                        return <li key={index}>{element}</li>
                        })
                    }
                </ul>
            </>
            }
            </div>
        </div>
    }
    </>
  )
}