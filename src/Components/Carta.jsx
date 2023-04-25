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
import perfil7 from './../usuario5.jpg'
import perfil8 from './../secretario.jpg'
import perfil9 from './../AGUA.jpeg'
import perfil10 from './../PERFIL3.jpg'
import perfil11 from './../colombia.jpg'
import perfil12 from './../elnorte.jpg'
import auto from './../auto.png'
import perfil13 from './../perfil4.jpg'
import banco from './../bancos.jfif'
import perfil14 from './../perfil5.jpg'
import autos from './../autos.avif'
import perfil15 from './../criba.png'
import perfil16 from './../perfilk.jpg'
import emer from './../911.jfif'

export default function Carta() {
  return (
    <Fragment>
  <div className='contenedor-general'>
    <div className='nav'></div>


    <div className='contenedor-general border'>

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
            <img src={perfil12} className='fotoperfil'/>
        </div>
        <div className='contenedor-publicacion'>  {/*CONTENEDOR TEXTO */}
            <div className='contenedor-tituloSubtitulo'>
            <div className='titulo'>EL NORTE</div>{/* titulo */}
            <div className='user-twitter'>@elnorte</div>
            </div>
            <div>¿No hay cultura de darles servicio a los autos en México?

Del total de #vehículos que fueron comprados y tienen un año, sólo 58% regresa a las #agencias para darles el servicio correspondiente.</div>{/* texto */}
            <div><img src={auto} className='publicacion'/></div>{/* imagen */}
            <div className='tags'> {/*CONTENEDOR tags */}
                 <Tag color='grey'>NEUTRO</Tag>
                <Tag color='blue'>CULTURA</Tag>
                <Tag color='blue'>AUTOMOTOR</Tag>
            </div>
        </div>
      </div>
      
    </div>

    <div className='contendor'> {/*CONTENEDOR GENERAL */}
      <div className='foto-texto-perfil'> {/*CONTENEDOR foto y texto vertical */}
        <div className='contenedor-perfil'>  {/*CONTENEDOR FOTO PERFIL */}
            <img src={perfil13} className='fotoperfil'/>
        </div>
        <div className='contenedor-publicacion'>  {/*CONTENEDOR TEXTO */}
            <div className='contenedor-tituloSubtitulo'>
            <div className='titulo'>Javier Morodo</div>{/* titulo */}
            <div className='user-twitter'>@JavierMtzMorodo</div>
            </div>
            <div>Este hilo es un gran ejemplo del mayor problema que tiene México ante la cultura y educación financiera: LOS BANCOS.

Es increíble que estando la tasa de CETES arriba del 11%, haya más de $1 BILLÓN de pesos al 0% de depositantes solamente en BBVA. 

¡Entre los bancos más grandes…</div>{/* texto */}
            <div><img src={banco} className='publicacion'/></div>{/* imagen */}
            <div className='tags'> {/*CONTENEDOR tags */}
            <Tag color='#ff2323'>NEGATIVO</Tag>
                <Tag color='blue'>CULTURA</Tag>
                <Tag color='blue'>MERCADO</Tag>
                <Tag color='blue'>BANCOS</Tag>
            </div>
        </div>
      </div>
      
    </div>


    <div className='contendor'> {/*CONTENEDOR GENERAL */}
      <div className='foto-texto-perfil'> {/*CONTENEDOR foto y texto vertical */}
        <div className='contenedor-perfil'>  {/*CONTENEDOR FOTO PERFIL */}
            <img src={perfil14} className='fotoperfil'/>
        </div>
        <div className='contenedor-publicacion'>  {/*CONTENEDOR TEXTO */}
            <div className='contenedor-tituloSubtitulo'>
            <div className='titulo'>Israel Hurtado</div>{/* titulo */}
            <div className='user-twitter'>@israelhurtadoa</div>
            </div>
            <div>Automóviles eléctricos pisan el acelerador en México, pero falta infraestructura-
            “Los expertos advierten que aún hay pendientes por atender en electromovilidad para estimular el mercado y que las armadoras y clientes tengan confianza”
            @MexicoHidrogeno
            </div>{/* texto */}
            <div><img src={autos} className='publicacion'/></div>{/* imagen */}
            <div className='tags'> {/*CONTENEDOR tags */}
                <Tag color='grey'>NEUTRO</Tag>
                <Tag color='blue'>MERCADO</Tag>
                <Tag color='blue'>AUTOMOTOR</Tag>
            </div>
        </div>
      </div>
      
    </div>


    
    <div className='contendor'> {/*CONTENEDOR GENERAL */}
      <div className='foto-texto-perfil'> {/*CONTENEDOR foto y texto vertical */}
        <div className='contenedor-perfil'>  {/*CONTENEDOR FOTO PERFIL */}
            <img src={perfil16} className='fotoperfil'/>
        </div>
        <div className='contenedor-publicacion'>  {/*CONTENEDOR TEXTO */}
            <div className='contenedor-tituloSubtitulo'>
            <div className='titulo'>Rosa Icela Rodríguez Velázquez</div>{/* titulo */}
            <div className='user-twitter'>@rosaicela_</div>
            </div>
            <div>El 911 está disponible las 24 horas del día. En caso de una emergencia de salud o seguridad, comuníquense.
            </div>{/* texto */}
            <div><img src={emer} className='publicacion'/></div>{/* imagen */}
            <div className='tags'> {/*CONTENEDOR tags */}
                <Tag color='grey'>NEUTRO</Tag>
                <Tag color='blue'>SEGURIDAD</Tag>
                <Tag color='blue'>EMERGENCIAS</Tag>
            </div>
        </div>
      </div>
      
    </div>


    <div className='contendor'> {/*CONTENEDOR GENERAL */}
      <div className='foto-texto-perfil'> {/*CONTENEDOR foto y texto vertical */}
        <div className='contenedor-perfil'>  {/*CONTENEDOR FOTO PERFIL */}
            <img src={perfil15} className='fotoperfil'/>
        </div>
        <div className='contenedor-publicacion'>  {/*CONTENEDOR TEXTO */}
            <div className='contenedor-tituloSubtitulo'>
            <div className='titulo'>Criba Historia y Cultura</div>{/* titulo */}
            <div className='user-twitter'>@cribahistoria</div>
            </div>
            <div>¿Ya conoces la Colección Libros del Alicate? Puedes encontrar investigaciones del movimiento minera, el anarquismo y la salud en México. 
            </div>{/* texto */}
            <div className='tags'> {/*CONTENEDOR tags */}
                <Tag color='grey'>NEUTRO</Tag>
                <Tag color='blue'>SALUD</Tag>
                <Tag color='blue'>LITERATURA</Tag>
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
             <Tag color='blue'>AMBIENTE</Tag>
                <Tag color='blue'>SISMO</Tag>
                <Tag color='blue'>MÉXICO</Tag>
            </div>
        </div>
      </div>
      
    </div>


    
    <div className='contendor'> {/*CONTENEDOR GENERAL */}
      <div className='foto-texto-perfil'> {/*CONTENEDOR foto y texto vertical */}
        <div className='contenedor-perfil'>  {/*CONTENEDOR FOTO PERFIL */}
            <img src={perfil7} className='fotoperfil'/>
        </div>
        <div className='contenedor-publicacion'>  {/*CONTENEDOR TEXTO */}
            <div className='contenedor-tituloSubtitulo'>
            <div className='titulo'>Guillermo Torre</div>{/* titulo */}
            <div className='user-twitter'>@GTorreAmione
          </div>
            </div>
            <div>El sistema de salud de Mexico no será el Danés ni tiene que serlo. Urge
            1. Más inversión: sueldos, recursos e infraestructura. 
            2. Competencia con incentivos entre hospitales 
            3. Transformación en los sistemas de administración hospitalaria 
            @TecSaludMX
            
            @StratCons</div>{/* texto */}
        
             <div className='tags'> {/*CONTENEDOR tags */}
             <Tag color='#ff2323'>NEGATIVO</Tag>
                <Tag color='blue'>SALUD</Tag>
                <Tag color='blue'>MÉXICO</Tag>

                
            </div>
        </div>
      </div>
    </div>


    <div className='contendor'> {/*CONTENEDOR GENERAL */}
      <div className='foto-texto-perfil'> {/*CONTENEDOR foto y texto vertical */}
        <div className='contenedor-perfil'>  {/*CONTENEDOR FOTO PERFIL */}
            <img src={perfil8} className='fotoperfil'/>
        </div>
        <div className='contenedor-publicacion'>  {/*CONTENEDOR TEXTO */}
            <div className='contenedor-tituloSubtitulo'>
            <div className='titulo'>Adán Augusto López H</div>{/* titulo */}
            <div className='user-twitter'>@adan_augusto
          </div>
            </div>
            <div>La coordinación entre poderes siempre rendirá frutos, estamos obligados a dejar las diferencias a un lado por el beneficio del pueblo. Hoy estuve en la 
            @SCJN
            y tratamos el tema de la 
            @GN_MEXICO_
            para fortalecer la seguridad en lo inmediato y en beneficio de las familias mexicanas</div>{/* texto */}
        
             <div className='tags'> {/*CONTENEDOR tags */}
             <Tag color='#008300'>POSITIVO</Tag>
             <Tag color='blue'>SEGURIDAD</Tag>
                <Tag color='blue'>PUEBLO</Tag>

                
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
            <img src={perfil9} className='fotoperfil'/>
        </div>
        <div className='contenedor-publicacion'>  {/*CONTENEDOR TEXTO */}
            <div className='contenedor-tituloSubtitulo'>
            <div className='titulo'>Semillas de Vida </div>{/* titulo */}
            <div className='user-twitter'>@_SemillasdeVida
        </div>
            </div>
            <div>En México solamente el 50% de la población tiene acceso a una fuente potable de agua y solamente el 55% de los cuerpos de agua en nuestro país tienen una buena calidad de ambiente.💧

#DíaInternacionalDelAgua</div>{/* texto */}
        {/*             <div><img src={publicacion} className='publicacion'/></div>{/* imagen */}
             <div className='tags'> {/*CONTENEDOR tags */}
             <Tag color='#ff2323'>NEGATIVO</Tag>
                <Tag color='blue'>AMBIENTE</Tag>
                <Tag color='blue'>AGUA</Tag>
               
            </div>
        </div>
      </div>
      
    </div>


    <div className='contendor'> {/*CONTENEDOR GENERAL */}
      <div className='foto-texto-perfil'> {/*CONTENEDOR foto y texto vertical */}
        <div className='contenedor-perfil'>  {/*CONTENEDOR FOTO PERFIL */}
            <img src={perfil10} className='fotoperfil'/>
        </div>
        <div className='contenedor-publicacion'>  {/*CONTENEDOR TEXTO */}
            <div className='contenedor-tituloSubtitulo'>
            <div className='titulo'>Fran García</div>{/* titulo */}
            <div className='user-twitter'>@frangaos
        </div>
            </div>
            <div>Remesas enviadas de Estados Unidos hacia otros países

          $28B México
          $15B China
          $10B India
          $10B Filipinas
          $6B Guatemala
          $6B Vietnam
          $5B Nigeria

          El mercado de remesas en México es enorme, hay oportunidades muy grandes para construir algo.</div>{/* texto */}
        {/*             <div><img src={publicacion} className='publicacion'/></div>{/* imagen */}
             <div className='tags'> {/*CONTENEDOR tags */}
             <Tag color='#008300'>POSITIVO</Tag>
                <Tag color='blue'>MERCADO</Tag>
                <Tag color='blue'>OPORTUNIDADES</Tag>
               
            </div>
        </div>
      </div>
      
    </div>



    <div className='contendor'> {/*CONTENEDOR GENERAL */}
      <div className='foto-texto-perfil'> {/*CONTENEDOR foto y texto vertical */}
        <div className='contenedor-perfil'>  {/*CONTENEDOR FOTO PERFIL */}
            <img src={perfil11} className='fotoperfil'/>
        </div>
        <div className='contenedor-publicacion'>  {/*CONTENEDOR TEXTO */}
            <div className='contenedor-tituloSubtitulo'>
            <div className='titulo'>corferiasbogota</div>{/* titulo */}
            <div className='user-twitter'>@CorferiasBogota
        </div>
            </div>
            <div>La literatura y cultura son las protagonistas en el pabellón de México, País Invitado de Honor de la #FILBo35años.

Visítanos y disfruta de dos librerías, tres exposiciones artísticas, contenidos audiovisuales, una barra gastronómica, ¡y más!</div>{/* texto */}
        {/*             <div><img src={publicacion} className='publicacion'/></div>{/* imagen */}
             <div className='tags'> {/*CONTENEDOR tags */}
             <Tag color='#008300'>POSITIVO</Tag>
                <Tag color='blue'>CULTURA</Tag>
                <Tag color='blue'>LITERATURA</Tag>
               
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
                <Tag color='blue'>AMBIENTE</Tag>
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
                <Tag color='blue'>SALUD</Tag>
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
                 <Tag color='blue'>SEGURIDAD</Tag>
                <Tag color='blue'>AGRESIÓN</Tag>
                <Tag color='blue'>POLICÍA</Tag>
                
            </div>
        </div>
      </div>
      
    </div>



    </div>
    </div>
    </Fragment>
  )
}
