import React from 'react'
import "../components/Animation.scss"

import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TermsConditions = () => {
    return (
       <>
        <Container >
            
            <div className="row ">
                <div className="col-12 p-3 m-3 ">
                    <h1 className="mb-3 mt-5">Términos y condiciones de TrainFit</h1>
                </div>

                <div className="col-lg-12 col-12 mt-3 mb-lg-5 d-flex justify-content-center ">
                    <article className="me-4 p-3">
                        <h2 className="m-2">1. Introducción Bienvenido a TrainFit.</h2 >

                        <p className="m-2 fs-6">Estos Términos y Condiciones
                            regulan el uso de nuestra Aplicación. Al acceder o usar nuestra Aplicación, usted acepta
                            estar sujeto a estos Términos y Condiciones. Si tiene alguna pregunta, puede
                            contactarnos en trainfitapp@gmail.com.</p>

                        <h2 className="m-2">2. Aceptación de los términos </h2>
                        

                        <p className="m-2 fs-6" >Al utilizar la Aplicación,
                            usted acepta estos Términos y Condiciones en su totalidad. Si no está de acuerdo con
                            alguna parte de los términos, no debe usar la Aplicación.</p>

                        <h2 className="m-2">3. Modificaciones de los términos
                        </h2 >



                        <p className="m-2 fs-6" >Nos reservamos el derecho de
                            modificar estos Términos y Condiciones en cualquier momento. Le notificaremos sobre
                            cualquier cambio publicando los nuevos términos en la Aplicación. El uso continuado de
                            la Aplicación después de la publicación de cambios implica la aceptación de los mismos
                        </p>

                        <h2 className="m-2">4. Descripción del servicio
                            el usuario</h2 >


                        <p className="m-2 fs-6" >Trainfit es una aplicación
                            móvil que ofrece una variedad de funcionalidades para apoyar la gestión nutricional y el
                            seguimiento de la actividad física de sus usuarios. Las principales características de
                            la aplicación incluyen:</p>

                        <ul>
                            <li>
                                <p className="m-2 fs-6">Verificación y registro de los valores nutricionales de
                                    productos y alimentos: Los usuarios pueden escanear o buscar productos
                                    alimenticios para obtener información detallada sobre sus valores nutricionales.
                                </p>
                            </li>
                            <li>
                                <p className="m-2 fs-6">Registro del historial nutricional de los usuarios: Trainfit
                                    permite a los usuarios registrar y hacer un seguimiento de su ingesta diaria de
                                    alimentos, ayudándoles a mantener un historial detallado de su nutrición.</p>
                            </li>
                            <li>
                                <p className="m-2 fs-6">Historial de actividad física: Los usuarios pueden registrar sus
                                    actividades físicas diarias, como ejercicios y entrenamientos, manteniendo un
                                    registro completo de su actividad física.</p>
                            </li>
                            <li>
                                <p className="m-2 fs-6">Recopilación de datos de actividad de entrenamiento basados en
                                    datos introducidos por el usuario: La aplicación recopila y organiza los datos
                                    de entrenamiento introducidos por el usuario, proporcionando informes y análisis
                                    detallados de sus sesiones de ejercicio.</p>
                            </li>
                            <li>
                                <p className="m-2 fs-6">Recopilación de datos de peso corporal introducidos por el
                                    usuario: Los usuarios pueden introducir sus datos de peso corporal regularmente,
                                    permitiendo a Trainfit proporcionar un seguimiento de las tendencias y cambios
                                    en el peso corporal a lo largo del tiempo.</p>
                            </li>
                        </ul>






                        <h2 className="m-2">5. Registro y cuentas de usuario</h2>
                        
                        <p className="m-2 fs-6" >Para utilizar ciertas funciones
                            de la Aplicación, es posible que deba registrarse y crear una cuenta. Debe proporcionar
                            información precisa y completa y mantener la confidencialidad de su contraseña. Usted es
                            responsable de todas las actividades que ocurran bajo su cuenta. La edad mínima para
                            registrarse es de 14 años.</p>




                        <h2 className="m-2">6. Uso aceptable</h2>


                        <p className="m-2 fs-6" >Usted se compromete a utilizar
                            la Aplicación de conformidad con todas las leyes y regulaciones aplicables. No debe usar
                            la Aplicación para actividades ilegales, comerciales no autorizadas o comportamientos
                            que puedan dañar a otros usuarios o a la Aplicación.
                        </p>
                        <h2 className="m-2">7. Política de privacidad </h2>

                        <p className="m-2 fs-6" >Nuestra Política de Privacidad,
                            disponible <Link to="/politicas" className=" text-warning">AQUÍ</Link>,
                            explica cómo manejamos sus datos personales y protegemos su privacidad cuando utiliza
                            nuestra Aplicación.
                        </p>
                        
                  
              









                        <h2 className="m-2">8. Propiedad intelectual</h2>

                        <p className="m-2 fs-6" >Todos los derechos sobre las
                            Plataformas, incluidas sus diversas funcionalidades, en su totalidad y en partes, en
                            particular los elementos textuales, gráficos y multimedia, y los elementos de las
                            aplicaciones de software que generan y operan las Plataformas, incluidos los derechos de
                            autor, derechos conexos, derechos de propiedad industrial y cualquier derecho derivado
                            (licencias) necesarios según las circunstancias, están conferidos a Trainfit.
                        </p>
                        <p className="m-2 fs-6" >La Licencia es intransferible y se otorga por la duración del uso de la Aplicación por parte del Usuario de acuerdo con su propósito previsto y de acuerdo con estas Normas.
                        </p>
                        <p className="m-2 fs-6" >La transmisión a terceros del contenido de las Plataformas solo está permitida mediante el uso de las herramientas incluidas en las Plataformas y destinadas a este propósito.
                        </p>
                        <p className="m-2 fs-6" >El Usuario no tiene derecho a realizar acciones fuera del alcance de la Licencia, en particular a descompilar o desensamblar el software que se ejecuta dentro de la Aplicación o a ingeniar inversamente el código fuente del mismo. El Usuario no tiene derecho a descompilar o desensamblar la Aplicación para usarla según lo previsto sin el consentimiento expreso de Trainfit. Las oraciones anteriores no excluyen las disposiciones obligatorias con respecto a la descompilación o desensamblaje.
                        </p>
                        <p className="m-2 fs-6" >El Usuario no puede reproducir, vender u ofrecer en el mercado ni distribuir la Aplicación, en su totalidad o en parte, en particular transmitirla o ponerla a disposición en sistemas informáticos y redes, sistemas de distribución de aplicaciones móviles o cualquier otro sistema de comunicación de datos.
                        </p>
                        <p className="m-2 fs-6" >En caso de que el Usuario viole las reglas de las Plataformas o los términos de la Licencia otorgada, Trainfit estará facultado para bloquear el acceso del Usuario a la Aplicación o al Sitio y revocar la Licencia otorgada para el uso de la Aplicación. Lo anterior no afecta al derecho de Trainfit de tomar otras medidas apropiadas y legales en relación con la infracción.
                        </p>
                        <h6 className="m-2">9. Limitación de responsabilidad</h6>

                        <p className="m-2 fs-6" >La Aplicación se proporciona "tal cual" y "según disponibilidad". Trainfit no se hace responsable de errores, fallos, interrupciones o daños que puedan surgir del uso de la Aplicación. Nuestra responsabilidad máxima en relación con cualquier reclamación será el monto pagado por usted, si lo hubiera, por usar la Aplicación.
                        </p>






                        <h6 className="m-2">10. Garantías y exenciones de responsabilidad</h6>


                        <p className="m-2 fs-6" >No garantizamos que la Aplicación esté libre de errores o que funcione sin interrupciones. En la medida permitida por la ley, excluimos todas las garantías, explícitas o implícitas, relacionadas con la Aplicación y su uso.</p>

                        <p className="m-2 fs-6" > El usuario puede consultar,
                            modificar o
                            eliminar parte de su información desde los
                            ajustes
                            de la cuenta dentro de TrainFit. También puede ejercer sus derechos, como el derecho
                            de
                            acceso, rectificación, eliminación y restricción, contactándonos a través de la
                            aplicación
                            TrainFit.</p>

                        <h6 className="m-2">11. Indemnización</h6>

                        <p className="m-2 fs-6">Usted se compromete a indemnizar y mantener indemne a Trainfit, sus directores, empleados y agentes de cualquier reclamación, daño, obligación, pérdida, responsabilidad, coste o deuda y gasto derivado de su uso de la Aplicación o de su incumplimiento de estos Términos y Condiciones.</p>

                        <h6 className="m-2">12. Terminación</h6>

                        <p className="m-2 fs-6">Podemos suspender o terminar su acceso a la Aplicación en cualquier momento, sin previo aviso, por cualquier motivo, incluyendo si usted incumple estos Términos y Condiciones. Tras la terminación, cesará su derecho a usar la Aplicación y se eliminarán sus datos asociados a la cuenta.</p>
                        <h6 className="m-2">13. Ley aplicable y jurisdicción</h6>

                        <p className="m-2 fs-6">Estos Términos y Condiciones se rigen e interpretan de acuerdo con las leyes de España. Usted acepta someterse a la jurisdicción exclusiva de los tribunales de Madrid para resolver cualquier disputa relacionada con estos términos.</p>
                        <h6 className="m-2">14. Resolución de disputas</h6>

                        <p className="m-2 fs-6">En caso de que surja alguna disputa, controversia o reclamación relacionada con su uso de Trainfit o con estos Términos y Condiciones, usted se compromete a intentar resolver la disputa de manera amistosa mediante una negociación directa con nosotros.</p>
                        <p className="m-2 fs-6">Si no se puede llegar a una solución satisfactoria a través de la negociación, la disputa se someterá a mediación antes de recurrir a cualquier otro medio de resolución de conflictos. La mediación se llevará a cabo de acuerdo con las reglas de Asociación Española de Mediación, con un mediador designado por ambas partes.</p>
                        <p className="m-2 fs-6">Si la disputa no se resuelve mediante la mediación, se procederá a un arbitraje vinculante conforme a las reglas de Corte de Arbitraje de Madrid, y la resolución del árbitro será final y vinculante para ambas partes. El arbitraje se llevará a cabo en Madrid y se realizará en castellano.</p>
                        <p className="m-2 fs-6">Ambas partes acuerdan que cualquier disputa se resolverá de forma individual y no en una acción colectiva. Usted renuncia a su derecho de participar en cualquier demanda colectiva en relación con cualquier disputa con nosotros.</p>

                        <h6 className="m-2">15. Disposiciones generales</h6>

                        <p className="m-2 fs-6">Estos Términos y Condiciones constituyen el acuerdo completo entre usted y Trainfit con respecto al uso de la Aplicación. Si alguna disposición de estos términos es considerada inválida, las demás disposiciones seguirán siendo válidas y aplicables.</p>

                        <h6 className="m-2">16. Enlaces a terceros</h6>

                        <p className="m-2 fs-6">La Aplicación puede contener enlaces a sitios web o servicios de terceros que no son propiedad ni están controlados por Trainfit. No somos responsables del contenido, políticas de privacidad o prácticas de sitios web o servicios de terceros.</p>

                        <h6 className="m-2">17. Comentarios y opiniones de los usuarios</h6>

                        <p className="m-2 fs-6">Usted puede enviar comentarios y opiniones sobre la Aplicación. Al hacerlo, usted nos concede una licencia no exclusiva, libre de regalías, para utilizar, reproducir y publicar dichos comentarios en relación con la operación de la Aplicación.</p>

                        <h6 className="m-2">18. Idioma de los términos y condiciones</h6>

                        <p className="m-2 fs-6">Estos Términos y Condiciones están redactados en castellano. En caso de discrepancias entre las versiones traducidas de estos términos, prevalecerá la versión en castellano.</p>

                    </article>
                </div>

            </div>
     
    </Container>
       
       </>
    )
}

export default TermsConditions