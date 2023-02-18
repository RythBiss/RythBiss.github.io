import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import { client } from '../lib/client';

export default function ProductPage() {

    const [searchParams, setSearchParams] = useSearchParams();

    const productId = searchParams.get('id');

    useEffect(() => {
        const getProductInfo = async() => {
            const query = `*[_type == "product" && _id == "${productId}"]`;
            const productInfo = await client.fetch(query);

            return productInfo;
        }

        getProductInfo()
        .then(res => console.log(res));

    }, [])

  return (
    <div>ProductPage</div>
  )
}