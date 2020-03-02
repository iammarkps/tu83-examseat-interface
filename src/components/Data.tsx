import React from 'react'
import { Box, Heading, Text, Button } from '@chakra-ui/core'

import { Card } from './Card'

export const Data = ({ setData }) => {
  return (
    <Card>
      <Heading size="xl">ข้อมูลผู้สมัคร</Heading>
      <Box mt={2} fontSize="lg">
        <Text>
          <Box as="span" fontWeight="bold">
            เลขประจำตัวสอบ:{' '}
          </Box>
          12345
        </Text>
        <Text>
          <Box as="span" fontWeight="bold">
            ชื่อ:{' '}
          </Box>
          นายเรียนเด่น
        </Text>
        <Text>
          <Box as="span" fontWeight="bold">
            นามสกุล:{' '}
          </Box>
          เล่นดี
        </Text>
        <Text>
          <Box as="span" fontWeight="bold">
            ประเภท:{' '}
          </Box>
          โควต้าโอลิมปิกวิชาการ
        </Text>
        <Text>
          <Box as="span" fontWeight="bold">
            แผนการเรียน:{' '}
          </Box>
          วิทย์-คณิต
        </Text>
        <Text>
          <Box as="span" fontWeight="bold">
            อาคาร:{' '}
          </Box>
          IMPACT FORUM
        </Text>
        <Text>
          <Box as="span" fontWeight="bold">
            ห้อง:{' '}
          </Box>
          Banquet 101
        </Text>
        <Text>
          <Box as="span" fontWeight="bold">
            กลุ่ม:{' '}
          </Box>
          -
        </Text>
        <Text>
          <Box as="span" fontWeight="bold">
            ส่วนที่:{' '}
          </Box>
          1
        </Text>
        <Text>
          <Box as="span" fontWeight="bold">
            แถวที่:{' '}
          </Box>
          277
        </Text>
      </Box>
      <Button
        onClick={() => setData({})}
        mt={4}
        fontFamily="heading"
        variantColor="teal"
      >
        ย้อนกลับ
      </Button>
    </Card>
  )
}
