import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { schema } from "../schemas/index";

function Form() {
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

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log(values);

    notify();
    actions.resetForm();
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: schema,
    onSubmit,
  });

  return (
    // formulario sin estilos tailwind
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="pr-2" htmlFor="email">
            Correo
          </label>
          <input
            className={`border ${
              errors.email && touched.email ? "border-red-500" : ""
            }`}
            type="text"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            name="email"
            id="email"
            placeholder="Introduce tu email"
          />
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
          <button
            type="submit"
            className="rounded font-bold cursor-pointer px-2 py-1 bg-green-400"
            disabled={isSubmitting}
          >
            Enviar
          </button>

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
