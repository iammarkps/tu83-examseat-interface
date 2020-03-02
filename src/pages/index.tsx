import React, { useState } from 'react'
import { Box, Flex, Heading } from '@chakra-ui/core'
import { SimpleImg } from 'react-simple-img'
import styled from '@emotion/styled'

import { Login } from '../components/Login'
import { Data } from '../components/Data'
import { isEmpty } from '../utils/isEmpty'

const Background = styled.div`
  height: 100%;
  filter: blur(0.75em);
  transform: scale(1.1);

  picture {
    height: 100%;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`

export default () => {
  const [data, setData] = useState({})

  return (
    <React.Fragment>
      <Box
        zIndex={-9999}
        width="100vw"
        height="100%"
        overflow="hidden"
        position="fixed"
        objectFit="cover"
      >
        <Background>
          <picture>
            <source srcSet="/assets/background/bg.webp" type="image/webp" />
            <source
              srcSet="/assets/background/bg,w_500.jpg 500w,/assets/background/bg,w_1378.jpg 1378w,/assets/background/bg,w_1971.jpg 1971w,/assets/background/bg,w_2453.jpg 2453w,/assets/background/bg,w_2903.jpg 2903w,/assets/background/bg,w_3307.jpg 3307w,/assets/background/bg,w_3675.jpg 3675w,/assets/background/bg,w_4026.jpg 4026w,/assets/background/bg,w_4356.jpg 4356w,/assets/background/bg.jpg 4477w"
              src="/assets/background/bg.jpg"
              type="image/jpeg"
              sizes="(max-width: 4477px) 100vw, 4477px"
            />
            <img
              loading="eager"
              decoding="async"
              srcSet="/assets/background/bg,w_500.jpg 500w,/assets/background/bg,w_1378.jpg 1378w,/assets/background/bg,w_1971.jpg 1971w,/assets/background/bg,w_2453.jpg 2453w,/assets/background/bg,w_2903.jpg 2903w,/assets/background/bg,w_3307.jpg 3307w,/assets/background/bg,w_3675.jpg 3675w,/assets/background/bg,w_4026.jpg 4026w,/assets/background/bg,w_4356.jpg 4356w,/assets/background/bg.jpg 4477w"
              src="/assets/background/bg.jpg"
              alt="background"
              sizes="(max-width: 4477px) 100vw, 4477px"
            />
          </picture>
        </Background>
      </Box>
      <Flex
        align="center"
        justify="center"
        height="100%"
        overflow="auto"
        wrap="wrap"
      >
        <Box py={[8, 0]} px={[4, 0]}>
          <Box mx="auto" textAlign="center">
            <SimpleImg
              src="/assets/logo.png"
              alt="logo"
              height="200px"
              placeholder="false"
            ></SimpleImg>
            <Heading color="white" fontSize={['2xl', '3xl']}>
              โรงเรียนเตรียมอุดมศึกษา
            </Heading>
          </Box>
          {isEmpty(data) ? (
            <Login setData={setData} />
          ) : (
            <Data setData={setData} />
          )}
        </Box>
      </Flex>
    </React.Fragment>
  )
}
