import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function NavCategory() {
  return (
    <div className='category'>
        <div className='category__content'>
            <h2>Premium / Nuestros Cortes</h2>
            <nav className='nav-category'>
                <Link to='/category/ternera'>
                    <button className='btn-category'>Vodkas</button>
                </Link>
                <Link to='/category/ave'>
                    <button className='btn-category'>Aperitivos</button>
                </Link>
                <Link to='/category/cerdo'>
                    <button className='btn-category'>Energizantes</button>
                </Link>
                <Link to='/category/achura'>
                    <button className='btn-category'>Gaseosas</button>
                </Link>
            </nav>
        </div>
        
    </div>
  )
}

export default NavCategory;