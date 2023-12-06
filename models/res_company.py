from odoo import fields, models, api
from odoo.exceptions import ValidationError


class ResCompany(models.Model):
    _inherit = "res.company"

    @api.model
    def ensure_lang_selector(self):
        sudo_self = self.sudo()
        website = sudo_self.env.ref("demo_website.site")
        order_views = ["website.header_call_to_action", "website.header_language_selector",
                       "website.header_language_selector_flag"]
        target_views = {"website.header_language_selector": {"state": False},
                        "website.header_language_selector_flag": {"state": True,
                                                                  "inherit": "website.header_language_selector"},
                        "website.header_call_to_action": {"state": False}}
        all_views = sudo_self.env["ir.ui.view"]
        for key in order_views:
            domain = [("key", "=", key), ("website_id", "=", website.id)]
            state = target_views[key]["state"]
            inherit = target_views[key].get("inherit", False)
            present = sudo_self.env["ir.ui.view"].with_context(active_test=False).search(domain)
            values = {}
            if not present:
                present = sudo_self.env.ref(key).copy()
                values.update({"website_id": website.id, "active": state})
            else:
                if not present.active and state:
                    values.update({"active": state})
                elif present.active and not state:
                    values.update({"active": state})

            if inherit:
                to_inherit = all_views.filtered(lambda x: x.key == inherit)
                if not to_inherit:
                    mess = "No existe la vista {}, heredada por {}".format(inherit, key)
                    raise ValidationError(mess)
                values.update({"inherit_id": to_inherit.id})
            present.write(values)
            all_views += present
