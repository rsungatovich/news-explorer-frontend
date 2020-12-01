export default class BaseComponent {

  constructor() {}

  setListeners = (param) => {
    if (Array.isArray(param)) return param.forEach((el) => el.element.addEventListener(el.event, el.handler));

    if (!param.element) return;

    Array.isArray(param.element)
      ? param.element.forEach((el) => el.addEventListener(param.event, param.handler))
      : param.element.addEventListener(param.event, param.handler)
  }
}
