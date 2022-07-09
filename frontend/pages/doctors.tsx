import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { Doctor } from "../@types/Doctor";
import DoctorList from "../components/doctorList";
import FilterTabs from "../components/filterTabs";
import HeroTextBlock from "../components/heroTextBlock";

type Props = {
  doctors: Doctor[];
};

const DoctorsPage: NextPage<Props> = ({ doctors }) => {
  return (
    <>
      <Head>
        <title>Doctors</title>
      </Head>
      <HeroTextBlock />
      <FilterTabs />
      <DoctorList doctors={doctors} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const res = await fetch(`http://localhost:4000/`);
  const doctors = (await res.json()) as Doctor[];
  return { props: { doctors } };
};

export default DoctorsPage;
