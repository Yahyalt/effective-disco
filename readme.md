# Effective Disco 🕺

A WebdriverIO-based End-to-End (E2E) testing project for automated testing of e-commerce applications.

## 📋 Project Overview

This project provides automated E2E testing for the [livehaf.com](https://livehaf.com/) e-commerce website. It uses WebdriverIO with Mocha framework to test critical user flows including product browsing, cart management, and checkout processes.

## 🎯 Project Purpose

- **Automated Testing**: Ensures e-commerce functionality works correctly across different scenarios
- **Quality Assurance**: Validates user flows from product selection to checkout
- **Regression Testing**: Prevents bugs from being introduced during development
- **Cross-browser Testing**: Supports testing across different browser environments

## 🔧 Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** (comes with Node.js)
- **Chrome Browser** (for browser automation)
- **Git** (for version control)

## 🚀 Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd effective-disco
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Verify installation**:
   ```bash
   npm run wdio --version
   ```

## ⚙️ Configuration

### WebdriverIO Configuration

The project uses `wdio.conf.js` for configuration:

- **Base URL**: `https://livehaf.com/`
- **Browser**: Chrome (default)
- **Framework**: Mocha
- **Test Pattern**: `./test/specs/**/*.js`
- **Max Instances**: 10
- **Timeout**: 60 seconds
- **Reporter**: Spec reporter

### Babel Configuration

The project uses Babel for modern JavaScript support:
- **Target**: Node.js 18
- **Preset**: `@babel/preset-env`

## 📖 Usage

### Running Tests

1. **Run all E2E tests**:
   ```bash
   npm run wdio
   ```

2. **Run specific test file**:
   ```bash
   npx wdio run ./wdio.conf.js --spec ./test/specs/test.e2e.js
   ```

3. **Run tests with different log levels**:
   ```bash
   npx wdio run ./wdio.conf.js --logLevel=debug
   ```

### Running Unit Tests

```bash
npm test
```

## 🧪 Test Structure

### Current Test Suite

The project includes one main E2E test file: `test/specs/test.e2e.js`

#### Test: "Able to checkout the clothes and they exist on the checkout page"

**Flow**:
1. Navigate to livehaf.com
2. Click the slideshow next button
3. Select "Boxy Ease Tee Orange" product
4. Add product to cart
5. Navigate to checkout
6. Verify product appears on checkout page

**Key Assertions**:
- Product is successfully added to cart
- Cart item information is displayed
- Product appears on checkout page

### Test Selectors Used

- **Slideshow Navigation**: `button.flickity-prev-next-button.next`
- **Product Link**: `a[href="/collections/best-sellers/products/boxy-ease-tee-orange"]`
- **Add to Cart Button**: `button.ProductForm__AddToCart[data-action="add-to-cart"]`
- **Cart Item Info**: `.Cart__ItemList .CartItem__Info`
- **Checkout Button**: `button.Cart__Checkout`
- **Checkout Item**: `p._1x52f9s1._1frageme0._1x52f9so._1fragemfq._1x52f9s2`

## 📝 Project Specifications

### Technical Stack

- **Test Framework**: WebdriverIO v8.16.17
- **Assertion Library**: Mocha + expect-webdriverio
- **Browser Automation**: ChromeDriver
- **JavaScript Transpilation**: Babel
- **Node.js Version**: 18+

### Dependencies

#### Core Dependencies
- `webdriverio`: WebDriver automation framework
- `@wdio/local-runner`: Local test execution
- `@wdio/mocha-framework`: Mocha integration
- `@wdio/spec-reporter`: Test reporting
- `expect-webdriverio`: Enhanced assertions
- `chromedriver`: Chrome browser automation

#### Development Dependencies
- `@babel/core`: JavaScript transpilation
- `@babel/preset-env`: Modern JavaScript support
- `@babel/register`: Runtime transpilation
- `mocha`: Test framework

### Project Structure

```
effective-disco/
├── babel.config.js          # Babel configuration
├── package.json            # Project dependencies and scripts
├── wdio.conf.js           # WebdriverIO configuration
├── test/
│   └── specs/
│       └── test.e2e.js    # E2E test specifications
└── README.md              # Project documentation
```

## 🎮 Commands Reference

| Command | Description |
|---------|-------------|
| `npm install` | Install all dependencies |
| `npm run wdio` | Run WebdriverIO E2E tests |
| `npm test` | Run unit tests (Mocha) |
| `npx wdio run ./wdio.conf.js` | Run WebdriverIO tests directly |

## 🔍 Debugging

### Common Issues

1. **Browser Not Found**:
   - Ensure Chrome is installed
   - Check ChromeDriver compatibility

2. **Element Not Found**:
   - Website structure might have changed
   - Update selectors in test files

3. **Timeout Issues**:
   - Increase timeout in `wdio.conf.js`
   - Check network connectivity

### Debug Mode

Run tests with debug logging:
```bash
npx wdio run ./wdio.conf.js --logLevel=debug
```

## 📊 Test Reports

Tests use the spec reporter by default, providing:
- Test execution summary
- Pass/fail status for each test
- Execution time
- Error details for failed tests

## 🤝 Contributing

Since this is a personal project, contributions follow these guidelines:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/new-test`
3. **Write tests**: Follow existing patterns and naming conventions
4. **Test your changes**: Ensure all tests pass
5. **Commit changes**: Use clear, descriptive commit messages
6. **Push to branch**: `git push origin feature/new-test`
7. **Create Pull Request**: Describe changes and testing performed

### Code Style

- Use async/await for WebdriverIO commands
- Follow existing selector patterns
- Include meaningful test descriptions
- Add appropriate wait conditions

## 🔄 Future Enhancements

- [ ] Add more comprehensive test coverage
- [ ] Implement cross-browser testing
- [ ] Add visual regression testing
- [ ] Integrate with CI/CD pipeline
- [ ] Add performance testing
- [ ] Implement page object model
- [ ] Add data-driven testing

## 📄 License

This project is licensed under the ISC License.

## 🙋‍♂️ Support

For questions or issues:
1. Check existing issues in the repository
2. Review WebdriverIO documentation
3. Create a new issue with detailed description

---

**Happy Testing! 🚀**