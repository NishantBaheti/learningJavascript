# learningJavascript





- lifecycle 

        Mounting,Updating and Unmounting
        Mounting is creating new instance of a component and inserting into the DOM.

        constructor() 
        static getDerivedStateFromProps() 
        render() 
        componentDidMount() 
        
        Updating is re-rendering the Component.        
        static getDerivedStateFromProps() 
        shouldComponentUpdate() 
        render() 
        getSnapshotBeforeUpdate() 
        componentDidUpdate() 


        Unmounting is when a component is being removed from the DOM
        Method that is called when :
        componentWillUnmount()

## Hooks

What is a Hook? A Hook is a special function that lets you “hook into” React features. For example, useState is a Hook that lets you add React state to function components.

When would I use a Hook? If you write a function component and realize you need to add some state to it, previously you had to convert it to a class. Now you can use a Hook inside the existing function component. We’re going to do that right now!

  - Hooks should be on top level inside functioc(exclusively)
  - Hooks should be in order to load 


### useState
  
  - What does calling useState do? It declares a “state variable”. Our variable is called count but we could call it anything else, like banana. This is a way to “preserve” some values between the function calls — useState is a new way to use the exact same capabilities that this.state provides in a class. Normally, variables “disappear” when the function exits but state variables are preserved by React.
  - What does useState return? It returns a pair of values: the current state and a function that updates it. This is why we write const [count, setCount] = useState(). This is similar to this.state.count and this.setState in a class, except you get them in a pair.


### useEffect

  - If you’re familiar with React class lifecycle methods, you can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.
  

### useMemo

  - memoization 
  - caching

### useContext
  
  - accepts a context object (the value returned from React.createContext) and returns the current context value for that context. The current context value is determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree.
  - create contexts we want to use throughout the application but can be changed from one place(button) like theme. create custom hooks to access these contexts in the application.
  - use provider in from where all the children in provider can access these contexts.
  - in child components use the context module and custom hooks to access values of contexts.

### useReducer

  - An alternative to useState. Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method.
  - useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.