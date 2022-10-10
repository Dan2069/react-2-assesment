### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
The purpose of React Router is that you can move around the site without requiring the server to load. We're essentially able to get Client Side routing.

- What is a single page application?
A single page application is an application that updates teh body content with API's rather than loading whole new pages from a server.

- What are some differences between client side and server side routing?
Client side routing allows for better UI/UX and more modern coding architecture
Server side routing has to reload the page with every URL change and more traditional coding architecture

- What are two ways of handling redirects with React Router? When would you use each?
  1. The first way to handle redirects is to use the Redirect component. You would use this at the end of the route list and should be used if you want the client to return to the homepage
  2. The second way to handle redirects is to us the .push method on the history object. You would use this whenever you want to redirect to a previous page or a specific route rather than the default or homepage.

- What are two different ways to handle page-not-found user experiences using React Router?
  1. You can show a static page that will redirect them to the homepage or the default route
  2. You can show a static page and redirect them to the previous valid route

- How do you grab URL parameters from within a component using React Router?
You utilize useContext.

- What is context in React? When would you use it?
Context is universal data across the application. You'd want to use it whenever you are prop drilling and for less repetition

- Describe some differences between class-based components and function
  components in React.

  class-based components rely on constructors to save states while function components 

- What are some of the problems that hooks were designed to solve?
  Hooks were designed to solve the issue of saving a current state and referencing that state whenever a client interface changes, so we don't have to rewrite the state over and over again.