/* eslint-disable @next/next/no-img-element */
import { useGetPersonByIdQuery } from "@/services/KinowayService";
import Head from "next/head";
import { useRouter } from "next/router";

import { BackButton } from "@/UI/BackButton/BackButton";
import { PersonInfo, PersonTabs } from "./components";

import { Heading, Box, Flex, Image } from "@chakra-ui/react";

export const Person = () => {
  const {
    query: { id },
  } = useRouter();
  const { data } = useGetPersonByIdQuery(id);
  console.log(data);
  const { name, enName, photo } = { ...data };

  return (
    <>
      <Head>
        <meta name="description" content={enName} />
        <title>{name}</title>
        <meta property="og:title" content={name} />
        <meta property="og:description" content={enName} />
        <meta property="og:image" content={photo} />
      </Head>
      <Box color="white" className="section">
        <Box
          className="container wrapper"
          paddingBottom={{ base: "50px", md: "100px" }}
        >
          <Flex
            justifyContent="space-between"
            alignItems="center"
            marginBottom={{ base: "25px", sm: "30px" }}
          >
            <BackButton />
          </Flex>
          <Flex
            marginBottom={{ base: "40px", sm: "50px" }}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Box
              position="relative"
              flexShrink={0}
              marginRight={{ base: 0, md: "50px" }}
              marginBottom={{ base: "20px", sm: "30px" }}
              width={{ base: "100%", md: "fit-content" }}
              w={{ base: "250px", sm: "300px" }}
              h={{ base: "166px", sm: "auto" }}
              overflow="hidden"
            >
              <Image
                src={photo}
                alt={name}
                borderRadius="5px"
                objectFit="cover"
                backgroundColor="gray.800"
                width={{ base: "250px", sm: "300px" }}
                height="auto"
              />
            </Box>
            <Box className="right" width={{ base: "100%", md: "auto" }}>
              <Heading
                variant="h1"
                fontWeight="800px"
                fontSize={{ base: "26px", sm: "40px" }}
                lineHeight={{ base: "33px", sm: "48px" }}
                maxWidth="650px"
                marginBottom={{ base: "15px", sm: "20px" }}
                color="white"
              >
                {name}
              </Heading>
              <Heading
                display="block"
                fontWeight={300}
                fontSize="20px"
                lineHeight="28px"
                marginBottom="25px"
                color="white"
              >
                {enName}
              </Heading>
              <Heading
                variant="h2"
                fontWeight={800}
                fontSize={{ base: "20px", sm: "24px" }}
                lineHeight={{ base: "30px", sm: "30px" }}
                marginBottom="20px"
                color="white"
              >
                О персоне
              </Heading>
              <PersonInfo data={data} />
            </Box>
          </Flex>
          <PersonTabs data={data} />
        </Box>
      </Box>
    </>
  );
};
