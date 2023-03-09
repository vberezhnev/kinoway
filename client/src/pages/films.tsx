import { GetStaticProps, NextPage } from "next";
import { Films } from "@/components/screens/Films/Films";
import { getFilms } from "@/services/KinowayService";
import { initStore } from "@/store/store";
import { Layout } from "@/components/Layout/Layout";

const FilmsPage: NextPage = () => {
  return <Films />;
};

export const getStaticProps: GetStaticProps = async () => {
  const store = initStore();
  const state = store.getState();
  const { filters } = state.filtersReducer;
  const { page } = state.paginationReducer;

  await store.dispatch(getFilms.initiate({ page, filters }));

  return { props: { initialReduxState: store.getState() } };
};

export default FilmsPage;
