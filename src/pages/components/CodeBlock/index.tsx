import {CopyBlock, dracula} from "react-code-blocks";

function CodeBlock() {
  return <CopyBlock
    language={'jsx'}
    text={` 
    const services = [
      'Web service',
      'Chrome extension',
    ]
    
    const technicalSkills = [
      'HTML, CSS, Javascript',
      'ReactJS, NextJS, Plasmo',
      'Material design, Ant design, TailwindCSS',
      'Redux, Redux toolkit, Zustand',
      'Github, Gitlab, Bitbucket',
    ]
    `}
    showLineNumbers={true}
    theme={dracula}
    codeBlock
  />
}

export default CodeBlock;
