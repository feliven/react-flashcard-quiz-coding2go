type Flashcard = { front: string; back: string; options: string[] };

const flashcards: Flashcard[] = [
  // Fruits
  { front: "Apple", back: "Manzana", options: ["Naranja", "Manzana", "Fresa", "Sandía"] },
  { front: "Banana", back: "Plátano", options: ["Uva", "Pera", "Plátano", "Limón"] },
  { front: "Orange", back: "Naranja", options: ["Naranja", "Melocotón", "Piña", "Manzana"] },
  { front: "Strawberry", back: "Fresa", options: ["Cereza", "Fresa", "Mango", "Sandía"] },
  { front: "Watermelon", back: "Sandía", options: ["Melón", "Fresa", "Sandía", "Uva"] },
  { front: "Grape", back: "Uva", options: ["Ciruela", "Pera", "Limón", "Uva"] },

  // Animals
  { front: "Dog", back: "Perro", options: ["Gato", "Perro", "Caballo", "Conejo"] },
  { front: "Cat", back: "Gato", options: ["Gato", "Pájaro", "Ratón", "Perro"] },
  { front: "Horse", back: "Caballo", options: ["Vaca", "Cerdo", "Oveja", "Caballo"] },
  { front: "Bird", back: "Pájaro", options: ["Pez", "Pájaro", "Tortuga", "Gato"] },
  { front: "Fish", back: "Pez", options: ["Pez", "Serpiente", "Rana", "Pájaro"] },
  { front: "Rabbit", back: "Conejo", options: ["Ratón", "Conejo", "Zorro", "Lobo"] },

  // Colors
  { front: "Red", back: "Rojo", options: ["Azul", "Verde", "Rojo", "Amarillo"] },
  { front: "Blue", back: "Azul", options: ["Azul", "Morado", "Negro", "Blanco"] },
  { front: "Green", back: "Verde", options: ["Rosa", "Verde", "Gris", "Marrón"] },
  { front: "Yellow", back: "Amarillo", options: ["Naranja", "Rojo", "Amarillo", "Verde"] },
  { front: "Black", back: "Negro", options: ["Blanco", "Negro", "Gris", "Azul"] },
  { front: "White", back: "Blanco", options: ["Blanco", "Negro", "Rosa", "Amarillo"] },

  // Family
  { front: "Mother", back: "Madre", options: ["Hermana", "Tía", "Madre", "Abuela"] },
  { front: "Father", back: "Padre", options: ["Padre", "Hermano", "Tío", "Abuelo"] },
  { front: "Brother", back: "Hermano", options: ["Primo", "Hermano", "Hijo", "Tío"] },
  { front: "Grandmother", back: "Abuela", options: ["Abuela", "Madre", "Tía", "Prima"] },

  // Food & drink
  { front: "Bread", back: "Pan", options: ["Queso", "Arroz", "Pan", "Carne"] },
  { front: "Water", back: "Agua", options: ["Leche", "Agua", "Jugo", "Vino"] },
  { front: "Milk", back: "Leche", options: ["Leche", "Café", "Té", "Agua"] },
  { front: "Cheese", back: "Queso", options: ["Huevo", "Queso", "Mantequilla", "Pan"] },
  { front: "Rice", back: "Arroz", options: ["Frijoles", "Pasta", "Arroz", "Papa"] },

  // Household & everyday objects
  { front: "House", back: "Casa", options: ["Casa", "Calle", "Ciudad", "Escuela"] },
  { front: "Table", back: "Mesa", options: ["Silla", "Cama", "Mesa", "Puerta"] },
  { front: "Chair", back: "Silla", options: ["Mesa", "Silla", "Ventana", "Cama"] },
  { front: "Book", back: "Libro", options: ["Lápiz", "Libro", "Papel", "Cuaderno"] },
  { front: "Door", back: "Puerta", options: ["Ventana", "Pared", "Puerta", "Techo"] },

  // Greetings & basics
  { front: "Hello", back: "Hola", options: ["Adiós", "Hola", "Gracias", "Por favor"] },
  { front: "Thank you", back: "Gracias", options: ["Gracias", "De nada", "Perdón", "Hola"] },
  {
    front: "Please",
    back: "Por favor",
    options: ["Lo siento", "Por favor", "Buenas noches", "Hasta luego"],
  },
  { front: "Goodbye", back: "Adiós", options: ["Adiós", "Hola", "Bienvenido", "Gracias"] },
  { front: "Yes", back: "Sí", options: ["No", "Tal vez", "Sí", "Nunca"] },
];

export default flashcards;
