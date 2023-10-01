const { expect, browser, $ } = require('@wdio/globals')

describe('E-commerce application', () => {
    it('Able to checkout the clothes and they exist on the checkout page', async () => {
        await browser.url(`https://livehaf.com/`)

        // Wait for the button to be clickable
        const buttonSelector = 'button.flickity-prev-next-button.next';
        const buttonElement = $(buttonSelector);
        await buttonElement.waitForClickable();

        // Click the button to slide the product slideshow
        await buttonElement.click();

        // Wait for the product named "Boxy Ease Tee Orange" to exist
        const ahrefSelector = 'a[href="/collections/best-sellers/products/boxy-ease-tee-orange"]';
        const ahrefElement = $(ahrefSelector);
        await ahrefElement.waitForClickable();

        // Click the product button
        await ahrefElement.click();

        // Wait for the "Tambahkan ke Keranjang" button to exist
        const cartSelector = 'button.ProductForm__AddToCart[data-action="add-to-cart"]';
        const cartElement = $(cartSelector);
        await cartElement.waitForClickable();

        // Click the "Tambahkan ke Keranjang" button
        await cartElement.click();

        // Assertion: Check if the element is visible and the product has been added to the cart
        const cartItemInfoSelector = '.Cart__ItemList .CartItem__Info';
        const cartItemInfoElement = $(cartItemInfoSelector);
        await cartItemInfoElement.waitForExist();        
        expect(await cartItemInfoElement.isDisplayed()).toBe(true);

        // Click the checkout button and navigate to the checkout page
        const checkoutButtonSelector = 'button.Cart__Checkout';
        const checkoutButton = $(checkoutButtonSelector);
        await checkoutButton.waitForClickable();
        await checkoutButton.click();

        // Assertion: Check if the "Boxy Ease Tee Orange" product exists on the checkout page
        const checkoutItemSelector = 'p._1x52f9s1._1frageme0._1x52f9so._1fragemfq._1x52f9s2';
        const checkoutItemElement = $(checkoutItemSelector);
        await checkoutItemElement.waitForExist();
        expect(await checkoutItemElement.isExisting()).toBe(true);
    })
})
