var recipes = {
  prop: "1",
  prop2: "2"
}
function updateObjectWithKeyAndValue(object, key, value) {
  recipes['butter', '1/2 stick']
  return recipes;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object;
}
function deleteFromOjectByKey(object, key) {
  var newObj = Object.assign({},object)
  delete newObj[key]
  return newObj
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
//var recipes = new Object();

//function updateObjectWithKeyAndValue(object, key, value){
//  return Object.assign({},object,{[key]: value})
//
//function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
// object[key] = value
//return object
//}

/*function deleteFromObjectByKey(object, key){
  var newObj =  Object.assign({},object)
  delete newObj[key]
  return newObj

}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
*/