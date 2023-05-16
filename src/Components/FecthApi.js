import React , {Component} from 'react';

fetch('https://jsonplaceholder.typicode.com/todos/1').then((response)=> {
  response = response.json()
  response.then((result)=> {
    console.log(result)
  })
});
class FetchApi extends Component{
  render(){
    return(
      <div>
         <h1>Listes des article</h1>

      </div>
    )
  };
}
