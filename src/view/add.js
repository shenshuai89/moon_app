import Moon from "moon";
const {div, p, button} = Moon.view.m;

const increment = ({data}) =>{
  const dataNew = data + 1
  return {
    data: dataNew,
    view: <page data=dataNew />
  }
}

const decrement = ({data}) =>{
  const dataNew = data - 1
  return {
    data: dataNew,
    view: <page data=dataNew />
  }
}
  

const page = ({data}) =>
  <div>
    <button @click=increment>+</button>
    <p>{data}</p>
    <button @click=decrement>-</button>
  </div>

export default page