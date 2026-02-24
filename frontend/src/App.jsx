import React,{ useState , useEffect }from 'react'
import axios from "axios"
import ProductCard from './components/ProductCard'


const App = () => {

  const [product, setproduct] = useState(null)

  useEffect(()=>{
    axios.get("http://localhost:3000/api/products/get-item")
    .then(response=>{
      setproduct(response.data.product)
      console.log(response.data.product)
    })
    .catch(()=>{})
  },[])

  const handleBuy = (p) => {
    console.log('buy', p)
    alert(`Proceed to buy ${p.title} for ${p.price.currency} ${p.price.amount/100} rs`)
  }

  return (
    <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',padding:'24px',background:'#f7fafc'}}>
      <ProductCard product={product} onBuy={handleBuy} />
    </div>
  )
}

export default App
