export default (setFieldValue, e) => {

  const {
    target: { name, value }
  } = e

  setFieldValue(name, value)
}
