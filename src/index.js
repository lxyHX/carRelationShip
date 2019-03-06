import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import Store from './store'
import { getRouterData } from './routes/nav'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

const routerData = getRouterData();
const BasicLayout = routerData['/'].component;

function App () {
  return (<Router>
      <Switch>
        <Route key={'basic'}  path='/'  render={prop => <BasicLayout routerData={routerData} {...prop} />}/>,
      </Switch>
    </Router>)
}

const Root = connect(state => state.get('login').toObject())(App);;

(async function () {
  ReactDOM.render(<Provider store={Store}><Root/></Provider>, document.getElementById('root'));
  registerServiceWorker()
})();

