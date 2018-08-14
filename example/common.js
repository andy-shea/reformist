export function initialState() {
  return {
    text: 'Foo',
    radio: 'radio2',
    checkbox: false,
    textarea: '',
    select: 'select2',
    shouldError: false
  };
}

export function submitForm({values, setErrors, setSubmitting}) {
  setTimeout(() => {
    console.log(values);
    if (values.shouldError) setErrors({text: 'Some validation error'});
    else setSubmitting(false);
  }, 2000);
}
