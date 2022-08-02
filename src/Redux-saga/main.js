import configureStore from './configureStore'
import rootSaga from './sagas'
// ... other imports

const store = configureStore()
store.runSaga(rootSaga)