import { useEffect, useRef, useState } from "react";
import "../../asset/style/Skill.scss";
import SkillData from "./SkillData";


function Skill(props) {
  const [obj, setObj] = useState(false);
  const [ text, setText ] = useState('');
  const objRef = useRef(null);

  const des = (i) => {
    const result = SkillData.findIndex((item)=> item.id === i);
    setText(SkillData[result].des);
  }
  // const titleList = ['HTML, CSS3', 'JAVASCRIPT', 'REACT', 'GIT, GITHUB'];


  const activeObj = () =>{
    const skill = document.querySelector('.skill');
    if(skill.getBoundingClientRect().top <= 130){
      setObj(true);
      console.log(skill.getBoundingClientRect().top);
    } else {
      setObj(false);
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', activeObj);
    return () => {
      window.removeEventListener('scroll', activeObj); 
    };
  },[])


  return (
    <section className="skill" id='skill'>
      <div className="inner">
        <h2>SKILL</h2>
        <div className="textBox">
          <div className="titleBox">
            <ul>
              {
                SkillData.map((skill)=>(
                  <li
                   key={skill.id} 
                  //  onMouseEnter={() => des(skill.id)} 
                  //  onMouseLeave={()=> setText('')}
                  onClick={() => des(skill.id)} 

                   >
                    {skill.title}
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="conBox">
            <span></span>
            <p className="active">
              {text}
            </p>
          </div>
        </div>
      </div>
      <div className={obj ? 'obj active' : 'obj'}>
        <p>SKILL</p>
      </div>
    </section>
  );
}

export default Skill;
