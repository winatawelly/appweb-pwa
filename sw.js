self.addEventListener('install', function (event) {
    console.log('SW Installed');
    event.waitUntil(
      caches.open('static')
        .then(function (cache) {
          // cache.add('/');
          // cache.add('/index.html');
          // cache.add('/src/js/app.js');
          cache.addAll([
            '/',
            '/index.html',
            '/app.js',
            '/assets/product_img/baju1.jpg',
            '/assets/product_img/baju2.jpg',
            '/assets/product_img/baju3.jpg',
            '/assets/product_img/baju4.jpg',
            '/assets/product_img/sepatu1.jpg',
            '/assets/product_img/sepatu2.jpg',
            '/assets/product_img/sepatu3.jpg',
            '/assets/misc/profile.png',
            '/assets/misc/sad.png',
            '/assets/tab_icon/sample-01-refresh.png',
            'mobile/jquery.mobile-1.4.5.css',
            'mobile/jquery.js',
            'mobile/jquery.mobile-1.4.5.js'

          ]);
        })
    );
  });
  
  self.addEventListener('activate', function () {
    console.log('SW Activated');
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(res) {
          if (res) {
            return res;
          } else {
            return fetch(event.request);
          }
        })
    );
  });