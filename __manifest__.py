# -*- coding: utf-8 -*-
{
    "name": "Demo Website",
    "summary": """
        Sitio web de prueba""",
    "description": """
        Sitio web de prueba
    """,
    "author": "Cristian",
    "website": "http://www.odoo.com",
    "category": "Website/Website",
    "version": "0.1",
    "depends": [
        "web",
        "website",
    ],
    "data": [
        "data/site.xml",
        "data/function.xml",
        "data/sitemap.xml",
        "views/home.xml",
        "views/about.xml",
        "views/footer.xml",
        "views/style.xml",
        "views/templates.xml",
        "data/page.xml",
        "data/menu.xml",
    ],
    "assets": {
        "web.assets_frontend": [
            "demo_website_1/static/src/js/popper.min.js",
            "demo_website_1/static/src/js/owl.carousel.min.js",
            "demo_website_1/static/src/js/scrollIt.min.js",
            "demo_website_1/static/src/js/video.min.js",
            "demo_website_1/static/src/js/aos.js",
            "demo_website_1/static/src/js/main.js",
        ]
    },
}
