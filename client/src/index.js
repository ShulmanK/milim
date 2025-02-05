import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import * as serviceWorker from "./serviceWorker"
import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux"
import { rootReducer } from "./redux/rootReducer"
import thunk from "redux-thunk"
import App from "./App"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./MaterialUITheme"
import "./index.scss"

document.addEventListener("touchstart", function() {},false);

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    // window.navigator.userAgent.includes("Chrome")
    //   ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
    //       window.__REDUX_DEVTOOLS_EXTENSION__()
    //   : compose
  )
)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
