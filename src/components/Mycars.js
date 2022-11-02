import { Component } from "react";
import Car from "./Cars";

class Mycars extends Component {
  state = {
    voitures: [
      { name: "Ford", color: "red", year: 2000 },
      { name: "Mercedes", color: "black", year: 2010 },
      { name: "Peugeot", color: "green", year: 2018 },
    ],
    title: "Mon Catalogue Voitures 2",
  };

  addTenYears = () => {
    const updatedState = this.state.voitures.map((param) => {
      return (param.year -= 10);
    });
    this.setState({
      updatedState,
    });
  };

  getFrenchYear = (year)=> { 
       
       const now = new Date().getFullYear() ; 

       const dateCar = now - year ; 

       let fullYear = " " ; 

       if(dateCar === 1) { 

        fullYear = " an" ; 

       }
       else if(dateCar > 1) { 
        fullYear = " ans" ;
       }

       return `${dateCar} ${fullYear}` ; 

  }


  render() {

         const [ford, mercedes,peugeot] = this.state.voitures ; 
       

    const year = new Date().getFullYear();

    return (
      <div>
        <h1>{this.state.title}</h1>

        <button onClick={this.addTenYears}> + 10 ans </button>

    
        {  this.state.voitures.map(({name,color,year}, index) => {
          return (
            <div key={index}>
              <Car 
                color={color}
                year={this.getFrenchYear(year)}
                key={index}
              >
                {name}

             </Car>
            </div>
          );
        }) }
      </div>
    );
  }
}

export default Mycars;
