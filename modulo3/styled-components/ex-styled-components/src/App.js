import React, { useState } from 'react'
import styled from 'styled-components'
import DisplayLabenu from './components/display/DisplayLabenu';
import { DivDisplay } from './components/display/displayStyle';
import FooterLabenu from './components/footer/FooterLabenu';
import HeaderLabenu from './components/header/HeaderLabenu';
import PainelEsquerda from './components/left-panel/PainelEsquerda';
import PainelDireita from './components/right-panel/PainelDireita';
import { DivPai } from './components/display/displayStyle';





function App() {
  return (
    <DivPai>   
      <HeaderLabenu         
        nomeLabenu={'LabZap'} 
      />
     <DivDisplay>
        <PainelEsquerda/>
        <DisplayLabenu/>
        <PainelDireita/>
     </DivDisplay>
     <footer>
        <FooterLabenu/>
     </footer> 
    </DivPai>
  );
}

export default App;
