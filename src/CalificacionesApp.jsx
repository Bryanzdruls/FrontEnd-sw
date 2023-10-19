import { Provider } from "react-redux"
import { store } from "./store"
import { HashRouter } from "react-router-dom"
import { AppRouter } from "./router/AppRouter"

export const CalificacionesApp = () => {
  return (
    <Provider store = {store}>
      <HashRouter>
        <AppRouter/>
      </HashRouter>
    </Provider>
  )
}


