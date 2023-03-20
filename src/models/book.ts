export type BookType =
  {
    "etag": string
    "id": string,
    "volumeInfo"?: {
      "title": string
      "authors": [
        string
      ],
      "description": string
      "categories"?: [
        string
      ],
      "imageLinks": {
        "thumbnail": string
      },
    },

  }

export type  VolumeInfo = {
  "title"?: string
  "authors"?: [
    string
  ],
  "description"?: string
  "categories"?: [
    string
  ],
  "imageLinks"?: {
    "thumbnail": string
  },
}

