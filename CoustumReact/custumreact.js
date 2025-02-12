function customRender(reactElement, container) {
    // Create a DOM element based on the reactElement type
    const domElement = document.createElement(reactElement.type);

    // Set innerHTML if children are provided
    if (reactElement.children) {
        domElement.innerHTML = reactElement.children;
    }

    // Set attributes from props, if they exist
    if (reactElement.props) {
        if (reactElement.props.href) {
            domElement.setAttribute('href', reactElement.props.href);
        }
        if (reactElement.props.target) {
            domElement.setAttribute('target', reactElement.props.target);
        }
    }

    // Append the created element to the provided container
    container.appendChild(domElement);
}

// Define the React-like element
const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank', // Fixed typo from "targent" to "target"
    },
    children: 'Click Me to visit Google' // Fixed typo in text
};

// Get the main container
const mainContainer = document.querySelector('#root');

// Call the customRender function
customRender(reactElement, mainContainer);
