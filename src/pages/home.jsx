
import {Link} from "react-router-dom";

const Home = () => {
    return (
      <div className="home">
        <h1>Hello There!!</h1>

        <Link className="btn btn-primary" to="/catalog">Check our amazing Catalog &gt; </Link>
      </div>
    );
  };
  
  export default Home;