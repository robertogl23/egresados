import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'


export class Paginacion extends PureComponent {
    render() {
        return (
            <div>
                <NavLink
                    to='/'
								activeClassName='selected'
							>
								<button className='estilos'>
                                    1
                                </button>
                </NavLink>
                <NavLink
                    to='/egresados1'
								activeClassName='selected'
							>
								<button className='estilos'>
                                    2
                                </button>
                </NavLink>
                <NavLink
                    to='/egresados2'
								activeClassName='selected'
							>
								<button className='estilos'>
                                    3
                                </button>
                </NavLink>
                <NavLink
                    to='/egresados3'
								activeClassName='selected'
							>
								<button className='estilos'>
                                    4
                                </button>
                </NavLink>
                <NavLink
                    to='/egresados4'
								activeClassName='selected'
							>
								<button className='estilos'>
                                    5
                                </button>
                </NavLink>
                <NavLink
                    to='/egresados5'
								activeClassName='selected'
							>
								<button className='estilos'>
                                    6
                                </button>
                </NavLink>
            </div>
        )
    }
}

export default Paginacion
