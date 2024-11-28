import convert from 'convert'
const handleSubmit = async ({ e, amount_to_convert, unit_convert_from, unit_convert_to }: SubmitHandlerProps) => {
  e.preventDefault();
  //console.log('Got the submit...');

  // Check if the values exist before parsing
  if (amount_to_convert.current?.value && unit_convert_from.current?.value && unit_convert_to.current?.value) {
    try {
      const verified_amount_to_convert: number = parseInt(amount_to_convert?.current?.value) // Use current.value directly
      const verified_unit_convert_from = String(unit_convert_from?.current?.value)
      const verified_unit_convert_to = String(unit_convert_to?.current?.value)
      //console.log("Converting...")
      //@ts-ignore
      const convertedValue = convert(verified_amount_to_convert, verified_unit_convert_from).to(verified_unit_convert_to)
      const conversionObject: ConversionObject = {
        convertedResult: `${convertedValue}${verified_unit_convert_to}`,
        original: `${verified_amount_to_convert}${verified_unit_convert_from}`
      }
      console.log('Response from backend:');
      console.log(conversionObject)
      return conversionObject;
    } catch (error) {
      console.error('Error during conversion operation:', error);
    }
  } else {
    console.error('Error with given data: one or more values are missing.');
  }
};

export default handleSubmit;

