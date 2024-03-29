import {
  Box,
  Button,
  chakra,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  useColorModeValue,
  useDisclosure,
  VisuallyHidden,
  VStack,
} from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';

import Image from './Image';

import pokeball from '@/public/pokeball.png';

const Header = () => {
  const bg = useColorModeValue('white', 'gray.800');
  const mobileNav = useDisclosure();

  return (
    <chakra.header
      bg={bg}
      w="full"
      px={{
        base: 2,
        sm: 4,
      }}
      py={4}
      shadow="md"
    >
      <Flex alignItems="center" justifyContent="space-between" mx="auto">
        <Flex>
          <chakra.a
            href="/"
            title="Choc Home Page"
            display="flex"
            alignItems="center"
          >
            <Image src={pokeball} width={24} height={24} />
            <VisuallyHidden>Choc</VisuallyHidden>
          </chakra.a>
          <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
            Pokedex
          </chakra.h1>
        </Flex>
        <HStack display="flex" alignItems="center" spacing={1}>
          <HStack
            spacing={1}
            mr={1}
            color="purple.500"
            display={{
              base: 'none',
              md: 'inline-flex',
            }}
          >
            <Button variant="ghost">Features</Button>
            <Button variant="ghost">Pricing</Button>
            <Button variant="ghost">Blog</Button>
            <Button variant="ghost">Company</Button>
            <Button variant="ghost">Sign in</Button>
          </HStack>
          <Button colorScheme="purple" size="sm">
            Get Started
          </Button>
          <Box
            display={{
              base: 'inline-flex',
              md: 'none',
            }}
          >
            <IconButton
              display={{
                base: 'flex',
                md: 'none',
              }}
              aria-label="Open menu"
              fontSize="20px"
              color="gray.800"
              _dark={{
                color: 'inherit',
              }}
              variant="ghost"
              icon={<AiOutlineMenu />}
              onClick={mobileNav.onOpen}
            />

            <VStack
              pos="absolute"
              top={0}
              left={0}
              right={0}
              display={mobileNav.isOpen ? 'flex' : 'none'}
              flexDirection="column"
              p={2}
              pb={4}
              m={2}
              bg={bg}
              spacing={3}
              rounded="sm"
              shadow="sm"
            >
              <CloseButton
                aria-label="Close menu"
                onClick={mobileNav.onClose}
              />

              <Button w="full" variant="ghost">
                Features
              </Button>
              <Button w="full" variant="ghost">
                Pricing
              </Button>
              <Button w="full" variant="ghost">
                Blog
              </Button>
              <Button w="full" variant="ghost">
                Company
              </Button>
              <Button w="full" variant="ghost">
                Sign in
              </Button>
            </VStack>
          </Box>
        </HStack>
      </Flex>
    </chakra.header>
  );
};

export default Header;
