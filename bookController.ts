import { Request, response, Response } from "express";
import bookModel from "./model/bookModel";

const postBook = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { author, title, category, summary, views } = req.body;
    const isbn1 = Math.floor(Math.random() * 10000);
    const isbn2 = Math.floor(Math.random() * 10000);
    const isbn3 = Math.floor(Math.random() * 10000);
    const isbn4 = Math.floor(Math.random() * 10000);
    const newBook = await bookModel.create({
      author,
      title,
      category,
      summary,
      views,
      ISBN: `${isbn1}-${isbn2}-${isbn3}-${isbn4}`,
      authorImage: author.charAt(0).toUpperCase(),
    });

    return res.status(201).json({
      message: "Data Uploaded Successfully",
      data: newBook,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An Error Occured",
      data: error,
    });
  }
};

export { postBook };
