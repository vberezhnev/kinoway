import { GetServerSideProps, NextPage } from "next";
import { Film } from "@/components/screens/Film/Film";
import { getFilmByName } from "@/services/KinowayService";
import { initStore } from "@/store/store";

const FilmPage: NextPage = () => {
  return <Film />;
};

export const getServerSideProps: GetServerSideProps = async (params) => {
  const store = initStore();
  const state = store.getState();
  const id = params.query.id;
  const { filters } = state.filtersReducer;
  const { page } = state.paginationReducer;

  await store.dispatch(getFilmByName.initiate({ id, page, filters }));

  return { props: { initialReduxState: store.getState() } };
};
export default FilmPage;
