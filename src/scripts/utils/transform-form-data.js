export default function transformFormData (event) {
  const sendingData = {};
  const inputs = event.currentTarget.querySelectorAll('input');

  Array.from(inputs).forEach((input) => sendingData[input.name] = input.value, {});

  return sendingData;
}
