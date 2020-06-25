import React, { useEffect, useReducer } from 'react';

import Banner from './components/banner';

import { authenticate } from './actions';
import user, { initialState } from './reducers/user';

// const initialState = { name: 'John' };
// const MainContext = React.createContext(initialState);

function App() {
  const [state, dispatch] = useReducer(user, initialState);

  useEffect(() => {
    authenticate()(dispatch);
  }, []);

  return (
    <>
      {/* <MainContext.Provider value="john"> */}
        <Banner />
        {
          state.fetching ? 'getting name...' : <p>{state.name}</p>
        }
      {/* </MainContext.Provider> */}
    </>
  );
}

export default App;
