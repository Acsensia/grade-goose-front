function _capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1)
}

export const capitalizeFirstLetter = _capitalizeFirstLetter
