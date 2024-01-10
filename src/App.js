import './App.css';
import {
   Routes, Route, Navigate
  } from 'react-router-dom'
import Food from './Food';
import FoodNav from './FoodNav';
import Home1 from './Home1';
import FourOhFour from './404';
import Admin from './Admin';
import Contact from './Contact';

function App() {
  return (
    <div className='App'>
      {/* we use our nav bar seperately 
      in the element we have a default list of foods that are generated as links*/}
      <FoodNav/>
      <Routes>
        {/* we use :name to use variable value  and specify the element*/}
        <Route path="/food/:name" element={<Food/>}/>
        {/* /foodcvhbdftghj would reroute to below * path */}
        {/* <Route path='*' element={<Navigate to="/food/pasta"/>}/> */}
        <Route path="/" element={<Home1 />}/>
        <Route path="/contact" element={<Contact/>}/>
        {/* /focvhbdftghj would reroute to below * path /bad_request
        - common to directly redirect to 404 element 
        */}
        <Route path='/bad_request' element={<FourOhFour/>}/>
        <Route path='/admin' element={<Admin/>}/>
        {/* we can also do below code but it's redundent */}
        <Route path='*' element={<Navigate to="/bad_request"/>}/>
      </Routes>
    </div>
  );
}

export default App;


/**
 * DO NOT USE THIS APPROACH 
 *  - A lot of repetition
 *  - not dynamic  
 */
// function App() {
//   return (
//     <Router>
//       <div className='App'>
//         <FoodNav/>
//       <Routes>
//         <Route
//             path="/food/burrito"
//             element={<Food name="burrito"/>}
//         ></Route>
//         <Route
//             path="/food/salad"
//             element={<Food name="salad"/>}
//         ></Route>
//         <Route
//             path="/food/pasta"
//             element={<Food name="pasta"/>}
//         ></Route>
//         <Route
//             path="/food/sushi"
//             element={<Food name="sushi"/>}
//         ></Route>
//       </Routes>
//       </div>
//     </Router>


// import './App.css';
// import {
//   // import browser router as router 
//   BrowserRouter as Router,
//   // this will contain all routes
//   Routes,
//   // this will access a route
//   Route,
//   // creates anchor tag like links
//   // Link,
//   // creates anchor tag like links with css class active, default is false and turns true when link is in use 
//   // NavLink
//   } from 'react-router-dom'
// import Eat from './Eat';
// import Drink from './Drink';
// import Home from './Home';
// import NavBar from './NavBar';

// function App() {
//   return (
//     // When we change the url we get different components rendered 
//     // typically we would have different buttons to alter the route
//     <Router>
//       <div className='App'>
//         <NavBar/>
//         {/* - We dont put the links inside the route*/}
//       <Routes>
//         <Route
//             path="/"
//             element={<Home />}
//         ></Route>
//         <Route
//             exact
//             path="/eat"
//             element={<Eat />}
//         ></Route>
//         <Route
//             exact
//             path="/drink"
//             element={<Drink />}
//         ></Route>
//       </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
