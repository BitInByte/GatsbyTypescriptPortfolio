//Import libraries
import React from "react"

//Import components
import Button from "../../UI/Button/Button"

//Import scoped class modules
//@ts-ignore
import classes from "./About.module.scss"

//Props interface
interface Props {
  title: string
  html: string
  sourceLink: string
}

//Stateless component
const About: React.FC<Props> = ({ title, html, sourceLink }) => (
  <div className={classes.About}>
    <h3>{title}</h3>
    <div dangerouslySetInnerHTML={{ __html: html }}>
      {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo quod
      vero molestiae, iusto odit voluptas placeat, est atque debitis nulla
      doloribus cum maiores neque! Dolorum illum quibusdam assumenda
      perspiciatis eligendi. Ullam perspiciatis, aliquam cupiditate dolor cumque
      quaerat, vitae non reprehenderit facere pariatur delectus laborum. Aliquid
      doloribus voluptatibus similique amet! Quos rem earum at voluptatibus
      suscipit vero ad repellendus tempora id! Quaerat modi odit, dolore eos
      illo enim consequatur accusantium? Tenetur dicta doloremque vitae
      necessitatibus id perspiciatis ad officiis excepturi soluta fugiat alias
      laboriosam repudiandae, ex quia asperiores sit rerum voluptates! Natus,
      praesentium aperiam? Blanditiis eum itaque est maiores modi tenetur
      accusamus veritatis tempora quam aperiam similique, cupiditate porro,
      facilis officiis ducimus reprehenderit? Facere non beatae consectetur
      exercitationem tempora impedit ullam! */}
    </div>
    <a href={sourceLink} target="_blank" rel="noopener noreferrer">
      <Button text="Source" />
    </a>
  </div>
)

export default About
