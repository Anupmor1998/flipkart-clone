import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Input } from '@chakra-ui/input';
import { Box, Flex } from '@chakra-ui/layout';
import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <Box className='navbar'>
      <Box className='nav-left'>
        <Image
          className='nav-logo'
          src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fk-plus_3b0baa.png'
        />
      </Box>
      <Box className='nav-center'>
        <Input className='search' type='text' />
      </Box>
      <Box className='nav-right'>
        <Flex>
          <Button className='nav-btn'>Login</Button>
          <Button className='nav-btn'>More</Button>
          <Button className='nav-btn'>Cart</Button>
        </Flex>
      </Box>
    </Box>
  );
}

export default Navbar;
