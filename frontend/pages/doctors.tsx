import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Doctor } from "../@types/Doctor";
import DoctorList from "../components/doctorList";
import FilterTabs from "../components/filterTabs";
import HeroTextBlock from "../components/heroTextBlock";

type Props = {
  doctors: Doctor[];
};

const DoctorsPage: NextPage<Props> = ({ doctors }) => {
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  function filterByBestQunoscore(): void {
    setFilteredDoctors(
      [...doctors].sort((d1, d2) => {
        return d2.qunoScoreNumber - d1.qunoScoreNumber;
      })
    );
  }

  function filterByBestReviews(): void {
    setFilteredDoctors(
      [...doctors].sort((d1, d2) => {
        return d2.ratingsAverage - d1.ratingsAverage;
      })
    );
  }

  function filterByLowestPrice(): void {
    setFilteredDoctors(
      [...doctors].sort((d1, d2) => {
        return d1.basePrice - d2.basePrice;
      })
    );
  }

  return (
    <>
      <Head>
        <title>Doctors</title>
      </Head>
      <HeroTextBlock />
      <FilterTabs
        filterOptions={[
          { text: "Best Qunoscore", onClick: filterByBestQunoscore },
          { text: "Best reviews", onClick: filterByBestReviews },
          { text: "Lowest price", onClick: filterByLowestPrice },
        ]}
      />
      <DoctorList doctors={filteredDoctors} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  res,
}) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const doctorsResponse = await fetch(`http://localhost:4000/`);
  const doctors = (await doctorsResponse.json()) as Doctor[];
  return { props: { doctors } };
};

export default DoctorsPage;
