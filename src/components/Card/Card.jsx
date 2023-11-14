import Tag from "../Tag/Tag"

export default function Card(props) {
    const item = props.item
    return <div className="card">
    <h2 className='nameTitle'>{item.name}</h2>
    <div className='tags'>
      <Tag text=" Status: Vivo"/>
      <Tag text="Espécie Humana"/>
      <Tag text="Origem: Terra C-137"/>
    </div>
    <img src={item.imageUrl} alt="" />
  </div>    
}
