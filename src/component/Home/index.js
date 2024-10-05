import {Component} from "react"
import './index.css' 
import Header from '../Header'
import DishItem from "../displayItem"
const apistatus ={
    intial:'INTIAL',
    inprogress:'INPROGRESS',
    failure:'FAILURE',
    success:'SUCCESS'
} 

class Home extends Component{
state={status:apistatus.intial,localdata:[]} 

async componentDidMount() {
    this.setState({status:apistatus.inprogress})
    
   const localdata= localStorage.getItem("apidata")
   if(localdata){
    const parsedata= JSON.parse(localdata)
   const displaydata= parsedata.record 
   const convertedData= displaydata.map((each)=>{
    const updateddata= { 
availablequantity:each.available_quantity,
category:each.category,
id:each.id,
imageurl:each.image_url,
name:each.name,
price:each.price,
subcategory:each.sub_category,
type:each.veg,
    }
    return updateddata
   
   })
   this.setState({localdata:convertedData,status:apistatus.success})
   }
   else{
    this.setState({staus:apistatus.failure})
   }
   

}

renderLoader=()=><><h1>Lodaing....</h1></>
renderFailure=()=><><h1>opps! Data Not Found</h1></>
renderSuccess =()=>{
    const {localdata}=this.state
    console.log(localdata)
    return <>
    <Header/>
    <div className="main-container">
        <ul className="ul-container">
            {localdata.map((dishitem)=>(<DishItem key={dishitem.id} item={dishitem}/>))}
        </ul>
        
    </div>
    </>
}

    renderBasedOnStatus(){
        const {status}=this.state 
        switch(status){
            case apistatus.inprogress:
                return this.renderLoader()
            case apistatus.success:
                return this.renderSuccess()
            case apistatus.failure:
                return this.renderFailure()
            default:
                return 
        }
    }

render(){
    return (<div>
        {this.renderBasedOnStatus()}
    </div>)

    


}
}
export default Home