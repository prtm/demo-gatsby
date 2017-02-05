import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Trouble Shooting"},
            {"name": "keywords", "content": "OpenSource, Trouble Shooting, linux, python"},
          ]}
        />
        <h1>
          Hi people
        </h1>
        <p>Welcome</p>
        <h2>Cool blog for trouble shooting</h2>
        <h3>xvtri</h3>
        <ul>
          
          <li>
            <Link to={prefixLink('/blog/copyscript/')}>Clipboard data search using chrome using python</Link>
	  </li>
	  <li>
            <Link to={prefixLink('/blog/grubPassword/')}>Grub2 password protect</Link>
	  </li>
	  <li>
            <Link to={prefixLink('/awsConnect/')}>Connect to ubuntu desktop from linux and windows</Link>
          </li>
        </ul>
      </div>
    )
  }
}
