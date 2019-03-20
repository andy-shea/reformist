import React, {Component} from 'react';
import ReformContext from './ReformContext';

function findForm(el) {
  while (el && el.matches && !el.matches('form')) el = el.parentNode;
  return el && el.matches ? el : null;
}

function defineInitialState(fieldNames) {
  return fieldNames.reduce((map, fieldName) => {
    map[fieldName] = '';
    return map;
  }, {});
}

function getInitialState(props) {
  const {initialState} = props;
  // if array is passed then provide empty defaults for given field names
  if (Array.isArray(initialState)) return defineInitialState(initialState);
  return {...(typeof initialState === 'function' ? initialState(props) : initialState)};
}

function getValue(target) {
  const type = target.type.toLowerCase();
  const value = target.value;
  return type === 'checkbox' ? target.checked && value : value;
}

function defaultResetValues(initialState) {
  return initialState;
}

class Reform extends Component {
  state = {
    errors: {},
    isSubmitting: false,
    values: getInitialState(this.props)
  };

  constructor(props) {
    super(props);
    this.updateValues = this.updateValues.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.setErrors = this.setErrors.bind(this);
    this.setSubmitting = this.setSubmitting.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  updateValues(values) {
    this.setState({values});
  }

  updateValue(name, value) {
    this.setState(({values}) => ({values: {...values, [name]: value}}));
  }

  setErrors(errors) {
    this.setState({errors, isSubmitting: false});
  }

  setSubmitting(isSubmitting) {
    this.setState(({errors}) => ({errors: isSubmitting ? {} : errors, isSubmitting}));
  }

  resetForm() {
    const initialState = getInitialState(this.props);
    const resetValues = this.props.resetValues || defaultResetValues;
    this.setState({
      errors: {},
      isSubmitting: false,
      values: resetValues(initialState)
    });
  }

  onSubmit(event) {
    event.preventDefault();
    const {isSubmitting, values} = this.state;
    this.setSubmitting(true);
    const {submitForm, ...props} = this.props;
    submitForm(
      {
        isSubmitting,
        values,
        setErrors: this.setErrors,
        setSubmitting: this.setSubmitting,
        resetForm: this.resetForm,
        ...props
      },
      findForm(event.target)
    );
  }

  onChange({target}) {
    const {name} = target;
    this.updateValue(name, getValue(target));
  }

  render() {
    const {children, ...otherProps} = this.props;
    const {errors, isSubmitting, values} = this.state;
    const context = {
      errors,
      isSubmitting,
      values,
      updateValues: this.updateValues,
      updateValue: this.updateValue,
      setErrors: this.setErrors,
      setSubmitting: this.setSubmitting,
      resetForm: this.resetForm,
      onSubmit: this.onSubmit,
      onChange: this.onChange,
      ...otherProps
    };

    return (
      <ReformContext.Provider value={context}>
        {typeof children === 'function' ? children(context) : children}
      </ReformContext.Provider>
    );
  }
}

export default Reform;
