import React from 'react'
import AppNavbar from './components/appNavbar/AppNavbar'
import { TodosPage } from './pages/todoPage/TodosPage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { AboutPage } from './pages/aboutPage/AboutPage'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppNavbar />
      <div className="container">
        <Switch>
          <Route component={TodosPage} path="/" exact />
          <Route component={AboutPage} path="/about" />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
