import Home from "./Screens/Home";
import RestaurantReserv from "./Screens/RestaurantReserv";
import BookRoom from "./Screens/BookRoom";
import ConfirmBooking from "./Screens/ConfirmBooking";
import Test from "./Screens/Test";
import Success from "./Screens/Success";

import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/reserve-table",
    element: <RestaurantReserv />,
  },

  {
    path: "/book-room",
    element: <BookRoom />,
  },

  {
    path: "/confirm-booking",
    element: <ConfirmBooking />,
  },
  {
    path: "/booking-success",
    element: <Success />,
  },

  {
    path: "/test",
    element: <Test />,
  },
]);

function App() {
  // const { pathname } = useLocation();

  return (
    <div className="App">
      <NavigationBar />
      <RouterProvider router={router} />
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
