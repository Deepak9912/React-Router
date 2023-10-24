import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1>My home page</h1>;
            <p>
                Go to <Link to="/products">The list of Products</Link>
            </p>
        </>
    );
}

export default Home;