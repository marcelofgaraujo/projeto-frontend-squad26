import { useState, useEffect } from 'react'
import Header from '../partials/Header'
import Footer from '../partials/Footer'
import { Link } from 'react-router-dom'
import Card from '../../components/card'
import './style.css'

function Search () {

    return (
        <>
        <Header />
        <main className='mainSearch'>
            <section>
                <div className='newSearch'>NOVA BUSCA</div>
                <span>Acessibilidade</span>
            </section>
            <div className='cards'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </div>
        </main>
        <Footer />
        </>
    )
}

export default Search