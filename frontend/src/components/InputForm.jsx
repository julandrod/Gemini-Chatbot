import { useField } from "formik";

/**
 * Component that render an input form to be use with a custom form, with the useField hook can validate some input values
 * @param {Object} props Props from Formik to control the input
 * @param {String} props.labelText Label text to show in the input form
 * @returns Custom input form
 */
// eslint-disable-next-line react/prop-types
const InputForm = ({ labelText, ...props }) => {
  // Hook from formik to use his properties
  const [field, meta] = useField(props);

  return (
    <div className="mb-4 p-4 rounded-lg border ">
      <label className="block mb-3">{labelText}</label>
      <input
        className={`form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ${
          meta.touched && meta.error ? "border-red-700 border-2" : ""
        }`}
        // properties onBlur, onChange, value
        {...field}
        // properties for the input, name, type, placeholder
        {...props}
      />
      {meta.touched && meta.error && (
        <div className="text-red-700">{meta.error}</div>
      )}
    </div>
  );
};

export default InputForm;
