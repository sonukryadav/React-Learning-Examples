import React, { useState, useReducer, createContext, useContext } from 'react';
import ChoosingTheStateStructure2 from './ChoosingTheStateStructure2';


const ManagingState = () => {
    return (
        <div style={{backgroundColor:'lightgray'}}>
            <hr />
            <hr />
            <h1>-: Managing State4 :-</h1>
            <h2 style={{color:'blue',textDecoration:'underline'}}>Reacting to input with state</h2>
            <Form />
            <h2 style={{ color: 'blue', textDecoration: 'underline'}}>Sharing state between components</h2>
            <Accordion />
            <h2 style={{ color: 'blue', textDecoration: 'underline' }}>Extracting state logic into a reducer</h2>
            <TaskApp />
            <h2 style={{ color: 'blue', textDecoration: 'underline' }}>Scaling up with reducer and context </h2>
            <TaskApp2 />

            {/* <ChoosingTheStateStructure2 /> */}
        </div>
    );
}

// ---------------City quiz-------------------------------------

const Form = () => {

    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');

    function handelTextareaChange(e) {
        setAnswer(e.target.value);
    }

    if (status === 'success') {
        return <h1>That's right!</h1>
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitForm(answer);
            setStatus('success');
        } catch (err) {
            setStatus('typing');
            setError(err);
        }
    }

    return (
        <div>
            <h2>City quiz</h2>
            <p>
                In which city is there a billboard that turns air into drinkable water?
            </p>
            <form onSubmit={handleSubmit}>
                <textarea value={answer} onChange={handelTextareaChange} disabled={status === 'submitting'} />
                <br />
                <button disabled={answer.length === 0 || status === 'submitting'}>Submit</button>
                {error !== null && <p className="Error">{error.message}</p>}
            </form>
        </div>);
}

const submitForm = (answer) => {
    // Pretend it's hitting the network
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let shouldError = answer.toLowerCase() !== 'lima';
            if (shouldError) {
                reject(new Error('Good guess but a wrong answer. Try again'));
            } else {
                resolve();
            }
        }, 1500);
    });
}
// ----------xxx-----------------City quiz------------xxx-------------------------//


//-----------------Sharing state between components------------------------

function Accordion() {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <>
            <h2>Almaty, Kazakhstan</h2>
            <Panel title="About" isActive={activeIndex === 0} onShow={()=> setActiveIndex(0)} >
                With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
            </Panel>
            <Panel title="Etymology" isActive={activeIndex === 1} onShow={() => setActiveIndex(1)}>
                The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
            </Panel>
        </>
    );
}


const Panel = ({ title, children, isActive, onShow}) => {
    return (
        <section>
            <h3>{title}</h3>
            {isActive ? (<p>{ children }</p>) :(<button onClick={onShow}>Show</button>)}
        </section>
    );
}
//--------xxxx---Sharing state between components----------xxx-------------


//----------Extracting state logic into a reducer-------------------
const initialTasks = [
    { id: 0, text: 'Visit Kafka Museum', done: true },
    { id: 1, text: 'Watch a puppet show', done: false },
    { id: 2, text: 'Lennon Wall pic', done: false }
];
let nextId = 3;

function TaskApp() {
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

    function handleAddTask(text) {
        dispatch({
            type: 'added',
            id: nextId++,
            text: text,
        });
    }

    function handleChangeTask(task) {
        dispatch({
            type: 'changed',
            task: task
        });
    }

    function handleDeleteTask(taskId) {
        dispatch({
            type: 'deleted',
            id: taskId
        });
    }

    return (
        <>
            <h3>Prague itinerary</h3>
            <AddTask onAddTask={handleAddTask} />
            <TaskList tasks={tasks}
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask}
            />
        </>
    );
}

function tasksReducer(tasks, action) {
    switch (action.type) {
        case 'added': {
            return [...tasks, {
                id: action.id,
                text: action.text,
                done: false
            }];
        }
        case 'changed': {
            return tasks.map(t => {
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
            });
        }
        case 'deleted': {
            return tasks.filter(t => t.id !== action.id);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

const AddTask = ({ onAddTask }) => {
    const [text, setText] = useState('');
    return (
        <>
            <input type="text" placeholder='Add task' value={text} onChange={e => setText(e.target.value)} />
            <button onClick={() => {
                setText('');
                onAddTask(text);
            }}>Add</button>
        </>
    );
}

const TaskList = ({ tasks, onChangeTask, onDeleteTask}) => {
    return (
        <>
            <ul>
                {tasks.map(task =>{
                    return <li key={task.id}>
                        <Task
                            task={task}
                            onChange={onChangeTask}
                            onDelete={onDeleteTask}
                        />
                    </li>
                })}
            </ul>
        </>
    );
}

function Task({ task, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    let taskContent;
    if (isEditing) {
        taskContent = (
            <>
                <input
                    value={task.text}
                    onChange={e => {
                        onChange({
                            ...task,
                            text: e.target.value
                        });
                    }} />
                <button onClick={() => setIsEditing(false)}>
                    Save
                </button>
            </>
        );
    } else {
        taskContent = (
            <>
                {task.text}
                <button onClick={() => setIsEditing(true)}>
                    Edit
                </button>
            </>
        );
    }
    return (
        <label>
            <input
                type="checkbox"
                checked={task.done}
                onChange={e => {
                    onChange({
                        ...task,
                        done: e.target.checked
                    });
                }}
            />
            {taskContent}
            <button onClick={() => onDelete(task.id)}>
                Delete
            </button>
        </label>
    );
}


//------------------Scaling up with reducer and context---------------------
// TaskApp --> with context and reducer
const initialTasks2 = [
    { id: 0, text: 'Philosopher’s Path', done: true },
    { id: 1, text: 'Visit the temple', done: false },
    { id: 2, text: 'Drink matcha', done: false }
];
let nextId2 = 3;

const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);

const TasksProvider = ({ children }) => {
    const [tasks, dispatch] = useReducer(tasksReducer2, initialTasks2);
    return (
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    );
}


function tasksReducer2(tasks, action) {
    switch (action.type) {
        case 'added': {
            return [...tasks, {
                id: action.id,
                text: action.text,
                done:false
            }];
        }
        case 'changed': {
            return (
                tasks.map((t) => {
                    if (t.id === action.task.id) {
                        return (action.task);
                    }
                    else {
                        return t;
                    }
                })
            );
        }
        case 'deleted': {
            return tasks.filter((t) => {
                return t.id === action.id;
            })
            }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

function TaskApp2() {
    return (
        <TasksProvider>
            <h1>Day off in Masai</h1>
            <AddTask2 />
            <TaskList2 />
        </TasksProvider>
    );
}

function useTasks() {
    return useContext(TasksContext);
}

function useTasksDispatch() {
    return useContext(TasksDispatchContext);
}

function AddTask2() {
    const [text, setText] = useState('');
    const dispatch = useTasksDispatch();
    return (<>
        <input placeholder='Add task' value={text} onChange={e => setText(e.target.value)} />
        <button onClick={() => {
            setText('');
            dispatch({
                type: 'added',
                id: nextId2++,
                text: text,
            });
        }}>Add</button>
    </>);
}

function TaskList2() {
    const tasks   = useTasks();
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <Task2 task={ task}/>
                </li>
            ))}
        </ul>
    );
}

function Task2({ task}) {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useTasksDispatch();
    let taskContent;
    if (isEditing) {
        taskContent = (
            <>
                <input value={task.text} onChange={e => {
                    dispatch({
                        type: 'changed',
                        task: {
                            ...task,
                            text: e.target.value
                        }
                    });
                }} />
                <button onClick={() => setIsEditing(false)}>Save</button>
            </>
        );
    } else {
        taskContent = (
            <>
                {task.text}
                <button onClick={() => setIsEditing(true)}>
                    Edit
                </button>
            </>
        );
    }
    return (
        <label>
            <input type="checkbox"
                checked={task.done}
                onChange={e => {
                    dispatch({
                        type: 'changed',
                        task: {
                            ...task, done: e.target.checked
                        }
                    });
                }}
            />
            {taskContent}
            <button onClick={() => {
                dispatch({
                    type: 'deleted',
                    id: task.id,
                });
            }}>
                Delete
            </button>
        </label>
    );
}


//-----xxx----------Scaling up with reducer and context---------xxx---------





//-----xxx---Extracting state logic into a reducer----xxx-----------

export default ManagingState;


