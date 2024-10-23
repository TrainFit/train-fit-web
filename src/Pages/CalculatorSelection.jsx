import "../components/AppPromotion/AppPromotion.scss"
import Kcal from "../assets/images/KCAL.jpg"
import RM from "../assets/images/RM.jpg"
import ImageZoom from "../components/ImageZoom/ImageZoom"


const CalculatorSelection = () => {
    return (
        <>
{/*             <div className="app-promotion d-flex justify-content-center align-items-center">
            <h1 className=" mt-5">Nuestras calculadoras</h1>
                <p className="text-left">Elija una calculadora para comenzar</p>
                <div className="app-promotion__image d-flex justify-content-center align-items-center gap-5">
                    <div className="">
                        <h2 className="">Calculadora de Kcal</h2>
                        <img src={Kcal} onClick={() => window.open('/CalculadoraKcal')} alt="Kcal" className=" app-promotion__store-logo" />
                    </div>
                    <div className="">
                        <h2>Calculadora de Rm</h2>
                        <img src={RM} onClick={() => window.open('/CalculadoraRm')} alt="RM" className="app-promotion__store-logo" />
                    </div>
                </div>
            </div> */}
            <div className="mt-5">
                <h2 className="text-center  mt-5">Nuestras calculadoras</h2>
                <p className="text-center">Elija una calculadora para comenzar</p>

            </div>
            <br />
            <ImageZoom className="border-top"></ImageZoom>
        </>
    )
}

export default CalculatorSelection