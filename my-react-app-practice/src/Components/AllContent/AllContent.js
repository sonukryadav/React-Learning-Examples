import Form1 from '../Random&w3/Forms/Form1';
import Garage from '../Random&w3/Garage/Garage';
import Form2 from '../Random&w3/Forms/Form2';
import Textarea from '../Random&w3/Textarea/Textarea';
import Form3MultipleInput from '../Random&w3/Forms/Form3MultipleInput';
import Select from '../Random&w3/Select/Select';
import CSSStyle from '../Random&w3/CSSStyle/CSSStyle';
import UseState1 from '../Random&w3/Hooks/useState1';
import UseEffect1 from '../Random&w3/Hooks/UseEffect1';
import UseEffect2 from '../Random&w3/Hooks/UseEffect2';
import ContextProvider from '../Random&w3/Hooks/useContextHook/ContextProviderStep2';
import UseuseContextHook from '../Random&w3/Hooks/useContextHook/UseuseContextHook';
import UseRef from '../Random&w3/Hooks/UseRef';
import UseRefForAccessOfDOM from '../Random&w3/Hooks/UseRefForAccessOfDOM';
import UseStateUseEffectuseRef from '../Random&w3/Hooks/useContextHook/UseStateUseEffectuseRef';
import UseReducer from '../Random&w3/Hooks/UseReducer';
import Todo0 from '../Random&w3/Hooks/Todo0';
import Problem from '../Random&w3/Hooks/useCallback/Problem';
import Solution from '../Random&w3/Hooks/useCallback/Solution';
import ProblemUseMemo from '../Random&w3/Hooks/useMemo/ProblemUseMemo'
import SolutionUseMemo from '../Random&w3/Hooks/useMemo/SolutionUseMemo';
import CustomHook from '../Random&w3/Hooks/CustomHook/CustomHook';
import RecatStopwatch from "../Random&w3/SONU's TIMER/RecatStopwatch";
import ReactForm from '../Random&w3/ReactForm/ReactForm';
import AppEcommerce from '../Random&w3/e-commerce-c3/AppEcommerce';
import Button from '../Random&w3/ChakraUI/Button';
import { Input } from '@chakra-ui/react';
import ReduxWeb from '../Random&w3/React-Redux/ReduxWeb';



const style0 = {
    textAlign: 'center',
}
const style1 = {
    textAlign: 'center',
    border: '2px solid green',
    boxShadow: '2px 2px 5px black',
    padding:'10px',
}
const style2 = {
    textAlign: 'center',
    border: '2px solid red',
    boxShadow: '2px 2px 5px black',
    padding: '10px',
}


function AllContent() {
    return (
        <div style={style0}>

            <div style={style1}>
                <h1 style={{ backgroundColor: 'lightskyblue', padding: '1px' }}>-: Official docs Examples :-</h1>
            
            
                {/* ----------------------------------OFFICIAL----------------------------------- */}
                {/* ----------------XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX------------------------- */}
            
            
            </div>

            <br/>
            <hr style={{ border: '2px solid black', backgroundColor: 'black' }} />
            <br/>

            <div style={style2}>
                <h1 style={{ backgroundColor: 'lightskyblue', padding: '1px',marginBottom:'30px' }}>-: Random & w3 Examples :-</h1>
            
                {/* -----------------------------------W3------------------------------- */}
                {/* <Garage /> */}
                {/* <Form1 /> */}
                {/* <Form2 /> */}
                {/* <Form3MultipleInput /> */}
                {/* <Textarea /> */}
                {/* <Select /> */}
                {/* <CSSStyle /> */}
                {/* <UseState1 /> */}
                {/* <UseEffect1 /> */}
                {/* <UseEffect2 /> */}
                {/* <ContextProvider /> */}
                {/* <UseuseContextHook /> */}
                {/* <UseRef /> */}
                {/* <UseRefForAccessOfDOM /> */}
                {/* <UseStateUseEffectuseRef /> */}
                {/* <UseReducer /> */}
                {/* <Todo0 /> */}
                {/* <Problem /> */}
                {/* <Solution /> */}
                {/* <ProblemUseMemo /> */}
                {/* <SolutionUseMemo /> */}
                {/* <CustomHook /> */}
                {/* <RecatStopwatch /> */}
                {/* <ReactForm /> */}
                {/* -----------------XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX--------------- */}
                
                {/* ------------------------------RANDOM-------------------------------- */}
                {/* <AppEcommerce /> */}
                <ReduxWeb />
                {/* <Button name='Angular' color='white' bgColor='black' margin='5px' pad='5px' /> */}
                {/* <Input placeholder='Basic usage' width='400px' /> */}
                {/* -----------------XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX--------------- */}
            
            </div>
        </div>
    )
}

export default AllContent;