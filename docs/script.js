// Newsletter Subscription
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        // Show success message
        alert('Thank you for subscribing! We will keep you updated.');
        this.reset();
    });
}

// Category Filter
const categoryFilter = document.querySelector('.category-filter');

    if (categoryFilter) {
        categoryFilter.addEventListener('change', function () {
            const selectedCategory = this.value;
            const productCards = document.querySelectorAll('.product-card');

            productCards.forEach(card => {
                if (selectedCategory === 'all') {
                    card.style.display = 'block';
                } else {
                    card.style.display = card.dataset.category === selectedCategory ? 'block' : 'none';
                }
            });
        });
    }

// Add to Cart
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('.price').textContent;
        
        // Show success message
        alert(`Added ${productName} to cart!`);
        
        // You can add more cart functionality here
    });
});

// Product Detail Page
const orderForm = document.querySelector('#orderForm');
if (orderForm) {
    // Load product data based on URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const product = urlParams.get('product');
    
    // Function to create YouTube embed URL from video ID
    function createYouTubeEmbed(videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
    }
    
    // Function to update main image or video
    function updateMainMedia(src, isVideo = false) {
        const mainImageContainer = document.getElementById('main-image-container');
        
        // Remove any existing content
        mainImageContainer.innerHTML = '';
        
        if (isVideo) {
            // Create and insert iframe for video
            const iframe = document.createElement('iframe');
            iframe.src = src;
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
            iframe.style.width = '100%';
            iframe.style.height = '600px';
            iframe.style.borderRadius = '8px';
            mainImageContainer.appendChild(iframe);
        } else {
            // Create and insert image
            const img = document.createElement('img');
            img.id = 'main-image';
            img.src = src;
            img.alt = 'Product Main Image';
            img.style.width = '100%';
            img.style.height = '600px';
            img.style.objectFit = 'cover';
            img.style.borderRadius = '8px';
            mainImageContainer.appendChild(img);
        }
    }
    
    // Product data - in a real application this would come from a backend
    const products = {
        smartphone: {
            name: "Latest Smartphone",
            price: "$499.99",
            category: "Electronics",
            description: "High-performance smartphone with advanced features. Perfect for both work and entertainment.",
            images: [
                "https://www.racunalniske-novice.com/wp-content/uploads/2024/09/Apple-iPhone-16-Pro-hero-240909_inline-1.jpg.large_-1.jpg",
                "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MA7F4_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=cEMrK1BETUx0R013ckd3MURLdGo3MVZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUVJsakxPWm1CZ1BPV2ljSkhYY2hhdnc",
                "https://www.youtube.com/embed/-TF0q114EVY?si=GK4tVapyJOZg2iq9"  // iPhone 16 Pro review video
            ]
        },
        tshirt: {
            name: "Comfort T-Shirt",
            price: "$29.99",
            category: "Clothing",
            description: "Soft cotton t-shirt in various colors. Available in multiple sizes and colors.",
            images: [
                "https://www.careofcarl.ch/bilder/artiklar/zoom/16982611r_1.jpg?m=1671196060",
                "https://army-shop.ch/media/2b/8c/6d/1722849012/Schwarz-Qualitaets-Shirt.jpg?ts=1722849012",
                "https://www.youtube.com/embed/9Pbe4DyMQYw?si=I2ogwaWgSvHNHuGe"  // T-Shirt styling video
            ]
        },
        book: {
            name: "Bestseller Book",
            price: "$19.99",
            category: "Books",
            description: "Award-winning novel by renowned author. A must-read for all literature lovers.",
            images: [
                "https://images.thalia.media/-/BF750-750/211003c2215643b3af3766648b1a5403/harry-potter-1-and-the-philosopher-s-stone-gebundene-ausgabe-j-k-rowling-englisch.jpeg",
                "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg",
                "https://www.youtube.com/embed/YSedtFFBzB8?si=DCkO28z3oWdM-hXZ"  // Book review video
            ]
            
        },
        lamp: {
            name: "Modern Desk Lamp",
            price: "$39.99",
            category: "Home & Living",
            description: "Energy-efficient LED desk lamp with modern design. Perfect for your workspace.",
            images: [
                "https://m.media-amazon.com/images/I/713iJYS8jDL.jpg",
                "https://cdn.shopify.com/s/files/1/0526/5929/0273/files/a4d9c466c8e586fe20dba1735e7639af.webp?v=1726235082",
                "https://www.youtube.com/embed/GkDBuoW8MuQ?si=JHf3f3M3UwBCFaPS"  // Running shoes video
            ]
        },
        laptop: {
            name: "Premium Laptop",
            price: "$1,299.99",
            category: "Electronics",
            description: "Powerful laptop for professionals. Features latest processor and high-performance graphics.",
            images: [
                "https://cf-images.dustin.eu/cdn-cgi/image/fit=contain,format=auto,quality=75,width=828,fit=contain/image/d2000010011197891/microsoft-surface-laptop-go-3-core-i5-16gb-512gb-124.jpeg",
                "https://cdn.thewirecutter.com/wp-content/media/2024/11/cheapgaminglaptops-2048px-7981.jpg",
                "https://www.youtube.com/embed/gVBELZqOOIE?si=N3FLdvIOiSDAtswN"  // Laptop review video
            ]
        },
        jeans: {
            name: "Baggy Jeans",
            price: "$49.99",
            category: "Clothing",
            description: "Stylish baggy jeans made from premium denim. Available in multiple sizes.",
            images: [
                "https://static.pullandbear.net/assets/public/0af0/46aa/8be1404892d2/a035fa55ac6a/03687309802-a6m/03687309802-a6m.jpg?ts=1635830871188&w=1082&f=auto",
                "https://static.bershka.net/assets/public/163e/7802/296543e7b070/fe5fb6f10671/05341666400-p/05341666400-p.jpg?ts=1738328532160&w=1920",
                "https://www.youtube.com/embed/g_l-ps0Hrv4?si=oMM_wXVLc7ZsefPT"  // Jeans styling video
            ]
        },
        notebook: {
            name: "Business Notebook",
            price: "$24.99",
            category: "Books",
            description: "Premium leather notebook with 100 pages of high-quality paper.",
            images: [
                "https://cdn.officeworld.ch/bilder/groesser/adoc-business-spiralheft-a5-kariert-5-mm-braun-5411028362356_01_ow.jpg",
                "https://scooboo.in/cdn/shop/files/Solo_A5_Spiral_Notebook-Purple.png?v=1740644194&width=1214",
                "https://www.youtube.com/embed/-j-krMa3P74?si=asJJlVSgKEDDlFKT"
            ]
        },
        coffee: {
            name: "Smart Coffee Machine",
            price: "$199.99",
            category: "Home & Living",
            description: "Automatic coffee machine with smart features and app control.",
            images: [
                "https://static07.galaxus.com/productimages/1/3/6/7/3/7/5/4/1/4/6/0/2/3/7/3/4/7/0/dd1896a4-9d62-4eeb-8a8f-1b0bd19660a1.jpg_720.jpeg",
                "https://us.home-appliances.philips/cdn/shop/files/BaristaBrew_LongAmericano_1920x1080_pdp_1500x.jpg?v=1727984512",
                "https://www.youtube.com/embed/KslSycorCcM?si=tUC3u8n_Um2hc2AI"  // Coffee machine video
            ]
        },
        shoes: {
            name: "Running Shoes",
            price: "$129.99",
            category: "Clothing",
            description: "Comfortable running shoes with excellent cushioning and support.",
            images: [
                "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/aa0bd45abac541d29ff40b492e15cfa4_9366/Runfalcon_5_Running_Shoes_Black_IH7758_HM1.jpg",
                "https://hips.hearstapps.com/hmg-prod/images/running-shoes-005-68419d3f4376f.jpg?crop=0.668xw:1.00xh;0.213xw,0&resize=640:*",
                "https://www.youtube.com/embed/r_so1tdB9fo?si=iKZLEqeWQKC0-83G"
            ]
        },
        tablet: {
            name: "Premium Tablet",
            price: "$799.99",
            category: "Electronics",
            description: "High-performance tablet with large display and advanced features.",
            images: [
                "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-finish-select-202503-silver-wifi_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=80&.v=aHYyeWZ6TVBzTWw5WlZ2bFJCZno2aG1NVnhJaVErcFhXcDJFUzZhbVJBcUs1Y3FhVmdUUHEzOFNOVmNXd2trNmwrYlNkK0J5ZDZzOExOSm1DaDV3L3pBSHlqQStCOGVBOUJkSkVqU0hLTkFyaVJuRXFRckpaTUtDUkZ1YloyemdmbW94YnYxc1YvNXZ4emJGL0IxNFp3&traceId=1",
                "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-finish-select-202503-pink-wifi_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=80&.v=aHYyeWZ6TVBzTWw5WlZ2bFJCZno2aXd3Q2pKamtFTVV6Wk1KTjNUcUZtK3RpY0gzeTdwdlpIKzg4NWM0UWFDYzhPR21TUjBtZytxMXNhbXdjN2ZpMXEwekI5ZWpRa0o2WWdVYzdzTUdBdFVuVlFobTNwZkVmUEtVMlJZeExLOWo&traceId=1",
                "https://www.youtube.com/embed/QGgpVmHMBuU?si=zUdJJ7xyCF2JuIJ8"
            ]
        },
        perfume: {
            name: "Bleu de Chanel Perfume",
            price: "$129.99",
            category: "Home & Living",
            description: "Classic fragrance for men and women. 100ml bottle.",
            images: [
                "https://www.chanel.com/images//t_one/t_fragrance//q_auto:good,f_auto,fl_lossy,dpr_1.1/w_1920/bleu-de-chanel-parfum-spray-3-4fl-oz--packshot-default-107180-9564892200990.jpg",
                "https://media.johnlewiscontent.com/i/JohnLewis/238276957?fmt=auto&$background-off-white$",
                "https://www.youtube.com/embed/3pbpWAt1Dxs?si=DmS3pRoSLH9Ps3Km"
            ]
        },
        speaker: {
            name: "Beosound 2",
            price: "$1,499.99",
            category: "Electronics",
            description: "Premium wireless speaker with exceptional sound quality. 360-degree sound experience.",
            images: [
                "https://api.media-line.ch/site/assets/files/4392/beosound_2_3rd_gen__0023.1200x0.png",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzbql-DH1ier7s8fIvhJ7SgdUIbbYpt7ikQA&s",
                "https://www.youtube.com/embed/Dum8CpM4-wY?si=gqqFQusgImeb_AbP"  // Speaker demo video
            ]
        }
    };

    // Update product details if product exists
    if (product && products[product]) {
        const productData = products[product];
        
        // Update product details
        document.getElementById('product-name').textContent = productData.name;
        document.getElementById('product-price').textContent = productData.price;
        document.getElementById('product-category').textContent = productData.category;
        document.getElementById('product-description').innerHTML = productData.description;
        
        // Set initial main image
        updateMainMedia(productData.images[0]);
        
        // Update thumbnails
        const thumbnailGrid = document.querySelector('.thumbnail-grid');
        thumbnailGrid.innerHTML = '';
        
        productData.images.forEach((image, index) => {
            if (index === 2) {
                // Create video thumbnail for third image (YouTube video)
                const videoId = image.split('/embed/')[1];
                const videoThumbnail = document.createElement('div');
                videoThumbnail.className = 'video-thumbnail';
                videoThumbnail.dataset.videoId = videoId;
                
                // Create thumbnail image
                const thumbnailImg = document.createElement('img');
                thumbnailImg.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                thumbnailImg.alt = 'Video Thumbnail';
                
                // Create play icon
                const playIcon = document.createElement('div');
                playIcon.className = 'play-icon';
                playIcon.textContent = '▶';
                
                videoThumbnail.appendChild(thumbnailImg);
                videoThumbnail.appendChild(playIcon);
                
                videoThumbnail.onclick = () => {
                    updateMainMedia(createYouTubeEmbed(videoId), true);
                };
                thumbnailGrid.appendChild(videoThumbnail);
            } else {
                // Create regular image thumbnail
                const thumbnail = document.createElement('img');
                thumbnail.src = image;
                thumbnail.alt = `Thumbnail ${index + 1}`;
                thumbnail.className = 'thumbnail';
                thumbnail.onclick = () => {
                    updateMainMedia(image);
                };
                thumbnailGrid.appendChild(thumbnail);
            }
        });
    }

    // Handle order form submission
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const address = formData.get('address');
        const quantity = formData.get('quantity');
        
        // Show success message
        alert(`Thank you for your order! We will process your order for ${quantity} ${productData[product].name} and contact you at ${email}.`);
        this.reset();
    });
}

// Contact Form
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}
