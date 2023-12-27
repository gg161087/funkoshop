import { check, validationResult } from 'express-validator';

export const validatorCreateUser = [
  check("name")
    .exists() // Que exista el campo
    .withMessage("Name is required") // Personalisamos el error
    .trim() // Quitar espacios en blanco
    .isAlpha("es-ES", { ignore: " " }) // Que sean solo letras y admite caracteres especiales
    .withMessage("Only letters")
    .notEmpty() // Que no este vacio
    .withMessage("Name must not be empty")
    .isLength({ min: 2, max: 90 }) // Que tenga una longitud
    .withMessage("Character count: min 2; max 90"),
  check("email")
    .exists()
    .withMessage("Email is required")
    .isEmail() // Que sea de tipo email
    .withMessage("Must be a valid email address")
    .normalizeEmail(), // Que este todo en minuscula
  check("password")
    .exists()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long")
    .trim(),

  (req, res, next) => {
    //averiguamos si hay errores de validación en la request y los envolvemos en un objeto que tiene varias funciones útiles
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Si no esta vacio
      return res.status(400).json({ errores: errors.array() });
    } else {
      next();
    }
  },
];