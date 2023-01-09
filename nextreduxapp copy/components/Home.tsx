import { Center } from "@chakra-ui/react";
import Head from "next/head";
import { FcAddImage, FcBarChart } from "react-icons/fc";
import Card from "../components/Card";
export default function Home(): JSX.Element {
  const featuresList = [
    {
      title: "Feature 1",
      text: "This is a feature description for feature 1 in the home page of the app. ",
      icon: FcAddImage,
    },
    {
      title: "Feature 2",
      text: "This is a feature description for feature 1 in the home page of the app. ",
      icon: FcBarChart,
    },
    {
      title: "Feature 3",
      text: "This is a feature description for feature 1 in the home page of the app. ",
      icon: FcAddImage,
    },
  ];
  return (
    <>
      <div className="container">
        <Head>
          <title>Coding Shodkk</title>
          <meta
            name="description"
            content="Search Find Learn Save Share Grow"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="w-full">
          <div className="flex justify-center items-center">
            <Center>
              <Card featuresList={featuresList} />
            </Center>
          </div>
        </main>
      </div>
    </>
  );
}
