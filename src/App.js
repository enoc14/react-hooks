import React, {useReducer} from 'react';
import './App.css';
import Counter from './components/stateHook/Counter'
import CounterTwo from './components/stateHook/CounterTwo'
import CounterThree from './components/stateHook/CounterThree'
import CounterFour from './components/stateHook/CounterFour'

import EffectOne from './components/effectHook/EffectOne'
import EffectTwo from './components/effectHook/EffectTwo'
import EffectFetch from './components/effectHook/EffectFetch';
import EffectFetchId from './components/effectHook/EffectFetchId';
import ContextA from './components/contextHook/ContextA';
import ReducerOne from './components/reducerHook/ReducerOne';
import ReducerTwo from './components/reducerHook/ReducerTwo';
import ReducerThree from './components/reducerHook/ReducerThree';
import { ReducerA, ReducerB, ReducerC } from './components/reducerHook/ReducerA';
import ReducerFetchingOne from './components/reducerHook/ReducerFetchingOne';
import ReducerFetchingTwo from './components/reducerHook/ReducerFetchingTwo';
import Parent from './components/callbackHook/Parent';
import MemoCount from './components/memoHook/MemoCount';
import RefOne from './components/refHook/RefOne';
import RefTwo from './components/refHook/RefTwo';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

export const CountContex = React.createContext()
const initialState = 0
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset': 
            return initialState
        default: 
            return state
    }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <h1>React Hooks</h1>
      {/* <section>
        <h2>useState()</h2>
        <Counter />
        <CounterTwo />
        <CounterThree />
        <CounterFour />
      </section> */}
      <hr></hr>
      {/* <section>
        <h2>useEffect()</h2>
        <EffectOne />
        <EffectTwo />
        <EffectFetch />
        <EffectFetchId />
      </section> */}
      {/* <section>
        <h2>useContext()</h2>
        <UserContext.Provider value={'Enoc'}>
          <ChannelContext.Provider value={'CodeEvolution'}>
            <ContextA />
          </ChannelContext.Provider>
        </UserContext.Provider>
      </section> */}
      {/* <section>
        <h2>useReducer()</h2>
        <ReducerOne />
        <ReducerTwo />
        <ReducerThree />
        <CountContex.Provider value={{ countState: count, countDispatch: dispatch }}>
          Count - {count}
          <ReducerA />
          <ReducerB />
          <ReducerC />
        </CountContex.Provider>
        <ReducerFetchingOne />
        <ReducerFetchingTwo />
      </section> */}
      {/* <section>
        <h2>useCallback()</h2>
        <Parent />
      </section> */}
      {/* <section>
        <h2>useMemo()</h2>
        <MemoCount />
      </section> */}
      <section>
        <h2>useRef()</h2>
        <RefOne />
        <RefTwo />
      </section>
    </div>
  );
}

export default App;
