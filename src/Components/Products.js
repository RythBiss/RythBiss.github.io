import React, { useEffect, useState } from 'react'
import { client, urlFor } from '../lib/client';
import Card from './Card';
import ImageBanner from './ImageBanner';
import HexArt from '../images/hex-art.svg'
import { createSearchParams, useNavigate } from 'react-router-dom';
import AnimatedButton from './AnimatedButton';



export default function Products() {

  const nav = useNavigate();

  const [categories, setCategories] = useState(null);
  const [products, setProducts] = useState(null);
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
  const getProducts = async(id) => {
    console.log('id passed is ', id)
    const query = `*[_type == "product" && category._ref == "${id}"]`;
    const products = await client.fetch(query);

    return {
      props: { products }
    }
  }

  const navToProduct = (id) => {
    const params = {id: id};

    nav({
      pathname:'/product',
      search: `${createSearchParams(params)}`
    })
  }
  
  useEffect(() => {
    getCategories()
    .then(res => {
      setCategories(res.props.categories);
    })
  }, [])

  return (
    <>
      <ImageBanner smallText='Catagories' bigText='Browse Our Products' image='https://gbdmagazine.com/wp-content/uploads/2021/06/marc-thorpe-sharp-house-gbd-magazine-06.jpg'/>
      <div className='page-segment products-layout'>
        <form  className='product-search'>
          <h2>Browse Products By Catagory</h2>
          {/* <div className='search-container'>
            <input className='search' name='Search' type='text' value={search} onChange={handleSearchChange} placeholder="Search"/>
          </div> */}
        </form>
        <div className='products'>
          {categories !== null &&
            <>
              { !products ?
                categories.map((element, index) => {
                  return <Card key ={index} text={element.name} image={urlFor(element.image[0].asset).width(256).url()} onClick={() => getProducts(element._id).then(res => setProducts(res.props.products))} />
              })
              :
                products.map((element, index) => {
                  return <Card key ={index} text={element.name} image={urlFor(element.image[0].asset).width(256).url()} onClick={() => navToProduct(element._id)} />
              })
              }
            </>
          }
        </div>
        { products &&
          <AnimatedButton onClick={() => setProducts(null)} className='red-button' text='Back to Categories' />
        }
        <div className='art-container'>
          <img className='hex-art' src={HexArt} alt='hex art'/>
          <img className='hex-art alt-position' src={HexArt} alt='hex art'/>
        </div> 
      </div>
    </>
  )
}
