// Select all elements with the class '.switcher'
const switchers = document.querySelectorAll('.switcher');

// Convert the NodeList to an array using the spread operator for easier iteration
const switchersArray = [...switchers];

// Loop through each switcher element
switchersArray.forEach(switcher => {
    // Add a click event listener to each switcher element
    switcher.addEventListener('click', function() {
        // Remove the 'is-active' class from all parent elements
        switchersArray.forEach(item => item.parentElement.classList.remove('is-active'));
        // Add the 'is-active' class to the parent element of the clicked switcher
        this.parentElement.classList.add('is-active');
    });
});
