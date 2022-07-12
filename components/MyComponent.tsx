const MyComponent = () => {
    return ( <>
    <div className="bg-blue-400">
        <h1>My Component</h1>
        <h2>User: Name</h2>
        <button>Logout</button>
        <button>Login</button>

        <hr></hr>

        <h2>Products</h2>

        <ul>
            <li>Title</li>
        </ul>

        <button className="bg-purple-200 m-1"> Delete all </button>
        <button className="bg-purple-200 m-1"> Change </button>
        
    </div>
    </> );
}
 
export default MyComponent;