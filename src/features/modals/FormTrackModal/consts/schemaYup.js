import { object, string } from "yup";
import { genres } from "../../../../api/genres";

const isImageUrl = async (url) => {
  try {
    const response = await fetch(url, { method: "HEAD" });
    const contentType = response.headers.get("Content-Type");
    return contentType?.startsWith("image/");
  } catch (error) {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
    });
  }
};


export const schemaYup = object({
  title: string()
    .max(25, "Maximum number of characters 25")
    .required("Field is required"),
  artist: string()
    .max(25, "Maximum number of characters 25")
    .required("Field is required"),
  album: string()
    .max(25, "Maximum number of characters 25")
    .min(2, "Min value must have 2 symbol"),
  genre: string().oneOf(genres),
  coverImage: string()
    .url("This don't url")
    .test("is-image", "URL don't to img", async (value) => {
      if (!value) return true;
      return await isImageUrl(value);
    }),
});
