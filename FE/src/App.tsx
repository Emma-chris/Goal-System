import { RouterProvider } from "react-router-dom";

import { GlobalProvider } from "./global/globalProvider";
import mainRouter from "./router/mainRouter";

const App = () => {
  return (
    <GlobalProvider>
      <RouterProvider router={mainRouter} />
    </GlobalProvider>
  );
};

export default App;
