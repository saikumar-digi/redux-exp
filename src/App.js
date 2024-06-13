import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Inc, Dec } from "./states/reducers";


function App() {
  const currentSelecter = useSelector((state) => state.number);
  const dispatch = useDispatch ();
  return (
    <>
      <h1>React redux</h1>
      <div style={{width: '100%',display:'flex', alignItems:'center' , flexDirection:'column'}}>
        <h1>{currentSelecter}</h1>
        <div>
        <button onClick={() => dispatch(Inc(10))}>Inc</button>
        <button onClick={() => dispatch(Dec())}>Dec</button>
        </div>
      </div>
    </>
  );
}

export default App;
