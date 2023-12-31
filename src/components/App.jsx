import { Route, Routes } from 'react-router-dom';
import Layout from 'layout/Layout';
import HomePage from 'page/HomePage';
import LoginPage from 'page/LoginPage';
import SingUpPage from 'page/SingUpPage';
import PublicRoute from './guards/PublicRoute';
import PrivateRoute from './guards/PrivateRoute';
import ContactPage from 'page/ContactPage';
import { errorSelector, isLoadingSelector } from 'redux/selector';
import { useSelector } from 'react-redux';

const App = function () {
  const isLoading = useSelector(isLoadingSelector);
  const error = useSelector(errorSelector);
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
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}

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
