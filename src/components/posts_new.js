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
          label="title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="tags"
          name="tags"
          component={this.renderField}
        />
      </form>
    );
  }
}

export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew);
