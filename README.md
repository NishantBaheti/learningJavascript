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

- Hooks
        - Hooks should be on top level inside functioc(exclusively)
        - Hooks should be in order to load 
        