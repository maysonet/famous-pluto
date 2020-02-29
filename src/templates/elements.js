import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {markdownify, Link} from '../utils';

/* eslint-disable */

export default class Elements extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
                
                <article id="main">
                    <header style={{"height":"40em"}}>
                        <i className="fa fa-check-circle" style={{"font-size":"75px", "padding-bottom": "40px"}}></i>
                        <h2>{_.get(this.props, 'pageContext.frontmatter.title')}</h2>
                        <hr></hr>
                        <Link to="/" className="button">Regresar</Link>
                    </header>
                    
                  </article>
            </Layout>
        );
    }
}
