import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Box, Container, Grid, SimpleGrid, Skeleton, Text, Title } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import HeaderComponent from "../../components/header";
import { query, collection, where, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { CollectionName } from "../../components/data/constants";
import { db } from "../../components/data/firebaseConfig";
import { CarouselCard } from "../../components/CarouselCard";

export default function Rooms() {
  const [products, setProducts] = useState<ProductProps[]>();
  useEffect(() => {
    const run = async () => {
      const q = query(collection(db, CollectionName.PRODUCTS), where("status", "==", true));
      const querySnapshot = await getDocs(q);
      let data: ProductProps[] = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data() } as ProductProps);
      });
      setProducts(data);
    };
    run();
  }, []);
  return (
    <div>
      <Head>
        <title>Fairmount Vagamon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container my={20} py={40} size="lg">
          <Grid>
            <Grid.Col span={12}>
              <Title weight={100}>Rooms and Rates</Title>
            </Grid.Col>
            <Grid.Col span={12}>
              <SimpleGrid cols={3} pt={30}>
                {products?.map((data: ProductProps) => (
                    <CarouselCard key={data.name} data={data}/>
                ))}
                {!products && <>
                <Skeleton height={400}/>
                <Skeleton height={400}/>
                <Skeleton height={400}/>
                </>}
              </SimpleGrid>
            </Grid.Col>
          </Grid>
        </Container>
      </main>

      <footer></footer>
    </div>
  );
}