document.getElementById('loadButton').addEventListener('click', function() {
    
    const loadingIndicator = document.getElementById('loading');
    
    const contentDisplay = document.getElementById('contentDisplay');
    
    // To clear previous content
    contentDisplay.innerHTML = ''; 
    
     // Show loading state before display was none
    loadingIndicator.style.display = 'block';


    // XMLHttpRequest method
    
    // const xhr = new XMLHttpRequest();

    // xhr.open('GET', 'data.txt', true);

    // xhr.onload = function() {
        
    //     // Delay before hiding loading indicator for 2000ms or 2 Seconds
    //     setTimeout(() => {
    //         if (xhr.status === 200) 
    //         {
    //             // Passed and Displaying
    //             contentDisplay.innerHTML = xhr.responseText; 
    //         } else 
    //         {
    //             contentDisplay.innerHTML = 'Error loading content.';
    //         }

    //         // Hide loading state from block to none
    //         loadingIndicator.style.display = 'none'; 
    //     }, 2000); 

    // };

    // xhr.onerror = function() {

    //     // Delay before hiding loading indicator for 2seconds
    //     setTimeout(() => {
    //         contentDisplay.innerHTML = 'Error loading content.';
    //         loadingIndicator.style.display = 'none'; 
    //     }, 2000); 

    // };

    // xhr.send();


    // jQuery $.load() method (make sure to include jQuery in your project)
    
    $('#loadButton').click(function() {
        $('#contentDisplay').load('daa.txt', function(response, status, xhr) {
            if (status === "error") {
                $('#contentDisplay').html('Error loading content: ' + xhr.status + ' ' + xhr.statusText);
            }
             // Hiding loading text
            $('#loading').hide();
        });
    });
    
});
