import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App'
import Home from './pages/Home'
import { PageContextProvider } from './context/page.Context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <PageContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </PageContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
