document.getElementById('uploadButton').addEventListener('click', function() {
    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];
    if (file) {
        var formData = new FormData();
        formData.append('file', file);

        // Include access token in the request header
        var accessToken = '0.ARwAw2-U4FdM706UscGv35A33ZE2GskAyO1KnoUaLIljJ97OAKE.AgABBAIAAADnfolhJpSnRYB1SVj-Hgd8AgDs_wUA9P-hUr5BU4lmnr4DEs3ouZjfl75d0wqoBoJGS_R9hgiFpCdVlC4HawyM5-B0iFUcA-z-QU8vxUK4aU8m-0zBm6UEZpWjZViQqJUoUQX0IC1DASg0P7w8_t9N77tcvm-8edmYqDchaRM3DFZsDCukNneKZuvRQEPDItZLguMG9U0T2YEG5tGRzjRnWla67XcbO7XxgkBh-mK4BpxNzNczNF54SShx8NAEz323Ye69oJb8S5bKmN2GSuBYgfgOUBzAzOwiVmE4KwZKIDxVObzC2ynX84Oiv32u4xKAtQYKoPykJCDoTdl7RRuyYOcq-dTq9nTHXzU8GuV0RFhYkqwP6q5bhCeCRCxQdnpei4KR-c8MesEC6Fl37tDwGgrf_ZWk8ldOrD8ld7NnjKa6V_LX8mDSCRB_yOdtLBOrKLDcSik4CCQxLPzDX0BrWc-MGF9Z4YjJSWNR6rPeF3wpEGI5vCFa7TPwojJsAG-Y5aE3qXbSkOe_Y-Z5iqJapnUWA7iIfLRROg97Fam4HUFKMLaA1lKmAbsDJi9Bbo7mvW1If2frASNiQ5gtJ5_UHojgiQS1Uj0KqPzkT3giqlHaIP96qXfWpteQdnhgM1kKpIqlbbETtvCDxzTEqIGwrhXZM3t80lp9w0v3eRtr3YeF4exwj0eSWz8LqOxitbsCzjOfbItOIOdQm407-udFqf0aiWRntkuEeWlhlfhWIR_2KGivnuSCiJdayM8ENsDI8MZDNU8NrPiuFOCu01NKyNzTOyIKu6Zbj6WTohVi2aYUL7oWy0G4zOCAQvOgsj9icEbolFttUL-_Ac5ISskzFbHXJnWrljK3FVjhDgCjWcMJOYJIUYaJxO6pPcyJHR_Q2vMXRWEkFuyyLARzP0ZBjevOKzS4YCN7HJLx6_c4W6CygOO3vNoYIJDt5iWCOHt__aD-XmgLbvgLDIczVFLWGPDd7Ddtql_GdvSPTONs8sO_5NAzwQNHwH2_odiz'; // Replace with your actual access token
        fetch('https://graph.microsoft.com/v1.0/me/drive/root:/Photos/' + file.name + ':/content', {
            method: 'PUT',
            body: formData,
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        })
        .then(response => {
            if (response.ok) {
                alert('File uploaded successfully!');
            } else {
                alert('Error uploading file!');
            }
        })
        .catch(error => console.error('Error:', error));
    } else {
        alert('Please select a file to upload.');
    }
});
