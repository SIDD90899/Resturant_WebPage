import { useEffect } from "react"
import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




const Menupage = () => {
    const [item,setItem]= useState({recipes:[]})


    function GetItem(){
        fetch("https://dummyjson.com/recipes")
        .then(res=>res.json())
        .then(item=>setItem(item))
    }
    useEffect(()=>{
        GetItem();
    },[])

    
  return (
    <div className="container-fluid ">
      <div className="d-flex justify-content-center flex-wrap ">
      {
        item.recipes.map(recipe=>
            <Card key={recipe.id} className="m-3" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={recipe.image} height="200" width="200" />
      <Card.Body>
        <Card.Title>{recipe.name}</Card.Title>
        <Card.Text>
          {recipe.cuisine}
        </Card.Text>
        <Button variant="primary">Add Item</Button>
      </Card.Body>
    </Card>
        )
      }
      </div>
    </div>
  )
}

export default Menupage
