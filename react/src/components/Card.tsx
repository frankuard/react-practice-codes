
import './Card.css'
type props= {
    title : String;
    description :String;
}

const Card = (props: props) => {
  return (
    <div className="Card" style={{overflow: "hidden"}}>
        <img src="https://user-images.githubusercontent.com/74038190/212750155-3ceddfbd-19d3-40a3-87af-8d329c8323c4.gif" alt="" width={233}
        style={{border: "red"}}
        />
      <h1> {props.title}</h1>
      <p>{props.description}</p>
 
    </div>
  )
}

export default Card
