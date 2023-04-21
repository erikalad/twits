import React, { Fragment } from 'react'
import perfil from './../fotoperfil.jpg'
import './Carta.css'
import publicacion from './../publicacion.jfif'
import { Tag } from 'antd'
import perfil2 from './../perfil.jpg'
import perfil3 from './../presi.jpg'
import perfil4 from './../USER.jpg'
import perfil5 from './../orlando.jpg'
import perfil6 from './../ropa.jpg'

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
            <img src={perfil6} className='fotoperfil'/>
        </div>
        <div className='contenedor-publicacion'>  {/*CONTENEDOR TEXTO */}
            <div className='contenedor-tituloSubtitulo'>
            <div className='titulo'>Kantar Latinoamérica</div>{/* titulo */}
            <div className='user-twitter'>@KantarLatam
          </div>
            </div>
            <div>El gasto en ropa y calzado en México alcanzó el 18.9% al cierre del 2022. El mercado Fashion se enfrenta a compradores más cautelosos, ya que están reduciendo el número de prendas que adquieren en cada ocasión. 
</div>{/* texto */}
        
             <div className='tags'> {/*CONTENEDOR tags */}
             <Tag color='#ff2323'>NEGATIVO</Tag>
                <Tag color='blue'>MERCADO</Tag>
                <Tag color='blue'>REDUCCIÓN</Tag>
                
            </div>
        </div>
      </div>
      
    </div>

    <div className='contendor'> {/*CONTENEDOR GENERAL */}
      <div className='foto-texto-perfil'> {/*CONTENEDOR foto y texto vertical */}
        <div className='contenedor-perfil'>  {/*CONTENEDOR FOTO PERFIL */}
            <img src={perfil3} className='fotoperfil'/>
        </div>
        <div className='contenedor-publicacion'>  {/*CONTENEDOR TEXTO */}
            <div className='contenedor-tituloSubtitulo'>
            <div className='titulo'>Andrés Manuel</div>{/* titulo */}
            <div className='user-twitter'>@lopezobrador_</div>
            </div>
            <div>Afortunadamente no se registran daños por el sismo en Guerrero, Michoacán ni en la Ciudad de México. Eso me informa la Secretaría de la Defensa Nacional.</div>{/* texto */}
{/*             <div><img src={publicacion} className='publicacion'/></div>{/* imagen */}
             <div className='tags'> {/*CONTENEDOR tags */}
             <Tag color='#008300'>POSITIVO</Tag>
                <Tag color='blue'>SISMO</Tag>
                <Tag color='blue'>MÉXICO</Tag>
            </div>
        </div>
      </div>
      
    </div>


    <div className='contendor'> {/*CONTENEDOR GENERAL */}
      <div className='foto-texto-perfil'> {/*CONTENEDOR foto y texto vertical */}
        <div className='contenedor-perfil'>  {/*CONTENEDOR FOTO PERFIL */}
            <img src={perfil2} className='fotoperfil'/>
        </div>
        <div className='contenedor-publicacion'>  {/*CONTENEDOR TEXTO */}
            <div className='contenedor-tituloSubtitulo'>
            <div className='titulo'>Guille Vidal</div>{/* titulo */}
            <div className='user-twitter'>@eltemaguillev
</div>
            </div>
            <div>La venta del #avionpresidencial es mucho más que una transacción financiera, es un símbolo de que México esta en una nueva etapa en la que el presidente es uno de nosotros, y por lo tanto trabaja para que todos estemos bien.

        No sólo se va el avión, se va una manera de pensar 🇲🇽</div>{/* texto */}
        {/*             <div><img src={publicacion} className='publicacion'/></div>{/* imagen */}
             <div className='tags'> {/*CONTENEDOR tags */}
             <Tag color='#008300'>POSITIVO</Tag>
                <Tag color='blue'>PRESIDENTE</Tag>
                <Tag color='blue'>NUEVA ETAPA</Tag>
                <Tag color='blue'>AVION PRESIDENCIAL</Tag>
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

    <div className='contendor'> {/*CONTENEDOR GENERAL */}
      <div className='foto-texto-perfil'> {/*CONTENEDOR foto y texto vertical */}
        <div className='contenedor-perfil'>  {/*CONTENEDOR FOTO PERFIL */}
            <img src={perfil4} className='fotoperfil'/>
        </div>
        <div className='contenedor-publicacion'>  {/*CONTENEDOR TEXTO */}
            <div className='contenedor-tituloSubtitulo'>
            <div className='titulo'>Julia Álvarez Icaza Ramírez</div>{/* titulo */}
            <div className='user-twitter'>@Jualicra</div>
            </div>
            <div>Nunca olvidar. Con el dinero del avión presidencial de pequeños faraones se van a construir dos hospitales totalmente equipados, uno en Tlapa, la zona más pobre de México, para la montaña de Guerrero y el otro en Tuxtepec, Oaxaca. No puede haber gobierno rico, con pueblo pobre.</div>{/* texto */}
        
             <div className='tags'> {/*CONTENEDOR tags */}
             <Tag color='#008300'>POSITIVO</Tag>
                <Tag color='blue'>PRESIDENTE</Tag>
                <Tag color='blue'>HOSPITALES</Tag>
                <Tag color='blue'>AVION PRESIDENCIAL</Tag>
            </div>
        </div>
      </div>
      
    </div>


    <div className='contendor'> {/*CONTENEDOR GENERAL */}
      <div className='foto-texto-perfil'> {/*CONTENEDOR foto y texto vertical */}
        <div className='contenedor-perfil'>  {/*CONTENEDOR FOTO PERFIL */}
            <img src={perfil5} className='fotoperfil'/>
        </div>
        <div className='contenedor-publicacion'>  {/*CONTENEDOR TEXTO */}
            <div className='contenedor-tituloSubtitulo'>
            <div className='titulo'>Univision Orlando</div>{/* titulo */}
            <div className='user-twitter'>@UnivisionOrl
          </div>
            </div>
            <div>La policía de la Ciudad de México realizó una movilización en una de las zonas comerciales más populares de la capital. La causa: una agresión con arma de fuego que resultó en la muerte de un presunto miembro del cartel de los Arellano Félix.</div>{/* texto */}
        
             <div className='tags'> {/*CONTENEDOR tags */}
             <Tag color='#ff2323'>NEGATIVO</Tag>
                <Tag color='blue'>AGRESIÓN</Tag>
                <Tag color='blue'>POLICÍA</Tag>
                
            </div>
        </div>
      </div>
      
    </div>

 
    </Fragment>
  )
}
