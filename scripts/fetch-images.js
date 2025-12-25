/**
 * Fetches and displays images from a given URL
 * @param {string} url - The URL to fetch images from
 * @returns {Promise<HTMLImageElement[]>} - A promise resolving to an array of image elements
 */
async function fetchAndDisplayImages(url) {
  try {
    // Fetch the document
    const response = await fetch(url);

    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the response text as a document
    const htmlText = await response.text();
    const parser = new DOMParser();
    const document = parser.parseFromString(htmlText, "text/html");

    // Find all anchor elements
    const linkElements = document.getElementsByTagName("a");

    // Filter and convert links to image elements
    const imageElements = Array.from(linkElements)
      .filter((link) => /\.(jpe?g|png|gif)$/i.test(link.href))
      .map((link) => {
        const img = document.createElement("img");
        img.src = link.href;
        return img;
      });

    return imageElements;
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
}

/*
// Example usage
async function displayImages() {
  try {
    const images = await fetchAndDisplayImages("/img");
    images.forEach((img) => document.body.appendChild(img));
  } catch (error) {
    console.error("Failed to display images:", error);
  }
}
*/
