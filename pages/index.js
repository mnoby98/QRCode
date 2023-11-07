import InputField from "@/components/InputField";
import InputFormik from "@/components/InputFormik";
import * as Yup from "yup";
import { useQRCode } from "next-qrcode";
import { useState } from "react";
import Head from "next/head";
export default function Home() {
  const [qRCode, setQRcode] = useState("");
  const { Image } = useQRCode();

  const initialValues = {
    text: "",
  };
  const validationSchema = Yup.object({
    text: Yup.string()
      .min(1)
      .required("String must contain at least 1 character(s)"),
  });
  const onSubmit = (values) => {
    setQRcode(values.text);
  };

  return (
    <>
      <Head>
        <title>Generate | QRCode</title>
        <meta
          name="ketwords"
          content="ningas"
        />
      </Head>
      <div
        className={` px-10 grid   sm:h-[600px] md:h-[900px]  ${
          qRCode !== ""
            ? "grid-rows-2 sm:grid-cols-2 h-[700px]"
            : "grid-rows-1 sm:grid-cols-2 h-[550px]"
        }   mb-2 `}>
        <div>
          <div className=" py-[25%] ">
            <h1 className="px-8  text-3xl font-bold">Generate a QR Code</h1>
            <InputFormik
              qRCode
              initialProps={initialValues}
              onSubmitProps={onSubmit}
              validationProps={validationSchema}>
              <InputField
                name="text"
                label="Text"
                placeholder="Put Text/Url"
              />
            </InputFormik>
          </div>
        </div>
        {qRCode !== "" && (
          <div className="  mx-auto py-[25%] ">
            <Image
              text={`${qRCode}`}
              options={{
                type: "image/jpeg",
                quality: 0.3,
                errorCorrectionLevel: "M",
                margin: 3,
                scale: 4,
                width: 250,
                color: {
                  dark: "#fff",
                  light: "#000",
                },
              }}
            />
          </div>
        )}
      </div>
    </>
  );
}
