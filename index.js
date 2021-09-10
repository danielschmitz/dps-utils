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
