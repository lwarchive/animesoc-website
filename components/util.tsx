import browserLocalstorage from "browser-localstorage-expire";

const localCache = browserLocalstorage();

/*
The MIT License (MIT)
Copyright (c) 2016 David Gomez-Urquiza
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/**
 * Converts a base64 data URI into a blob URI when fetching from cache
 * @param dataURI the data URI to convert
 * @returns a blob URI of the decoded data URI
 */
function dataURItoBlob(dataURI: string) {
  // convert base64 to raw binary data held in a string
  var byteString = atob(dataURI.split(",")[1]);

  // separate out the mime component
  var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

  // write the bytes of the string to an ArrayBuffer
  var arrayBuffer = new ArrayBuffer(byteString.length);
  var _ia = new Uint8Array(arrayBuffer);
  for (var i = 0; i < byteString.length; i++) {
    _ia[i] = byteString.charCodeAt(i);
  }

  var dataView = new DataView(arrayBuffer);
  var blob = new Blob([dataView], { type: mimeString });
  return blob;
}

/**
 * Attempts to fetch a cached version of the image from local storage
 * @param id the id of the image to fetch
 * @returns a data URI representation of the image or a blank string if cache miss occurs
 */
function fetchImageFromCache(id: string): string {
  const cachedImage = localCache.getItem(id) as string;
  return cachedImage ? URL.createObjectURL(dataURItoBlob(cachedImage)) : "";
}

/**
 * Creates a blob URI of the provided image URL, and caches it in local storage to reduce requests.
 * @param url the image to turn into a blob
 * @param id the id to store in localstorage
 * @param ttl how long until the cache of the image expires
 * @returns a blob URI pointing to the requested image
 */
function createBlobFromImage(
  url: string,
  id?: string,
  ttl?: number
): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    // Fetches our image
    fetch(url, {
      referrer: "", // no Referer header
      mode: "cors",
    })
      .then((response) => response.blob())
      .then((imageBlob) => {
        // Create a URI pointing to the blob
        const imageObjectURL = URL.createObjectURL(imageBlob);

        // Cache the image in local storage
        if (typeof id !== "undefined" && typeof ttl !== "undefined") {
          const reader = new FileReader();

          reader.onload = (event) => {
            localCache.setItem(id, event.target?.result, ttl);
          };

          reader.readAsDataURL(imageBlob);
        }
        resolve(imageObjectURL);
      });
  });
}

export { createBlobFromImage, dataURItoBlob, fetchImageFromCache };
