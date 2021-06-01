import React from 'react'
import CategoriesBar from './CategoriesBar'
import Catalogue from './Catalogue'
import '../../../Styles/Containers/ProductCatalogue.scss'
export default function ProductCatalogue() {
    return (
        <div className="container">
            <CategoriesBar />
            <Catalogue />
        </div>
    )
}
