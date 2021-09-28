export default function removeNull(array) {
  const removedNullArray = array.filter((x) => x !== null);
  return removedNullArray.map((value) => ({ ["id"]: value }));
}
