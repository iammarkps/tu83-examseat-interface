import React from 'react'
import { Box, Button } from '@chakra-ui/core'
import { SimpleImg } from 'react-simple-img'

import { Card } from './Card'

export const Info = ({ setReadInfo }) => (
  <Card p={[4, 8]} mb={[4, 8]}>
    <Box minWidth="50vw">
      <SimpleImg
        src="/assets/item.jpg"
        height={720}
        width={960}
        applyAspectRatio={true}
      ></SimpleImg>
    </Box>

    <Box mt={[4, 8]} minWidth="50vw">
      <SimpleImg
        src="/assets/schedule.jpg"
        height={720}
        width={960}
        applyAspectRatio={true}
      ></SimpleImg>
    </Box>

    <Button
      mt={4}
      variantColor="teal"
      width="100%"
      fontFamily="heading"
      onClick={() => setReadInfo(true)}
    >
      ต่อไป
    </Button>
  </Card>
)
