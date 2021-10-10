import console from "console";
import csvReader from "csvtojson";
import { createReadStream, createWriteStream } from "fs";

import BookDataConverter from "./BookDataConverter";
import { BookInputDTO, BookOutputDTO } from "../shared/model";

const INPUT_CSV_FILE_PATH = "./csv/bookData.csv";
const OUTPUT_TXT_FILE_PATH = "./csv/task3bookOutput.txt";

const readStream = createReadStream(INPUT_CSV_FILE_PATH);
const writeStream = createWriteStream(OUTPUT_TXT_FILE_PATH);
const bookDataConverter = new BookDataConverter();

readStream
  .pipe(csvReader())
  .pipe(writeStream)
  .on(`error`, (error: any) => {
    console.error(error);
  });
