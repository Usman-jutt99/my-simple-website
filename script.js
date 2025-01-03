// Array to store the links of added videos
const videoLinks = [];

// Function to embed the video and save the link
function embedVideo() {
    // Get the Google Drive link from the input field
    const link = document.getElementById('videoLink').value.trim();

    if (link === '') {
        alert('Please enter a Google Drive video link.');
        return;
    }

    // Extract the file ID from the Google Drive link using a regular expression
    const regex = /https:\/\/drive.google.com\/file\/d\/([^\/]+)\/preview/;
    const match = link.match(regex);

    if (match && match[1]) {
        // Construct the iframe embed link with the file ID
        const fileId = match[1];
        const iframe = document.createElement('iframe');
        iframe.src = `https://drive.google.com/file/d/${fileId}/preview`;
        iframe.width = "640";
        iframe.height = "480";
        iframe.frameborder = "0";
        iframe.allowfullscreen = true;

        // Add the video link to the array
        videoLinks.push(link);

        // Get the container to append the new iframe
        const videoContainer = document.getElementById('videoContainer');

        // Create a new div to hold the iframe and the link text
        const videoDiv = document.createElement('div');
        const videoText = document.createElement('p');
        videoText.textContent = link; // Display the link text

        // Append the iframe and the link text to the video div
        videoDiv.appendChild(iframe);
        videoDiv.appendChild(videoText);

        // Append the new div to the video container
        videoContainer.appendChild(videoDiv);

        // Clear the input field after the video is added
        document.getElementById('videoLink').value = '';
    } else {
        alert('Please enter a valid Google Drive video link.');
    }
}
