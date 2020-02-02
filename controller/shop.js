const Product = require('../model/product');
const Cart = require('../model/cart');

exports.getProduct = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      pageTitle: "Shop Products",
      prods: products,
      path: "/products"
    });
  })
};

exports.getDetails = (req, res, next) => {
  const productID = req.params.productId;
  Product.findById(productID, product => {
    res.render('shop/product-detail', { pageTitle: product.title, product: product, path: '/products' });
  });

};

exports.getCart = (req, res, next) => {
  Cart.getCart(cart => {
    Product.fetchAll(products => {
      const cartProducts = [];
      for(product of products) {
        const CartproductData = cart.products.find(prod => prod.id === product.id)
        if(CartproductData) {
          cartProducts.push({productData: product, qty: CartproductData.qty});
        }
      }
      res.render('shop/cart', {
        pageTitle: 'Cart',
        path: '/cart',
        products: cartProducts
      });
    }); 
    
  });
  
};

exports.postCart = (req, res, next) => {
  const productID = req.body.productID
  console.log(productID);
  Product.findById(productID, product => {
    Cart.addProduct(productID, product.price);
  })
  res.redirect('/');
}

exports.postCartDeleteProduct = (req, res, next) => {
  const productID = req.body.productID;
  Product.findById(productID, product => {
    Cart.deleteProduct(productID, product.price);
    res.redirect('/cart');
  });
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    pageTitle: 'Orders',
    path: '/orders'
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      pageTitle: "Shop",
      prods: products,
      path: "/"
    });
  })
};



