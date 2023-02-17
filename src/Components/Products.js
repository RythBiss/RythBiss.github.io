import React, { useEffect, useState } from 'react'
import { client, urlFor } from '../lib/client';
import Card from './Card';
import ImageBanner from './ImageBanner';
import HexArt from '../images/hex-art.svg'



export default function Products() {

  const [categories, setCategories] = useState(null);
  const [search, setSearch] = useState('');


  const handleSearchChange =(e) => {
    console.log(e.target.value)
    setSearch(e.target.value)
  }

  //getProducts should be exported so it can be used where its needed. The useEffect below it can be deleted once export is complete.
  const getCategories = async() => {
    const query = '*[_type == "category"]';
    const categories = await client.fetch(query);
  
    return {
      props: { categories }
    }

  }
  const getProducts = async() => {
    const query = '*[_type == "product" && category._ref == "6a7dee27-f59e-4d19-92a9-a110a8bcf9ee"]';
    const products = await client.fetch(query);

    return {
      props: { products }
    }
  }
  
  useEffect(() => {
    getCategories()
    .then(res => {
      setCategories(res.props.categories);
    })

    getProducts()
    .then(res => console.log('products: ', res))
  }, [])

  return (
    <>
      <ImageBanner smallText='Catagories' bigText='Browse Our Products' image='https://gbdmagazine.com/wp-content/uploads/2021/06/marc-thorpe-sharp-house-gbd-magazine-06.jpg'/>
      <div className='page-segment products-layout'>
        <form  className='product-search'>
          <h2>Browse Products By Catagory</h2>
          <div className='search-container'>
            <input className='search' name='Search' type='text' value={search} onChange={handleSearchChange} placeholder="Search"/>
          </div>
        </form>
        <div className='products'>
          {categories !== null &&
            categories.map((element, index) => {
              return <Card key ={index} text={element.name} image={urlFor(element.image[0].asset).width(256).url()} />
            })
          }
        </div>
        <div className='art-container'>
          <img className='hex-art' src={HexArt} alt='hex art'/>
          <img className='hex-art alt-position' src={HexArt} alt='hex art'/>
        </div> 
      </div>
    </>
  )
}
