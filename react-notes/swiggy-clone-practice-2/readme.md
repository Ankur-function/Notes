# Lec 2 notes :-

## A bundler is a tool that bundles our app, packages our app so that it can be shipped to production. our project gets heavy so to compress it we need a bundler .

## node modules is like a database of the packages we install. like let's say we did npm i parcel. so node modules will contains all the configuration i.e. required to run parcel.

## we never push node_modules in production because we can regenarate it using package.json and package-lock.json. whatever we can regenerate . we never push on git.

## Parcel :-
 - It gives local server
 - HMR (Hot Module Replacement) :- It automatically refreshes our page when we change something. (read note-2 for more)
 - caching for faster builds
 - compress
 - bundling

 ## Transitive Dependencies :-
 - When we install any package then that package alone is not sufficient for our app. those packages are dependent on some other packages and that other packages are dependent on other more packages and so on. so this becomes like a whole dependency tree and we can see it inside our node_modules. so this is known as Transitive dependencies.


 # useState 

 # state variables :- whenever a state variable updates react re-renders the component.

 ## React uses Reconcilition Algorithm(also known as React Fibre) behind the scenes.

 ## in React 16 a new alogrithim came up to update the DOM. i.e. known as Reconcilition Algorithim. it is a new way of finding the diff(means diff algorithim) and updating the DOM. below is the whole explanations :-

 ## Virtual DOM is a object representation of the Actual DOM. and it is just an object. like we know that react element is just an object. so if  we do the console.log(any component/jsx) then we will get the object and that object is a virtual dom.

 ## Diff Alogrithim is finding out the difference between two virtual doms. i.e. older virtual dom vs updated virtual dom. and then update the actual dom. 

 - for e.g. suppose originally we have 10 data on UI and then we applied filter. and now we need to show only 4 data . so here how react works is it uses the diff algorithim and finds the difference between the updated virtual dom and the older virtual dom . and then updates the acutal dom.

 - Remember finding out the difference between two html is tough where as finding out difference between two objects is fast. this is one of the reason why react is fast because it uses diff algorithim to update the actual dom.

 - so whenever there is a change in any state variable then react finds out the difference between their virtual dom and re-renders the component using udpated virtual dom.

 - learn more about react-fibre on :- react-fibre-architecture on github.

# CORS Policy :-
- Our browsers block us to call apis from one origin to another origin when origin is not same.

# Whenever a State Variable updates/changes react triggers reconcilitaion algorithim.

## React fibre :- the alogorithim that finds difference between the virtual doms of updated and the older one and updates the only portion where changed has actually happened. that's why react is fast.

# useEffect Hook :-
- when we don't give any dependency array :- then useEffect will be called on every re-render of the component.
- when we give empty([]) dependency array :- it will called only once during initial render of the component.
- when we give any value inside dependecy array :- it will only be called if that value changes.

# What is SPA(Single Page Application) :-
- In react we use react-router-dom to navigate between the pages. so here in react we don't need to referesh the page to navigate between components. we can switch between different components without refreshing using a single page that's why we called it as SPA.just one page and components are interchanging.

## Client Side Routing vs Server Side Routing :-

- Server-Side Routing (SSR) requests and downloads a completely new HTML page from a server on every URL change, causing a full browser refresh. Client-Side Routing (CSR) changes the URL and updates the webpage instantly using JavaScript entirely within the browser without reloading the page

Core Mechanics Comparison :-

Feature         Client-Side Routing (CSR)                       Server-Side Routing (SSR)

Page Refresh    Zero browser reloads.                           Full browser page flash/reload.
Data Fetching   Fetches small JSON data via APIs.               Fetches complete HTML documents.
Initial Load    Slower (large initial JavaScript file bundle).  Faster (browser paints ready-made HTML).
Server Load     Extremely low (browser does the work).          High (server processes every route request).

## Client-Side Routing (CSR) :-

- This is what you build when using tools like React Router DOM.
- How it works: The browser downloads a single layout file (SPA - Single Page Application). When you click a navigation item, JavaScript intercepts the click, rewrites the URL bar, and replaces the content on the screen without talking to a server.Best For: Highly interactive dashboards, web apps (like your Swiggy-style project dashboard), and user accounts

## Server-Side Routing (SSR) :-
- This is the traditional model used by frameworks like WordPress, PHP, or Next.js (for server components).
- How it works: Every single click on an anchor link triggers a request directly to the web server. The server generates a fresh piece of HTML content, sends it back, and the browser repaints the whole window from scratch.Best For: Content-heavy sites, blogs, e-commerce listings, and sites where SEO (Search Engine Optimization) is critical

# so does in CSR backend api gets call and fetches data from backend ? like in dashboard we need data to display.
- Yes, absolutely. In Client-Side Routing (CSR), the backend API still gets called to fetch data, but the critical difference is what the backend sends back.
- Instead of sending back a heavy, fully constructed HTML webpage, the backend sends back pure data (almost always in JSON format).
- How Data Fetching Works in CSR:- 
- When a user navigates to a new route in a CSR application (like clicking on a restaurant card to view its menu):The Route Changes Instantly: React Router immediately changes the URL and renders the blank skeleton structure of the target page component without reloading the browser.
- The Component Triggers an API Call::- Inside that component, an asynchronous function (typically inside a React useEffect hook or using a library like React Query) triggers an HTTP fetch request to your backend API route (e.g., fetch('/api/restaurant/12')).The Backend Sends JSON: Your server validates the request, queries the database, and returns a raw data response like this:-
- json{
  "id": 12,
  "name": "Barbeque Nation",
  "menu": ["Chicken Tikka", "Paneer Tikka", "Gulab Jamun"]
}
- React Updates the UI: React receives this raw data object, updates the component's internal state variable, and dynamically injects the text into your HTML layout elements.

# Class Based Components :-
- in a class based components first constructor gets called and after this render gets called.

# React Life Cycle Methods :-

- first constructor of parent class gets called . then render method of parent class gets called and then if inside render method if there is child component then constructor of child component gets called and then render method of child component gets called. and once the child component is completely mounted then componentDidMound method of child component gets called and after all this i.e. child and parent component is completely mounted now finally componentDidMount of parent class gets called.


- ComponentDidMount() :- this method we use in react class based components and this method gets called once the component is          completely mounted.

## In react we usually don't wait for the data to come from backend/server to render component.Instead first render the component on to browser with whatever data we have (like we use shimmer UI). and then inside useEffect() we call the api to fetch the data and fill the component with that data and then react renders the component again and this time with data.

#  Read React Life Cycle Method :- 'https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/'
- read more about react life cycle method in react folder notes.

# Lazy Loading in React :-
- bundler bundles our app or compresses our app in to a minimum code. like for small application it bundles our code in to a single file . but as our app grows big handling entire app from a single file becomes difficult so here comes the concept of lazy loading also known as on demand loading . because we will load the page on demand i.e. when user clicks on the page then only we will load the code of the page.

- so here we simply import our components using lazy loading . then bundler will create seperate file for this.using lazy loading our app becomes very fast and light weight.
- syntax const variable_name = lazy(()=>(import('../file_location')))
- and we also use Suspense along with it because component will take some time to load and till that time Suspense can await for it.

## Practice Higher Order Component more :- A Higher Order Component is a Component that takes a component as an argument and add some features in to it and finally returns a enhanced component from it. And a component is a normal javascript function that returns some jsx.

# Redux ToolKit :-

## Redux Store :-
- We can assume it like a big global object which is kept it at central place. i.e. any component can access in our app.

- Slices are like small portion of the redux store. we create multiple slices in our redux store. we can create slices for every feature. like to handle user related data 'userSlice' for cart related data 'CartSlice'

## How to add to the redux store :-
- when we do an action then we dispatch an action which calls the reducer function and this reducer function updates the redux store.

## How to read from the redux store :-
- To read data from the redux store we use Selector and this phenomena is known as subscribing to the store.

## Steps to use Redux :-

- 1) configure redux store. 