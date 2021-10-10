import csvReader from "csvtojson";
import fs from "fs";

import { BookInputDTO, BookOutputDTO } from "./model";

const INPUT_CSV_FILE_PATH = "./csv/bookData.csv";
const OUTPUT_TXT_FILE_PATH = "./csv/task2bookOutput.txt";

const writeCsvToTxt = async () => {
  let data: BookInputDTO[] = [];
  let books: BookOutputDTO[] = [];

  try {
    data = await readDataFromCsv();
  } catch (error) {
    console.error(error);
  }

  books = convertBooksData(data);

  try {
    writeToTxt(books);
    console.log(`successfully written to ${OUTPUT_TXT_FILE_PATH}`);
  } catch (error) {
    console.error(error);
  }
};

const readDataFromCsv = () => {
  return csvReader().fromFile(INPUT_CSV_FILE_PATH);
};

const writeToTxt = (books: BookOutputDTO[]) => {
  fs.writeFileSync(OUTPUT_TXT_FILE_PATH, JSON.stringify(books));
};

const convertBooksData = (data: BookInputDTO[]): BookOutputDTO[] => {
  return data.map((bookInputDto: BookInputDTO) => ({
    book: bookInputDto.Book,
    author: bookInputDto.Author,
    price: bookInputDto.Price,
  }));
};

writeCsvToTxt();
