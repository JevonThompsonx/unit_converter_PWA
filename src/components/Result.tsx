import { Context } from "../pages/Home";
import { useContext } from "react";
import ResetButton from "./ResetButton";
export default function Result() {
  const { conversionAmount }: { conversionAmount: ConversionObject } = useContext(Context)
  return (<>
    <main className="flex flex-col justify-evenly items-center border border-black border-2 p-6 space-y-6">
      <h3>From: {conversionAmount?.original}</h3>
      <h3>To: {conversionAmount?.convertedResult}</h3>
      <ResetButton />
    </main>
  </>)
}   
