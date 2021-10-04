import csvReader from "csvtojson";
import fs from "fs";

const INPUT_CSV_FILE_PATH = "./csv/bookData.csv";
const OUTPUT_TXT_FILE_PATH = "./csv/task2bookOutput.txt";

const writeCsvToTxt = async () => {
  let data: {}[] = [];

  try {
    data = await csvReader().fromFile(INPUT_CSV_FILE_PATH);
  } catch (error) {
    console.error(error);
  }

  try {
    fs.writeFileSync(OUTPUT_TXT_FILE_PATH, JSON.stringify(data));
    console.log(`successfully written to ${OUTPUT_TXT_FILE_PATH}`);
  } catch (error) {
    console.error(error);
  }
};

writeCsvToTxt();
