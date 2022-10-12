import vi from './assets/cus-vite.svg'
import { useParams } from "react-router-dom";

const Blog = props => {
    const {aboutId} = useParams();
    
    return (
        <div>
            <img src={vi} className="w-52 mx-auto mt-4" alt="" />
            <h1 className="text-4xl font-bold">Hello Blog...............: {aboutId}</h1>
        </div>
    )
}

export default Blog;