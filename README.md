# Mora Portfolio Template

![Mora Portfolio Template](https://placekitten.com/800/400)

Mora is an advanced portfolio template built with [React](https://github.com/facebook/react) and [Tailwind CSS](https://tailwindcss.com/), designed to showcase your work in a beautiful and customizable manner. It supports GitHub Pages deployment, theming, multilingual capabilities, and is highly configurable through the `configs` folder.

## Features

- **React and Tailwind CSS**: Utilizes the power of React for dynamic UI components and Tailwind CSS for rapid styling.
- **GitHub Pages Compatible**: Easily deploy your portfolio to GitHub Pages for free hosting.
- **Theming Support**: Customize the look and feel of your portfolio with ease using theming capabilities.
- **Multilingual**: Reach a broader audience by supporting multiple languages in your portfolio.
- **Configuration Flexibility**: Every aspect of the template can be adjusted through the `configs` folder, ensuring easy customization.

## Getting Started

To get started with Mora, follow these steps:

1. **Clone the Repository**: Clone this repository to your local machine using

    ```bash
        git clone https://github.com/MohammadrezaAmani/MORA_PortfolioTemplate
    ```

2. **Install Dependencies**: Navigate to the cloned directory and install dependencies using

     ```bash
        npm install
     ```

3. **Configure**: Customize your portfolio by modifying files in the `configs` folder, including theme colors, content, and language settings.

4. **Run Locally**: Start the development server locally with `npm start` to see your changes in action.

5. **Deployment**: Once you're satisfied with your portfolio, deploy it to GitHub Pages or any other hosting platform of your choice. see [gh-pages](https://www.npmjs.com/package/gh-pages) for more information or read [./deploy.md](./deploy.md)

    ```bash
        npm run deploy && npm run deploy
    ```

## Customization

### Theming

Modify the theme colors and styles by editing the `theme.js` file in the `configs` folder. Tailwind CSS classes are used for styling, providing extensive customization options.

### Content

Update your portfolio content by editing the files in the `content` folder within the `configs` directory. You can add or remove sections, projects, and other content elements as needed.

### Multilingual Support

To add support for additional languages, create language-specific JSON files in the `i18n` directory within the `configs` folder. Update the language switcher component to reflect the available languages.

## Contributing

Contributions to Mora are welcome! If you have ideas for improvements, feature requests, or bug reports, please open an issue or submit a pull request. Make sure to follow the contribution guidelines outlined in the `CONTRIBUTING.md` file.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.

## Acknowledgments

- **React**: A special thanks to the React community for providing a powerful framework for building user interfaces.
- **Tailwind CSS**: Kudos to the Tailwind CSS team for creating an excellent utility-first CSS framework.
- **GitHub Pages**: Thanks to GitHub for offering free hosting for static websites through GitHub Pages.
- **Create React App**: This project was bootstrapped with Create React App.
