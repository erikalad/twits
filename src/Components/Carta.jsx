import React, { Fragment } from 'react'
import perfil from './../fotoperfil.jpg'
import './Carta.css'
import publicacion from './../publicacion.jfif'
import { Tag } from 'antd'

export default function Carta() {
  return (
    <Fragment>
    <div className='contendor'> {/*CONTENEDOR GENERAL */}
      <div className='foto-texto-perfil'> {/*CONTENEDOR foto y texto vertical */}
        <div className='contenedor-perfil'>  {/*CONTENEDOR FOTO PERFIL */}
            <img src={perfil} className='fotoperfil'/>
        </div>
        <div className='contenedor-publicacion'>  {/*CONTENEDOR TEXTO */}
            <div className='contenedor-tituloSubtitulo'>
            <div className='titulo'>Marcelo Ebrard C.</div>{/* titulo */}
            <div className='user-twitter'>@m_ebrard</div>
            </div>
            <div>Felicitaciones a la Comunidad Judía por el Mural Am Yisrel Chai , del pintor Julio Carrasco, que relata cuatro mil años de historia del pueblo judío y estará en el Aeropuerto de Jerusalén.</div>{/* texto */}
            <div><img src={publicacion} className='publicacion'/></div>{/* imagen */}
            <div className='tags'> {/*CONTENEDOR tags */}
                <Tag color='#008300'>POSITIVO</Tag>
                <Tag color='blue'>CULTURA</Tag>
                <Tag color='blue'>ALEGRÍA</Tag>
            </div>
        </div>
      </div>
      
    </div>

    <div className='contendor'> {/*CONTENEDOR GENERAL */}
      <div className='foto-texto-perfil'> {/*CONTENEDOR foto y texto vertical */}
        <div className='contenedor-perfil'>  {/*CONTENEDOR FOTO PERFIL */}
            <img src={perfil} className='fotoperfil'/>
        </div>
        <div className='contenedor-publicacion'>  {/*CONTENEDOR TEXTO */}
            <div className='contenedor-tituloSubtitulo'>
            <div className='titulo'>Marcelo Ebrard C.</div>{/* titulo */}
            <div className='user-twitter'>@m_ebrard</div>
            </div>
            <div>Les invito a participar en el simulacro nacional de sismo mañana a las 11 am.  Sonará la alerta sísmica.</div>{/* texto */}
{/*             <div><img src={publicacion} className='publicacion'/></div>{/* imagen */}
             <div className='tags'> {/*CONTENEDOR tags */}
                <Tag color='grey'>NEUTRO</Tag>
                <Tag color='blue'>SISMO</Tag>
                <Tag color='blue'>ALERTA</Tag>
            </div>
        </div>
      </div>
      
    </div>
    </Fragment>
  )
}
