const filterTree = (data: any[], id: number) =>
  data.filter((o) => {
    if (o.child) o.child = filterTree(o.child, id);
    return o.id != id;
  });

export default filterTree;
