# 🚀 Routing with React Router

## 📝 Objective

Learn how to implement client-side routing in a React application using **React Router**.

## 📂 Example Code

### Installing React Router

First, install the necessary packages:

```bash
npm install react-router-dom
```

### Setting Up Basic Routes

#### Create Components for Different Pages

Create a few basic components that will represent different pages of the application.

```jsx
// components/Home.js
import React from "react";

const Home = () => {
  return <h2>Home Page</h2>;
};

export default Home;
```

```jsx
// components/About.js
import React from "react";

const About = () => {
  return <h2>About Page</h2>;
};

export default About;
```

```jsx
// components/Contact.js
import React from "react";

const Contact = () => {
  return <h2>Contact Page</h2>;
};

export default Contact;
```

### Setting Up Routes in `App.js`

Now, configure the routing in `App.js` using `BrowserRouter`, `Routes`, and `Route` from `react-router-dom`.

```jsx
// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
```

### Adding a 404 Page for Undefined Routes

You can handle undefined routes by adding a "404 Not Found" page.

```jsx
// components/NotFound.js
import React from "react";

const NotFound = () => {
  return <h2>404 - Page Not Found</h2>;
};

export default NotFound;
```

Then, add the route for undefined paths in your `App.js`:

```jsx
<Route path="*" element={<NotFound />} />
```

### Integrating the App with Routing

After setting up all the routes, the app will allow navigation between different pages, and the "Not Found" page will handle any undefined paths.

## 🔍 How It Works

- **Router Setup**: `BrowserRouter` provides the foundation for routing in React.
- **Route Configuration**: `Routes` wraps the individual `Route` components that define the URL paths and corresponding components.
- **Navigation**: The `Link` component from `react-router-dom` is used to create navigational links between different routes without refreshing the page.
- **404 Page**: The `NotFound` component handles unmatched routes to provide a custom "Page Not Found" experience.

## 🚀 Running the Application

### Install Dependencies (if not done yet):

```bash
npm install
```

### Start the Development Server:

```bash
npm start
```

### View the Application:

Go to [http://localhost:3000](http://localhost:3000) to navigate between the "Home," "About," and "Contact" pages and test the routing functionality.

## Happy coding! 🎉
