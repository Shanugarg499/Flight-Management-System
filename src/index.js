import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ticket from './Ticket/ticket'
import ReactDOMServer from "react-dom/server";
import jsPDF from "jspdf";
const doc = new jsPDF();
const Foo = <Ticket />;

export default function App1() {
  const save = () => {
    doc.html(ReactDOMServer.renderToStaticMarkup(Foo), {
      callback: () => {
        doc.save("myDocument.pdf");
      }
    });
  };

  return (
    <div>
      <button onClick={save}>save</button>
    </div>
  );
}



ReactDOM.render(<App /> , document.getElementById('root'));
