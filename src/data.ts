type Flashcard = { front: string; back: string; options: string[] };

const flashcards: Flashcard[] = [
  { front: "House", back: "Casa", options: ["Casa", "Calle", "Ciudad", "Escuela"] },
  { front: "Table", back: "Mesa", options: ["Silla", "Cama", "Mesa", "Puerta"] },
  { front: "Chair", back: "Silla", options: ["Mesa", "Silla", "Ventana", "Cama"] },
  { front: "Book", back: "Libro", options: ["Lápiz", "Libro", "Papel", "Cuaderno"] },
  { front: "Door", back: "Puerta", options: ["Ventana", "Pared", "Puerta", "Techo"] },
];

export default flashcards;
