<?php

namespace App\Http\Controllers;

use App\Models\Site;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SiteController extends Controller
{
    public function site_content()
    {
        $site = Site::where('id', '=', 1)->first();
        return Inertia::render(
            'admin/siteContent',
            [
                'site' => $site
            ]

        );
    }

    public function site_settings()
    {
        $site = Site::where('id', '=', 1)->first();
        return Inertia::render(
            'admin/siteSettings',
            [
                'site' => $site
            ]

        );
    }

    public function update_site_content(Request $request)
    {
        $site = Site::findOrFail(1);
        $site->header = $request->header;
        $site->header_content = $request->header_content;
        $site->map_url = $request->map_url;
        $site->about_us = $request->about_us;
        $site->terms_and_conditions = $request->terms_and_conditions;
        $site->privacy_policy = $request->privacy_policy;
        $site->contact_info = $request->contact_info;
        $site->footer_content = $request->footer_content;
        $site->welcome_message = $request->welcome_message;
        $site->disclaimer = $request->disclaimer;
        $site->save();

        return back()->with('success', 'Changes Saved');
    }



    public function update_site_settings(Request $request)
    {
        if ($request->hasFile('logo') || $request->hasFile('favicon')) {
            $request->validate([

                'logo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
                'favicon' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',

            ]);
        }
        if ($request->hasFile('logo')) {
            $logoPath = $request->file('logo')->store('logos', 'public');
            $logo = $logoPath;
        }

        if ($request->hasFile('favicon')) {
            $faviconPath = $request->file('favicon')->store('favicons', 'public');
            $favicon = $faviconPath;
        }

        $site = Site::findOrFail(1);
        $site->sitename = $request->sitename;
        $site->site_url = $request->site_url;
        $site->slogan = $request->slogan;
        if ($request->hasFile('favicon')) {
            $site->favicon = $favicon;
        }
        if ($request->hasFile('logo')) {
            $site->logo = $logo;
        }
        
        $site->logo_height = $request->logo_height;
        $site->logo_width = $request->logo_width;
        $site->contact_email = $request->contact_email;
        $site->contact_phone = $request->contact_phone;
        $site->support_email = $request->support_email;
        $site->support_phone = $request->support_phone;
        $site->country = $request->country;
        $site->state = $request->state;
        $site->city = $request->city;
        $site->address = $request->address;
        $site->timezone = $request->timezone;
        $site->currency = $request->currency;
        $site->primary_color = $request->primary_color;
        $site->secondary_color = $request->secondary_color;
        $site->facebook = $request->facebook;
        $site->twitter = $request->twitter;
        $site->instagram = $request->instagram;
        $site->linkedin = $request->linkedin;
        $site->youtube = $request->youtube;
        $site->meta_keywords = $request->meta_keywords;
        $site->meta_description = $request->meta_description;
        $site->default_language = $request->default_language;
        $site->google_analytics_id = $request->google_analytics_id;
        $site->smtp_host = $request->smtp_host;
        $site->smtp_port = $request->smtp_port;
        $site->smtp_username = $request->smtp_username;
        $site->smtp_password = $request->smtp_password;
        $site->smtp_encryption = $request->smtp_encryption;
        $site->maintenance_mode = $request->maintenance_mode;
        $site->enable_email_verification = $request->enable_email_verification;
        $site->enable_registration = $request->enable_registration;
        $site->enable_kyc = $request->enable_kyc;
        $site->allow_welcome_message = $request->allow_welcome_message;

        $site->save();

        return back()->with('success', 'Changes Saved');
    }

    public function site_templates()
    {
        $site = Site::where('id', '=', 1)->first();
        return Inertia::render(
            'admin/siteTemplates',
            [
                'site' => $site
            ]

        );
    }
    public function update_site_templates(Request $request)
    {
        $site = Site::findOrFail(1);
        $site->template = $request->template;
        $site->save();

        return back()->with('success', 'Changes Saved');
    }
}
