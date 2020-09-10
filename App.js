import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Provider from "react-redux/lib/components/Provider";
import mStore from "./components/Store";
import Header from "./components/Header";

export default function App() {
  return (
      <Provider store={mStore}>
        <Header/>
      </Provider>
  );
}
