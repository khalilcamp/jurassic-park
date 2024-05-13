import React from 'react'
import './sectionFour.css'
import ingenBuild from './assets/images/InGenHQ.webp'
const sectionFour = () => {
  return (
    <div className='sectionFour'>
            <div className='sectionFour-container'>
                <div id='text' className='sectionFour-text'>
                    <h1 id='title' className='sectionFour-text-title'>
                        Nossa História!
                    </h1>
                    <p className='sectionFour-text-paragraph'>Fundado em 1975. No início da década de 1980, 
                    o Dr. John Parker Hammond "teve" a ideia de clonar dinossauros a partir do 
                    DNA preservado em âmbarfossilizado. John Hammond criou um grupo de pesquisa, incluindo o Dr. Wu, para pôr este sonho em prática.
                    Eles conseguiram clonar um animal pré-histórico em 1984.</p>
                </div>
                <img className='sectionFour-img'src={ingenBuild} />
            </div>
    </div>
  )
}

export default sectionFour
