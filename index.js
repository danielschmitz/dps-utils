/**
 * Obtém um valor de um objeto
 * @param {*} obj Objeto em si
 * @param {*} key Caminho para a propriedade do objeto
 * @return O valor encontrado ou undefined se não existir
 */
exports.getValueFromObject = (obj, key) => {
  return key.split(".").reduce(function (o, x) {
    return typeof o === "undefined" || o === null ? o : o[x]
  }, obj)
}

/**
 * Verifica se o objeto possui a chave
 * @param {*} obj Objeto
 * @param {*} key Chave a ser verificada
 */
exports.hasKey = (obj, key) => {
  return key.split(".").every(function (x) {
    if (typeof obj !== "object" || obj === null || !(x in obj)) return false
    obj = obj[x]
    return true
  })
}

/**
 * Recebe uma data americana e retorna no formato BR
 * @param {String} date Uma data no formato YYYY-MM-DD
 * @returns {String} Uma data no formato DD/MM/YYYY
 */
exports.formatDateToBr = (date) => {
  if (!date) return null
  const [year, month, day] = date.split("-")
  return `${day}/${month}/${year}`
}

exports.formatDateToEn = (date) => {
  if (!date) return null
  const [day, month, year] = date.split("/")
  return `${year}-${month}-${day}`
}
