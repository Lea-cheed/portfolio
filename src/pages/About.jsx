import { Link } from "react-router-dom";

const About = ()=>{
    return (
        <div>
            <h1>소개</h1>
            <p>웹퍼블리셔, 프론트엔드 개발자를 꿈꾸고 있습니다.</p>

            <p>
                <Link to="/">Home으로 이동</Link>
            </p>
        </div>
    );
}

export default About;