import React from 'react'
import { Box, Heading, Text, Button } from '@chakra-ui/core'

import { Card } from './Card'
import { User } from '../@types/data'

interface IDataProps {
  setData: React.Dispatch<React.SetStateAction<{} | User>>
  user: User
}

export const Data: React.FC<IDataProps> = ({ setData, user }) => {
  return (
    <Card>
      <Heading size="xl">ข้อมูลผู้สมัคร</Heading>
      <Box mt={2} fontSize="lg">
        <Text>
          <Box as="span" fontWeight="bold">
            เลขประจำตัวสอบ:{' '}
          </Box>
          {user.code}
        </Text>
        <Text>
          <Box as="span" fontWeight="bold">
            ชื่อ:{' '}
          </Box>
          {user.firstName}
        </Text>
        <Text>
          <Box as="span" fontWeight="bold">
            นามสกุล:{' '}
          </Box>
          {user.lastName}
        </Text>
        <Text>
          <Box as="span" fontWeight="bold">
            ประเภท:{' '}
          </Box>
          {user.type}
        </Text>
        <Text>
          <Box as="span" fontWeight="bold">
            แผนการเรียน:{' '}
          </Box>
          {user.plan}
        </Text>
        <Text>
          <Box as="span" fontWeight="bold">
            อาคาร:{' '}
          </Box>
          {user.building}
        </Text>
        <Text>
          <Box as="span" fontWeight="bold">
            ห้อง:{' '}
          </Box>
          {user.room}
        </Text>
        <Text>
          <Box as="span" fontWeight="bold">
            กลุ่ม:{' '}
          </Box>
          {user.group}
        </Text>
        <Text>
          <Box as="span" fontWeight="bold">
            ส่วนที่:{' '}
          </Box>
          {user.sec}
        </Text>
        <Text>
          <Box as="span" fontWeight="bold">
            แถวที่:{' '}
          </Box>
          {user.row}
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
