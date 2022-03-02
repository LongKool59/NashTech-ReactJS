# Answer the questions

1. Diffference between the React's function components and class components ?
   | Functional Components | Class Components |
   | ----------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------: |
   | A functional component is just a plain JavaScript function that accepts props as an argument and returns a React element. | A class component requires you to extend from React. Component and create a render function which returns a React element. |
   | There is no render method used in functional components. | It must have the render() method returning HTML |
   | Also known as Stateless components as they simply accept data and display them in some form, that they are mainly responsible for rendering UI. | Also known as Stateful components because they implement logic and state. |
   | React lifecycle methods (for example, componentDidMount) cannot be used in functional components. | React lifecycle methods can be used inside class components (for example, componentDidMount). |
   | Hooks can be easily used in functional components. | It requires different syntax inside a class component to implement hooks. |
   | Constructors are not used . | Constructor are used as it needs to store state. |
2. What is the component state?

   The state is an instance of React Component Class can be defined as an object of a set of observable properties that control the behavior of the component. In other words, the State of a component is an object that holds some information that may change over the lifetime of the component.
