export const loadInTruck = (e, items) => {
  items.push({
    label: e.dragData.label,
    nome: e.dragData.nome,
    idTruck: e.dragData.idTruck,
    weight: e.dragData.weight,
    id: e.dragData.id
  });

  return items;
};

export const changeTruck = dragData => {
  let item = {
    label: dragData.label,
    nome: dragData.nome,
    weight: dragData.weight,
    idTruck: dragData.idTruck,
    id: dragData.id
  };

  return item;
};

const TruckService = {
  loadInTruck,
  changeTruck
};

export default TruckService;
