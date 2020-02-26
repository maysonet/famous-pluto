import React from 'react';
import _ from 'lodash';
import {markdownify, Link, safePrefix, classNames, toUrl} from '../utils';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default class Banner extends React.Component {
    
    render() {
        return (
            <section id="banner">
                
                <div className="inner">
                    {/*<h2>{_.get(this.props, 'pageContext.frontmatter.banner.title')}</h2>
                    {{_.get(this.props, 'pageContext.frontmatter.banner.subtitle') && 
                        markdownify(_.get(this.props, 'pageContext.frontmatter.banner.subtitle'))
                    } */}
                    <img src="../../images/logo.png" alt="Madera Fina PR Logo" align="middle" height="120"></img>
                    
                    {_.get(this.props, 'pageContext.frontmatter.banner.actions') && 
                        <ul className="actions special">
                            {_.map(_.get(this.props, 'pageContext.frontmatter.banner.actions'), (action, action_idx) => (
                                <li key={action_idx}><Link to={(_.get(action, 'url').startsWith('#') ? _.get(action, 'url') : safePrefix(_.get(action, 'url')))} className={classNames('button', {'primary': _.get(action, 'is_primary')}, {'scrolly': _.get(action, 'is_scrolly')})}>{_.get(action, 'label')}</Link></li>
                            ))}
                        </ul>
                    }
                
                </div>
                <div>
    <Formik
      initialValues={{ email: '', fname: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        
        setTimeout(() => {
          addToMailchimp(values.email, {'FNAME': values.fname})
          
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          resetForm();
        }, 400);
        
      }}
    >
      
      {({ isSubmitting }) => (
        <Form>

          <div className="row gtr-uniform" style={{padding:40}}>
            <div className="col-12 col-12-xsmall">
              <Field type="text" name="fname" placeholder="Nombre"/>
            </div>
            <div className="col-12 col-12-xsmall">
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" />
            </div>
          </div>
          

            
          <button type="submit" disabled={isSubmitting}>
           Regístrate
           
          </button>
          <hr />
          <div className="inner">
          

                               
                               
            <p style={{"font-size": "12px"}}>Regístrate con <strong>Madera Fina PR</strong> para obtener su nuevo sencillo <strong>El Mareíto</strong> de su álbum <strong>La Esfera</strong>.</p>
                               
                               
                               
          </div>
        </Form>
      )}
    </Formik>
  </div>
                {_.get(this.props, 'pageContext.frontmatter.banner.bottom_link') && 
                    <Link to={(_.get(this.props, 'pageContext.frontmatter.banner.bottom_link.url').startsWith('#') ? _.get(this.props, 'pageContext.frontmatter.banner.bottom_link.url') : safePrefix(toUrl(this.props.pageContext.pages, _.get(this.props, 'pageContext.frontmatter.banner.bottom_link.url'))))} className={classNames({'more': _.get(this.props, 'pageContext.frontmatter.banner.bottom_link.has_arrow')}, {'scrolly': _.get(this.props, 'pageContext.frontmatter.banner.bottom_link.is_scrolly')})}>{_.get(this.props, 'pageContext.frontmatter.banner.bottom_link.label')}</Link>
                }
            </section>
        );
    }
}
