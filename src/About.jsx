import { Link, useParams } from "react-router-dom";

const About = () => {
    const {id} = useParams();

    return (
        <div className="">
            <h1 className="text-pink-500 text-3xl">Hello About! Param: {id}</h1>
            <Link to="blog">go blog</Link>
        </div>
    )
}

export default About;