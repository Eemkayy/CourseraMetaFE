import React from 'react';
import { ReactDOM } from 'react-dom/client';

import App from  './App.js'

ReactDOM.createRoot(
    document.querySelector('#root')
).render(<App title="Welcome" />)

/**
 * Inside App.js
 * 
 * import React from 'react';
 * 
 * export function App(props){    We pass in welcome in props.title
 *      return (
 *          <h1>{props.title}</h1>);
 * };
 * 
 * 
 * 
 */