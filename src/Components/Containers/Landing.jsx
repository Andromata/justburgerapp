import React from 'react'
import Slider from '../Component/Carrusel/Slider'
import ProductCatalogue from '../Component/ProductsCatalogue/ProductCatalogue'
import '../../Styles/Containers/Landing.scss'

export default function Landing() {
    return (
        <div className="body-container">
            <div className="body-top">
            <Slider />
            </div>
            <div className="body-center">
            <ProductCatalogue />
            </div>
        </div>
    )
}
