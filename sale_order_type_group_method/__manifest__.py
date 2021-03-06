# Copyright 2018 Omar Castiñeira Saavedra <omar@comunitea.com>
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl).

{
    "name": "Sale Order Type Group Method",
    "version": "12.0.0.0.0",
    "category": "Sales Management",
    "author": "Comunitea",
    "website": "https://comunitea.com",
    "license": "AGPL-3",
    "depends": [
        'sale_order_type',
        'sale_invoice_group_method',
    ],
    "data": [
        'views/sale_order_type_view.xml',
        'data/sale_order_type_group_invoice_data.xml'
    ],
    'installable': True,
}
