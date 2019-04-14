import rootReducer from './reducers'
import { createStore, applyMiddleware ,compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/index'
import {routerMiddleware, syncHistoryWithStore} from 'react-router-redux'
import createHistory from "history/createBrowserHistory";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createHistory();

const middleware = routerMiddleware(history)
// создаем мидлвар saga
const sagaMiddleware = createSagaMiddleware()
// монтируем его в хранилище
const store = createStore(
    rootReducer,
    composeEnhancer(    applyMiddleware(middleware, sagaMiddleware))
)

// затем запускаем saga
sagaMiddleware.run(rootSaga)

// отрисовываем приложение

export default store