import { Box, Flex } from '@chakra-ui/layout';
import { useState } from 'react';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import { productData } from './data/productData';
import Products from './components/Products/Products';
import SideBar from './components/SideBar/SideBar';

function App() {
  const [newProduct, setNewProduct] = useState(productData);
  const [selectedSize, setSelectedSize] = useState([]);
  const low = () => {
    setNewProduct([...newProduct].sort((a, b) => a.price - b.price));
    console.log(newProduct);
  };
  const high = () => {
    setNewProduct([...newProduct].sort((a, b) => b.price - a.price));
    console.log(newProduct);
  };
  const clear = () => {
    setNewProduct(productData);
    console.log(newProduct);
  };
  const filterHandle = (e) => {
    setSelectedSize([...selectedSize, e.target?.value]);
    if (e.target.checked) {
      setNewProduct([
        ...newProduct.filter((p) => p.size.includes(e.target.value)),
      ]);
      console.log(e.target.value);
    } else {
      let index = selectedSize?.indexOf(e.target?.value);
      if (index !== -1) {
        selectedSize.splice(index, 1);
        setSelectedSize(selectedSize);
      }
      const [filteredProducts] = selectedSize.map((size) =>
        productData.filter((a) => a.size.includes(size))
      );
      setNewProduct(filteredProducts?.length ? filteredProducts : productData);
    }
  };
  return (
    <Box className='App'>
      <Navbar />
      <Flex>
        <SideBar
          low={low}
          high={high}
          clear={clear}
          filterHandle={filterHandle}
        />
        <Products products={newProduct} />
      </Flex>
    </Box>
  );
}

export default App;
