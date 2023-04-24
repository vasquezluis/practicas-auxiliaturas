// modulo para el control de formularios
import { useFormik } from "formik";
// react-toastify para popups de informacion
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// schema para el control de los datos del formulario
import { schema } from "../schemas/index";

function Form() {
  // informacion y configuracion del popup de informacion
  const notify = () => {
    toast("🦄 Formulario enviado!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  // funcion para cuando los datos esten validados
  // podemos enviar los datos al backend con axios y otros componentes de react
  const onSubmit = async (values, actions) => {
    // en este ejemplo solo se simula la conexion con el backend
    await new Promise((resolve) => setTimeout(resolve, 1000)); // <- espera 1 segundo

    // imprime por consola los valores del formulario
    console.log(values);

    // muestra la notificacion y se resetean los valores del formulario
    notify();
    actions.resetForm();
  };

  // creamos varias constantes con los valores que devuelve el hook useFormik
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    // se inicializan los valores del formulario
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    // declaramos el esquema de validacion de datos
    validationSchema: schema,
    onSubmit,
  });

  return (
    // formulario sin estilos tailwind
    <div>
      {/* se declara la accion del formulario al presionar el boton de enviar */}
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="pr-2" htmlFor="email">
            Correo
          </label>
          <input
            // la clase evalua si hay errores, si los hay pinta el borde de rojo
            className={`border ${
              errors.email && touched.email ? "border-red-500" : ""
            }`}
            // se envian los demas parametros a la etiqueta
            type="text"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            name="email"
            id="email"
            placeholder="Introduce tu email"
          />
          {/* podemos mostrar los errores en el formulario con el siguiente codigo */}
          {errors.email && touched.email && (
            <p className="text-red-500">{errors.email}</p>
          )}
        </div>

        <div className="mb-2">
          <label className="pr-2" htmlFor="age">
            Edad
          </label>
          <input
            className={`border ${
              errors.age && touched.age ? "border-red-500" : ""
            }`}
            type="text"
            value={values.age}
            onChange={handleChange}
            onBlur={handleBlur}
            name="age"
            id="age"
            placeholder="Introduce tu edad"
          />
          {errors.age && touched.age && (
            <p className="text-red-500">{errors.age}</p>
          )}
        </div>

        <div className="mb-2">
          <label className="pr-2" htmlFor="password">
            Contraseña
          </label>
          <input
            className={`border ${
              errors.password && touched.password ? "border-red-500" : ""
            }`}
            type="text"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            name="password"
            id="password"
            placeholder="Introduce tu contraseña"
          />
          {errors.password && touched.password && (
            <p className="text-red-500">{errors.password}</p>
          )}
        </div>

        <div className="mb-2">
          <label className="pr-2" htmlFor="confirmPassword">
            Confirma tu contraseña
          </label>
          <input
            className={`border ${
              errors.confirmPassword && touched.confirmPassword
                ? "border-red-500"
                : ""
            }`}
            type="text"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirma tu contraseña"
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword}</p>
          )}
        </div>

        <dir>
          {/* se crea el boton para subir el formulario */}
          <button
            type="submit"
            className="rounded font-bold cursor-pointer px-2 py-1 bg-green-400"
            // se usa el parametro disable para hacer una accion cuando el formulario se este subiendo
            // isSubmitting desactiva temporalmente el boton mientras los datos se esten subiendo
            disabled={isSubmitting}
          >
            Enviar
          </button>

          {/* se ejecuta el componente de notificacion */}
          {/* en la pagina de react-toastify se pueden crear otro tipo de notificacion, como la de error */}
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          {/* Same as */}
          <ToastContainer />
        </dir>
      </form>
    </div>

    // formulario con estilos tailwind
    // <div className="max-w-md mx-auto">
    //   <form
    //     onSubmit={handleSubmit}
    //     className="bg-slate-900 shadow-md rounded px-8 pt-6 pb-8 mb-4"
    //   >
    //     <div className="mb-4">
    //       <label className="block text-slate-300 font-bold mb-2" htmlFor="email">
    //         Correo
    //       </label>
    //       <input
    //         className={`shadow appearance-none border ${
    //           errors.email && touched.email
    //             ? "border-red-500"
    //             : "border-gray-400"
    //         } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
    //         type="text"
    //         value={values.email}
    //         onChange={handleChange}
    //         onBlur={handleBlur}
    //         name="email"
    //         id="email"
    //         placeholder="Introduce tu email"
    //       />
    //       {errors.email && touched.email && (
    //         <p className="text-red-500 text-xs italic">{errors.email}</p>
    //       )}
    //     </div>

    //     <div className="mb-4">
    //       <label className="block text-slate-300 font-bold mb-2" htmlFor="age">
    //         Edad
    //       </label>
    //       <input
    //         className={`shadow appearance-none border ${
    //           errors.age && touched.age ? "border-red-500" : "border-gray-400"
    //         } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
    //         type="text"
    //         value={values.age}
    //         onChange={handleChange}
    //         onBlur={handleBlur}
    //         name="age"
    //         id="age"
    //         placeholder="Introduce tu edad"
    //       />
    //       {errors.age && touched.age && (
    //         <p className="text-red-500 text-xs italic">{errors.age}</p>
    //       )}
    //     </div>

    //     <div className="mb-4">
    //       <label
    //         className="block text-slate-300 font-bold mb-2"
    //         htmlFor="password"
    //       >
    //         Contraseña
    //       </label>
    //       <input
    //         className={`shadow appearance-none border ${
    //           errors.password && touched.password
    //             ? "border-red-500"
    //             : "border-gray-400"
    //         } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
    //         type="password"
    //         value={values.password}
    //         onChange={handleChange}
    //         onBlur={handleBlur}
    //         name="password"
    //         id="password"
    //         placeholder="Introduce tu contraseña"
    //       />
    //       {errors.password && touched.password && (
    //         <p className="text-red-500 text-xs italic">{errors.password}</p>
    //       )}
    //     </div>

    //     <div className="mb-4">
    //       <label
    //         className="block text-slate-300 font-bold mb-2"
    //         htmlFor="confirmPassword"
    //       >
    //         Confirma tu contraseña
    //       </label>
    //       <input
    //         className={`shadow appearance-none border ${
    //           errors.confirmPassword && touched.confirmPassword
    //             ? "border-red-500"
    //             : "border-gray-400"
    //         } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
    //         type="password"
    //         value={values.confirmPassword}
    //         onChange={handleChange}
    //         onBlur={handleBlur}
    //         name="confirmPassword"
    //         id="confirmPassword"
    //         placeholder="Confirma tu contraseña"
    //       />
    //       {errors.confirmPassword && touched.confirmPassword && (
    //         <p className="text-red-500 text-xs italic">
    //           {errors.confirmPassword}
    //         </p>
    //       )}
    //     </div>

    //     <div className="flex items-center justify-center">
    //       <button
    //         type="submit"
    //         className="rounded font-bold cursor-pointer px-2 py-1 bg-slate-400"
    //         disabled={isSubmitting}
    //       >
    //         Submit
    //       </button>
    //     </div>
    //   </form>
    // </div>
  );
}

export default Form;
