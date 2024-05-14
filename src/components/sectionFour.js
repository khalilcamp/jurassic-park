import React from "react";
import "./sectionFour.css";
import ingenBuild from "./assets/images/InGenHQ.webp";
import mrDNA from "./assets/images/mr__dna_by_heeeeresizzy_d8qubja-pre.png";
const sectionFour = () => {
  return (
    <div className="sectionFour">
      <div className="sectionFour-container">
        <div id="text" className="sectionFour-text">
          <p className="sectionFour-text-paragraph item-1">
            <ul>
              <li>
                1975: Nasce o sonho: John Hammond funda a empresa com a
                ambiciosa meta de clonar dinossauros a partir do DNA em âmbar.
              </li>
              <li>
                1984: Um marco na ciência: A InGen conquista o feito inédito
                de clonar o primeiro animal pré-histórico, abrindo caminho para
                um futuro extraordinário.
              </li>
              <li>
                1985: Sonho se torna realidade: Com o sucesso da clonagem,
                Hammond atrai investimentos e cria a InGen, uma empresa dedicada
                a trazer espécies extintas de volta à vida.
              </li>
              <li>
                Missão InGen: Liderar a pesquisa de ponta em genética,
                biologia e tecnologia, tornando-se referência mundial em
                biotecnologia e reescrevendo a história da vida na Terra.
              </li>
              <li>
                Mais do que clonagem: A InGen não se limita à criação de
                dinossauros. A empresa busca dominar a biotecnologia, avançando
                em áreas como manipulação genética, engenharia de tecidos e
                medicina regenerativa.
              </li>
              <li>
                Um futuro promissor: Com a InGen, os limites da ciência são
                desafiados e um futuro promissor se desenha, onde a
                biotecnologia tem o poder de transformar o mundo.
              </li>
            </ul>
          </p>
          <p className="sectionFour-text-paragraph item-2">
            A sede da InGen estava localizada em Palo Alto, CA, a pesquisa
            inicial também ocorreu lá. Mais tarde, a InGen transferiu maior
            parte de sua pesquisa para instalações na Ilha Sorna. Os dinossauros
            recém-nascidos cresciam e eram alimentados nesta ilha.
          </p>
          <p className="sectionFour-text-paragraph item-3">
            Quando diversas espécies de dinossauros foram clonadas com sucesso,
            John Hammond começou a procurar um lugar onde o público podia ver
            esses animais. Em algum momento na década de 1980, Hammond começou a
            construção de um anfiteatro em San Diego. No entanto, em 1988
            Hammond abandonou a ideia do anfiteatro e começou a construir um
            projeto muito maior, na Ilha Nublar, a 120 milhas da Costa Rica. Em
            1993, o parque estava quase pronto. No entanto, a interferência de
            um dos rivais da InGen, provavelmente a BioSyn, causou o
            desligamento de todos os sistemas do parque, e os dinossauros
            fugiram de seus recintos. Sem a confiança dos seus investidores,
            Jurassic Park não pôde ser aberto.
          </p>
        </div>
        <div className="sectionFour-text-imgs">
          <img src={mrDNA}></img>
        </div>
      </div>
    </div>
  );
};

export default sectionFour;
