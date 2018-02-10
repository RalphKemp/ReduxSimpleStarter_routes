import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
        className="form-control"
        type="text"
          {...field.input}
         />
      </div>
    );
  }


  render() {
    return (
      <form>
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
})(PostsNew);
