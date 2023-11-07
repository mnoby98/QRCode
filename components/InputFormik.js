import { Form, Formik } from "formik";

function InputFormik(props) {
  const { initialProps, validationProps, onSubmitProps, qRCode } = props;
  const initialValues = initialProps;
  const validationSchema = validationProps;
  const onSubmit = onSubmitProps;
  return (
    <div className=" h-full py-2 ">
      <div className=" pt-8">
        <Formik
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          initialValues={initialValues}
        >
          <Form className="    border-gray-300 bg-white">
            <div className=" px-8 pb-8">{props.children}</div>
            <button
              type="submit"
              className="ml-8 text-3xl mt-7 bg-black rounded-lg px-7 py-2 text-white"
            >
              {qRCode !== "" ? "Regenerate" : "Generate"}
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default InputFormik;
