// Load the API and make an API call. Display the results on the screen.
function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/drive.file"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
}
function loadClient() {
    gapi.client.setApiKey("YOUR_API_KEY");
    return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/drive/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
}
// Make sure the client is loaded and sign-in is complete before calling this method.
function execute(file) {
    return gapi.client.drive.files.create({
      resource: {
        name: file.name,
        mimeType: file.type
      },
      media: {
        mimeType: file.type,
        body: file
      }
    }).then(function(response) {
            console.log("Response", response);
            alert('File uploaded successfully!');
          },
          function(err) { console.error("Execute error", err); });
}

gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: "YOUR_CLIENT_ID"});
});

document.getElementById('fileInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const fileNameDisplay = document.getElementById('fileNameDisplay');
        const filePreview = document.getElementById('filePreview');

        fileNameDisplay.textContent = `File Name: ${file.name}`;

        const reader = new FileReader();
        reader.onload = function(e) {
            filePreview.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('uploadForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const file = document.getElementById('fileInput').files[0];
    if (file) {
        authenticate().then(loadClient).then(() => execute(file));
    } else {
        alert('Please select a file to upload.');
    }
});
