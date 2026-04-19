import { useState } from 'react'
import { Mic,MessageSquare,Menu,Settings,ImagePlus, MessageSquareMore,ArrowRight} from 'lucide-react';
import './App.css'

export default function App() {
 

  return (
    <>
      <main>
        <section className='caixa'>
          <button className='bola1'>
            <Menu className='topo'/>
          </button>
          <button className='bola2'>
            <Settings className='topo'/>
          </button>
        </section>
        <h1 className='textos'>Vamos ver o que eu posso fazer</h1>
        <div className='tela1'>
        <div className='icone'>
          <Mic id='icones'/>
        </div>
        <h1 className='telas'>Vamos relembrar o nosso passado</h1>
          <button>Relembrar</button>
        </div>
        <div className='tela2'>
          <div className='per'>
            <MessageSquare className='dois'/>
          </div>
          <p className='pequeno'>Conversar</p>
          <ArrowRight className='seta'/>
        </div>
        <div className='tela3'>
          <div className='per'>
            <ImagePlus className='dois'/>
          </div>
          <p className='pequeno'>Achar imagem</p>
            <ArrowRight className='seta'/>
        </div>
        <section className='caixa2'>
          <h1 className='textos'>Pesquisas recentes</h1>
          <div className='perguntas'>
            <div className='iconess'>
              <MessageSquareMore className='icones'/>
            </div>
            <h2>"Melhores celulares para jogos em 2026."</h2>
          </div>
          <div className='perguntas'>
            <div className='iconess'>
              <MessageSquareMore className='icones'/>
            </div>
            <h2>"Diferença entre Classe e Interface no Java."</h2>
          </div>
          <div className='perguntas'>
            <div className='iconess'>
              <MessageSquareMore className='icones'/>
            </div>
            <h2>"Como testar rotas do Flask"</h2>
          </div>
        </section>
      </main>
    </>
  )
}


