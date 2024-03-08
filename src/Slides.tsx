//import {Link} from 'react-router-dom';
import {useReducer} from 'react';
interface ISlidesProps {
    userName: string;
}
interface IState {
  showOriginal: boolean;
  showInput: boolean;
}
type Action = { type: "SHOW_INPUT", showOriginal: boolean, showInput: boolean } | { type: "SHOW_ORIGINAL", showOriginal: boolean, showInput: boolean }
  const reducer = (state: IState, action: Action) => {
   switch (action.type) {
    case "SHOW_INPUT" :
       return { showOriginal: state.showOriginal = false, showInput: state.showInput = true};
    case "SHOW_ORIGINAL":
       return { showOriginal: state.showOriginal = true, showInput: state.showInput = false};
    default: 
    return state;
   }   
  }
 const Slides = ({userName}: ISlidesProps) => {
    const [state, dispatch] = useReducer(reducer, {showOriginal: true, showInput: false});
  return (
    <div className="slides">
      <h3>Hello, {userName}</h3>
      <div className="slide_container">
        <div className='add'>
          {state.showOriginal && <svg onClick={() => dispatch({
            type: "SHOW_INPUT",
            showOriginal: false,
            showInput: false
          })} width="110px" height="110px" viewBox="-20.88 -20.88 65.76 65.76" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" strokeWidth="0.00024000000000000003" transform="rotate(0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.144"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#ffffff"></path> <path d="M12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z" fill="#ffffff"></path> </g></svg>}
          {state.showInput && <form>
              <input type="text" placeholder='Project Name'/>
              <button>Create</button>
            </form>}
          {state.showInput && <p onClick={() => dispatch({
            type: "SHOW_ORIGINAL",
            showOriginal: false,
            showInput: false
          })} style={{paddingBottom: '10px'}}>Cancel</p>}
        </div>
      </div>
    </div>
  );
}
export default Slides; 