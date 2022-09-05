import { useRouter } from "next/router";
import { GetServerSideProps, NextPage } from "next";

import { initStore } from "@/store/store";
import { getFilmByName } from "@/services/KinowayService";
import { SearchResults } from "@/components/screens/SearchResults/SearchResults";
import { Layout } from "../../components/Layout/Layout";

const searchResults: NextPage = () => {
  return (
    <Layout>
      <div className="container">
        <SearchResults />
      </div>
    </Layout>
  );
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

export default searchResults;
