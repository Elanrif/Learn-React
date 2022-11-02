const Toto = (props) => {
    console.log(props)
   
  return (
    <div>
      <h2>{props.name}</h2>
    <button
     disabled ={props.leState.disabled}
     onClick = {()=>props.reponseTotoProps(" Non , je veux regarder la télé")}
      >
        Réponse
  </button> 

      <p>{props.leState.messageToto}</p>
    </div>
  );
};

export default Toto;
