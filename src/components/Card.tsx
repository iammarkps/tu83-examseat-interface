import { Box } from '@chakra-ui/core'

export const Card = ({ children }) => (
  <Box
    boxShadow="0 5px 10px rgba(0, 0, 0, 0.12)"
    p={8}
    mt="24px"
    borderRadius="8px"
    backgroundColor="white"
  >
    {children}
  </Box>
)
