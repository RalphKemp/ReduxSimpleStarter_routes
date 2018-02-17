import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {

  renderField(field) {
    const { meta: { touched, error } } = field;
    // js destructuring
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
        className="form-control"
        type="text"
          {...field.input}
         />
      <div className="text-help">
        {touched ? error : ''}
      </div>
      {/*if user has touched the field input, then the error comes, if false then the empty string.*/}
      </div>
    );
  }

  onSubmit(values) {
    // this === component
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }


  render() {
    const { handleSubmit } = this.props;
    // this is a property that is being passed to the component on behalf of redux form

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
      {/*redux from is just responsible for handling the state and validation of our form*/}
      {/*so handle submit is from redux form and it says if everything with the form side like validation and state are ok, we */}
      {/*then go ahead and run the call back this.onsubmit*/}
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  // Validate the input from values
  if (!values.title) {
    errors.title = "enter a title!";
  }
  if (!values.categories) {
    errors.categories = "enter a category";
  }
  if (!values.content) {
    errors.content = "enter some content!";
  }

  // if errors is empty, the form is fine to submit
  // if errors has any properties redux form assumes form is invalid
  return errors;
}


export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null,{ createPost })(PostsNew)
);







