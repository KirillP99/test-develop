import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

const logger = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: () => '#139BFE',
    prevState: () => '#1C5FAF',
    action: () => '#149945',
    nextState: () => '#A47104',
    error: () => '#ff0005',
  },
});

const dev = process.env.NODE_ENV === 'development';
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

if (dev) {
  middleware.push(logger);
}

export { sagaMiddleware, dev, middleware };