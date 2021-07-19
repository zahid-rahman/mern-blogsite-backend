import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AboutPage from './pages/about/AboutPage'
import ContactPage from './pages/contact/ContactPage'
import HomePage from "./pages/home/HomePage"
import CreatePostPage from './pages/post/CreatePostPage'
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>


          <Route path="/about" exact>
            <AboutPage />
          </Route>


          <Route path="/contact" exact>
            <ContactPage />
          </Route>


          <Route path="/post/create">
            <CreatePostPage></CreatePostPage>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
