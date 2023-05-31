import React from 'react';
import { ReactDOM } from 'react-dom/client';

import App from  './App.js'

ReactDOM.createRoot(
    document.querySelector('#root')
).render(<App />)

/**
 * Inside App.js
 * 
 * import React from 'react';
 * 
 * export function App(){
 *      return (
 *          <h1>This is a title</h1>);
 * };
 * 
 * 
 * 
 */