export default function sortProp(obj, order) {
  const objList = [];
  const specObjList = [];

  order.forEach((key) => specObjList.push({ key, value: obj[key] }));

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (!order.includes(key)) objList.push({ key, value: obj[key] });
    }
  }

  objList.sort((a, b) => (a.key < b.key && -1) || (a.key > b.key && 1) || 0);

  return [...specObjList, ...objList];
}
