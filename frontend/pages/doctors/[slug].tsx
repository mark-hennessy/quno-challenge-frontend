import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { Doctor } from "../../@types/Doctor";

type Props = {
  doctor: Doctor;
};

const DoctorPage: NextPage<Props> = ({ doctor }) => {
  return (
    <>
      <Head>
        <title>Doctor Profile</title>
      </Head>
      <h1>{doctor.name}</h1>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  res,
  query,
}) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const doctorResponse = await fetch(`http://localhost:4000/${query.slug}`);
  const doctor = (await doctorResponse.json()) as Doctor;
  return { props: { doctor } };
};

export default DoctorPage;
