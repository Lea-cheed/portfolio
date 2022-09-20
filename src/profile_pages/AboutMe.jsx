/**
 * 애니메이션 작성 - npm i framer-motion 모듈 설치
 * 
*/
import {motion} from 'framer-motion';

const AboutMe = ()=>{
    return (
        /*
            <motion>으로 컴포넌트를 감싸준다.
            imitial - 마운트될 때
            animate - 마운트가 완료된 직후
            exit - 언마운트될 때
        */
        <motion>
            <section>
                <img src="./images/aboutme.png" alt="#" />
            </section>
        </motion>
        
    );
};

export default AboutMe;