export const throttle = (callback, time) => {
  let throttleCheck;
  return function () {
    if (!throttleCheck) {
      throttleCheck = setTimeout(() => {
        callback(...arguments);
        throttleCheck = false;
      }, time);
    }
  };
};
