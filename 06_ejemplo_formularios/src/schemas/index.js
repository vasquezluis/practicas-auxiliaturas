import * as yup from "yup";

// min 5 caracteres, 1 letra mayus 1 letra minus, 1 numero
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("Introduce tu email")
    .required("El email es requerido"),
  age: yup
    .number()
    .typeError("La edad debe ser numerica")
    .min(1, "introduce al menos un numero")
    // .max(2, "El maximo es 2 numeros")
    .required("La edad es requerida"),
  password: yup
    .string()
    .matches(passwordRules, { message: "Crea una contraseña fuerte" })
    .required("La contraseña es requerida"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "La contraseña debe coincidir")
    .required("La confirmacion es requerida"),
});
