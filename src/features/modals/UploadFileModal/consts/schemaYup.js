import { mixed, object } from "yup";

export const schemaYup = object({
  audioFile: mixed()
    .nullable()
    .optional()
    .test(
      "file-not-null",
      "Please select a file",
      (value) => value !== null && value !== undefined
    )
    .test(
      "file-exists",
      "Please select a file.",
      (value) => !value || value instanceof File
    )
    .test(
      "file-type",
      "Only audio files are allowed",
      (value) =>
        !value ||
        (value instanceof File &&
          ["audio/mpeg", "audio/wav", "audio/ogg"].includes(value.type))
    )
    .test(
      "file-size",
      "File size must be less than 10MB.",
      (value) =>
        !value || (value instanceof File && value.size <= 10 * 1024 * 1024)
    ),
});
