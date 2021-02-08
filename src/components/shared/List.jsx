import React from 'react'
import PropTypes from 'prop-types'

const List = ({ data }) => {
    return (
        <div className='claselista'>
            <ul>
                {
                    !data ? ('no hay información')
                        : (
                            data.map(e=>(<li className='borderx2'>
                            {e}
                        </li>))
                        )
                }

            </ul>



        </div>
    )
}

List.propTypes = {

}

export default List
