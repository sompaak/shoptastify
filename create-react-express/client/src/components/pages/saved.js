import React from "react";




class Saved extends React.Component {

  constructor(){
    super();
    this.state = {
      queryString:"",
      items:[]
    }
  }
  componentDidMount() {
   fetch("/getIds", {method: "GET"})
      .then(response => {
    console.log("as;ldkghna;kbfns;kv")

        response.text().then(responseText => {
          console.log("server response", JSON.parse(responseText))
        })
      })
  }
 

  // below form create a wrapper component that allows iteration of state array
    // each item is passed to a component via props 
  render(){
    return(
      <div> </div> 
    )
  }
}

export default Saved;






































 