import { Image } from '@chakra-ui/image';
import { Box, SimpleGrid, Text } from '@chakra-ui/layout';
import React from 'react';
import './products.css';

function Products({ products }) {
  return (
    <SimpleGrid className='products' columns={[1, 2, 3, 3]} spacingX={18}>
      {products
        ? products.map((p) => (
            <Box key={p.id} className='card'>
              <Image className='product-img' src={p.url} />
              <Text>{p.name}</Text>
              <Text>{p.title}</Text>
              <Text>{p.price}</Text>
            </Box>
          ))
        : null}
    </SimpleGrid>
  );
}

export default Products;
