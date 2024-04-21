import React from 'react'
import {Link} from 'react-router-dom'

const Welcome = () => {

    const content = (
        <section>
            <h1>Welcome!</h1>
            <p><Link to='/dash/notes'>View techNotes</Link></p>
            <p><Link to='/dash/users'>View User Setting</Link></p>

        </section>
    )
  return content
}

export default Welcome