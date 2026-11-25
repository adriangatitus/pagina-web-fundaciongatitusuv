// Datos reemplazables por una API en el futuro. Por ahora, se usan datos estáticos
// para simular la información de los gatos disponibles para adopción.
export const CATS = [
  { id: 3, name: "Hyacinth", age: "6 meses", sex: "Hembra", photo: "img/gatitos/Hyacinth.jpg" },
  { id: 4, name: "Anthony", age: "6 meses", sex: "Macho", photo: "img/gatitos/Anthony.jpg" },
  { id: 5, name: "Simon", age: "6 meses", sex: "Macho", photo: "img/gatitos/Simon.jpg" },
  { id: 6, name: "Sophie", age: "6 meses", sex: "Hembra", photo: "img/gatitos/Sophie.jpg" },
  { id: 7, name: "Eloise", age: "6 meses", sex: "Hembra", photo: "img/gatitos/Eloise.jpg" },
  { id: 8, name: "Colin", age: "6 meses", sex: "Macho", photo: "img/gatitos/Colin.jpg" },
];

export const INFO_CATS = [
  {
    id: "hyacinth",
    name: "Hyacinth",
    age: "6 meses",
    photo: "img/gatitos/Hyacinth.jpg",
    status: "negViral",
    traits: {
      temperament: 2,
      affection: 4,
      energy: 5,
      physicalContact: 3,
      sociability: 4,
    },
  },
  {
    id: "anthony",
    name: "Anthony",
    age: "6 meses",
    photo: "img/gatitos/Anthony.jpg",
    status: "negViral",
    traits: {
      temperament: 2,
      affection: 3,
      energy: 5,
      physicalContact: 2,
      sociability: 3,
    },
  },
  {
    id: "simon",
    name: "Simon",
    age: "6 meses",
    photo: "img/gatitos/Simon.jpg",
    status: "negViral",
    traits: {
      temperament: 0,
      affection: 5,
      energy: 5,
      physicalContact: 5,
      sociability: 5,
    },
  },
  {
    id: "sophie",
    name: "Sophie",
    age: "6 meses",
    photo: "img/gatitos/Sophie.jpg",
    status: "negViral",
    traits: {
      temperament: 1,
      affection: 4,
      energy: 4,
      physicalContact: 4,
      sociability: 4,
    },
  },
  {
    id: "colin",
    name: "Colin",
    age: "6 meses",
    photo: "img/gatitos/Colin.jpg",
    status: "posLeucemia",
    traits: {
      temperament: 1,
      affection: 5,
      energy: 5,
      physicalContact: 5,
      sociability: 5,
    },
  },
];
