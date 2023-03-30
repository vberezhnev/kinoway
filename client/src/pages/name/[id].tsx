import { GetServerSideProps, NextPage } from "next";
import { getPersonById } from "@/services/KinowayService";
import { initStore } from "@/store/store";
import { Person } from "@/screens/Person/Person";
import { Layout } from "@/components/Layout/Layout";

const PersonPage: NextPage = () => {
  return <Person />;
};

export const getServerSideProps: GetServerSideProps = async (params) => {
  const store = initStore();

  await store.dispatch(getPersonById.initiate(params.query.id));

  return { props: { initialReduxState: store.getState() } };
};

export default PersonPage;
