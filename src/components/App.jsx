import { nanoid } from 'nanoid';

import { useDispatch, useSelector } from 'react-redux';

import { myContactSelector, myFilterSelector } from 'redux/selector';

import { contactsAddThunk, contactsThunk } from 'redux/thunk';
import { Route, Routes } from 'react-router-dom';
import Layout from 'layout/Layout';
import HomePage from 'page/HomePage';
import LoginPage from 'page/LoginPage';
import SingUpPage from 'page/SingUpPage';
import PublicRoute from './guards/PublicRoute';
import PrivateRoute from './guards/PrivateRoute';
import ContactPage from 'page/ContactPage';

const App = function () {
  const { contactApi } = useSelector(myContactSelector);
  const dispatch = useDispatch();
  // const { isLoading, error } = useSelector(state => state.contactApi);
  // useEffect(() => {
  //   dispatch(contactsThunk());
  // }, [dispatch]);

  // const addContact = props => {
  //   const { name, number } = props;
  //   if (contactApi) {
  //     const check = contactApi.contactsApi.find(
  //       el => el.name.toLowerCase() === name.toLowerCase()
  //     );
  //     if (check) {
  //       return alert('NoNoNo');
  //     }

  //     dispatch(contactsAddThunk({ name, number, id: nanoid() }));
  //   }
  // };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {/* {isLoading && <h2>Loading...</h2>}
      {error ? error.message : <Contact />} */}
      {/* <Form addContact={addContact} /> */}
      {/* <Filter filterContact={filterContact} /> */}
      {/* <Contact filterArrContact={filterArrContact} /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/contact"
            element={
              <PrivateRoute>
                <ContactPage />
              </PrivateRoute>
            }
          />
        </Route>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/signUp"
          element={
            <PublicRoute>
              <SingUpPage />
            </PublicRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
