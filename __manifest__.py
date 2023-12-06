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
        "views/footer.xml",
        "views/style.xml",
        "views/templates.xml",
        "data/page.xml",
    ],
    "assets": {
        "web.assets_frontend": [
            "treming_dte_website/static/src/js/popper.min.js",
            "treming_dte_website/static/src/js/owl.carousel.min.js",
            "treming_dte_website/static/src/js/scrollIt.min.js",
            "treming_dte_website/static/src/js/main.js",
        ]
    },
}