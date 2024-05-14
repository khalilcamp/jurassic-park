import React from "react";
import "./sectionFour.css";
import ingenBuild from "./assets/images/InGenHQ.webp";
const sectionFour = () => {
  return (
    <div className="sectionFour">
      <div className="sectionFour-container">
        <div id="text" className="sectionFour-text">
          <p className="sectionFour-text-paragraph">
            Fundado em 1975. No início da década de 1980, o Dr. John Parker
            Hammond "teve" a ideia de clonar dinossauros a partir do DNA
            preservado em âmbarfossilizado. John Hammond criou um grupo de
            pesquisa, incluindo o Dr. Wu, para pôr este sonho em prática. Eles
            conseguiram clonar um animal pré-histórico em 1984.
          </p>
          <p className="sectionFour-text-paragraph">
            Em 1985, após essa conquista, Hammond conseguiu atrair investidores
            suficientes para fundar uma corporação inteira, a International
            Genetic Technologies, Inc. (InGen), dedicada à clonagem de vidas
            extintas. Sua missão era ser a principal empresa de pesquisa do
            mundo de ciência genética e biológica de ponta e tecnologia. A sede
            da InGen estava localizada em Palo Alto, CA, a pesquisa inicial
            também ocorreu lá. Mais tarde, a InGen transferiu maior parte de sua
            pesquisa para instalações na Ilha Sorna. Os dinossauros
            recém-nascidos cresciam e eram alimentados nesta ilha.
          </p>
        </div>
        <img className="sectionFour-img" src={ingenBuild} />
      </div>
    </div>
  );
};

export default sectionFour;
