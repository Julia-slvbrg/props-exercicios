import React from "react";
import "./styles.css";
import { CardVideo } from "./components/CardVideo";


export default function App() {

  const card1 = {
    imagem: "https://picsum.photos/400/400?a=1",
    usuario: "Usuario1" 
  }; 

  const card2 = {
    imagem: "https://picsum.photos/400/400?a=1",
    usuario: "Usuario2" 
  }; 

  const card3 = {
    imagem: "https://picsum.photos/400/400?a=1",
    usuario: "Usuario3" 
  }; 

  const card4 = {
    imagem: "https://picsum.photos/400/400?a=1",
    usuario: "Usuario4" 
  }; 

  const card5 = {
    imagem: "https://picsum.photos/400/400?a=1",
    usuario: "Usuario5" 
  }; 

  const card6 = {
    imagem: "https://picsum.photos/400/400?a=1",
    usuario: "Usuario6" 
  }; 

  const card7 = {
    imagem: "https://picsum.photos/400/400?a=1",
    usuario: "Usuario7" 
  }; 

  const card8 = {
    imagem: "https://picsum.photos/400/400?a=1",
    usuario: "Usuario8" 
  }; 

  return (
    <div>
      <CardVideo 
        card1={card1}
        card2={card2}
        card3={card3}
        card4={card4}
        card5={card5}
        card6={card6}
        card7={card7}
        card8={card8}
      />
    </div>
  );
}