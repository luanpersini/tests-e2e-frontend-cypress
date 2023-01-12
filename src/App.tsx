import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { ProtectedRoute } from "src/components/general/ProtectedRoute"
import ErrorBoundary from './components/general/ErrorBoundary'
import { BrowserTitle } from './components/template/browser-title'
import { NavBar } from './components/template/navbar/navbar'
import routes from './routes'

const App: React.FunctionComponent<Record<string, unknown>> = (props) => {
    
  const location: any = useLocation()
  return (
    <div className="app">
      <ToastContainer style={{ fontSize: "16px", minWidth: "400px" }} position="top-right" autoClose={8000} />
      <NavBar />
      <main className="container d-flex justify-content-center">
        <div className="col-12 col-xl-10">
          <ErrorBoundary>
            <Routes>
              {routes.map((route, index) => {
                <BrowserTitle title={route.title} />
                if (route.isProtected) {
                  return (
                    <Route
                      key={index}
                      path={route.path}
                      element={
                        <ProtectedRoute from={location.pathname}>
                          <route.element title={route.title} {...props} {...route.customProps} />
                        </ProtectedRoute>
                      }
                    />
                  )
                }
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={<route.element title={route.title} {...props} {...route.customProps} />}
                  />
                )
              })}
            </Routes>
          </ErrorBoundary>
        </div>
      </main>
    </div>
  )
}

export default App
