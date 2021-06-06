import { Button } from '@chakra-ui/button';
import { Checkbox } from '@chakra-ui/checkbox';
import { Box, Text } from '@chakra-ui/layout';
import React from 'react';
import './sidebar.css';

function SideBar({ low, high, clear, filterHandle }) {
  return (
    <Box className='sidebar'>
      <Button className='btn' onClick={low}>
        Price - Low To High
      </Button>
      <Button className='btn' onClick={high}>
        Price - High To Low
      </Button>
      <Button className='btn' mb={3} onClick={clear}>
        Clear
      </Button>
      <hr />
      <Text className='size'>Sizes</Text>
      <Box className='checkbox'>
        <Checkbox value='S' onChange={filterHandle}>
          S
        </Checkbox>
        <Checkbox value='M' onChange={filterHandle}>
          M
        </Checkbox>
        <Checkbox value='L' onChange={filterHandle}>
          L
        </Checkbox>
        <Checkbox value='XL' onChange={filterHandle}>
          XL
        </Checkbox>
      </Box>
    </Box>
  );
}

export default SideBar;
