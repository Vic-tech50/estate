import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm, usePage } from '@inertiajs/react';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/js/plugins.pkgd.min.js';
import { LoaderCircle } from 'lucide-react';
import { useRoute } from 'ziggy-js';

// import { toast } from "sonner";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Site Settings',
        href: '#',
    },
];

export default function SiteSettings() {
    const route = useRoute();
    let site: any = usePage().props.site || [];
    type SiteSettingsForm = {
        sitename: string;
        site_url: string;
        slogan: string;
        favicon: File | null;
        logo: File | null;
        logo_height: string;
        logo_width: string;
        contact_email: string;
        contact_phone: string;
        support_email: string;
        support_phone: string;
        country: string;
        state: string;
        city: string;
        address: string;
        timezone: string;
        currency: string;
        primary_color: string;
        secondary_color: string;
        facebook: string;
        twitter: string;
        instagram: string;
        linkedin: string;
        youtube: string;
        meta_keywords: string;
        meta_description: string;
        default_language: string;
        google_analytics_id: string;
        smtp_host: string;
        smtp_port: string;
        smtp_username: string;
        smtp_password: string;
        smtp_encryption: string;
        maintenance_mode: boolean;
        enable_registration: boolean;
        enable_email_verification: boolean;
        enable_kyc: boolean;
        allow_welcome_message: boolean;
    };
    const { data, setData, post, processing, errors, progress } =
        useForm<SiteSettingsForm>({
            sitename: site.sitename || '',
            site_url: site.site_url || '',
            slogan: site.slogan || '',
            favicon: null,
            logo: null,
            logo_height: site.logo_height || '',
            logo_width: site.logo_width || '',
            contact_email: site.contact_email || '',
            contact_phone: site.contact_phone || '',
            support_email: site.support_email || '',
            support_phone: site.support_phone || '',
            country: site.country || '',
            state: site.state || '',
            city: site.city || '',
            address: site.address || '',
            timezone: site.timezone || '',
            currency: site.currency || '',
            primary_color: site.primary_color || '',
            secondary_color: site.secondary_color || '',
            facebook: site.facebook || '',
            twitter: site.twitter || '',
            instagram: site.instagram || '',
            linkedin: site.linkedin || '',
            youtube: site.youtube || '',
            meta_keywords: site.meta_keywords || '',
            meta_description: site.meta_description || '',
            default_language: site.default_language || '',
            google_analytics_id: site.google_analytics_id || '',
            smtp_host: site.smtp_host || '',
            smtp_port: site.smtp_port || '',
            smtp_username: site.smtp_username || '',
            smtp_password: site.smtp_password || '',
            smtp_encryption: site.smtp_encryption || '',
            maintenance_mode: site.maintenance_mode || false,
            enable_registration: site.enable_registration || true,
            enable_email_verification: site.enable_email_verification || false,
            enable_kyc: site.enable_kyc || false,
            allow_welcome_message: site.allow_welcome_message || false,
        });

    function submit(e: any) {
        e.preventDefault();
        post('/update_settings');
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Site Settings" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <div className="mx-auto my-10 w-3/4">
                        <form onSubmit={submit} className="space-y-6">
                            <div className="mt-8 grid gap-6 md:grid-cols-2">
                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="sitename">Site Name</Label>
                                    <Input
                                        type="text"
                                        id="sitename"
                                        placeholder="EX: Real Estate"
                                        value={data.sitename}
                                        onChange={(e) =>
                                            setData('sitename', e.target.value)
                                        }
                                        className="h-12 w-full"
                                    />

                                    {errors.sitename && (
                                        <div className="text-red-500">
                                            {errors.sitename}
                                        </div>
                                    )}
                                </div>

                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="site_url">Site URL</Label>
                                    <Input
                                        type="url"
                                        id="site_url"
                                        placeholder="EX: https://yoursite.com"
                                        value={data.site_url}
                                        onChange={(e) =>
                                            setData('site_url', e.target.value)
                                        }
                                        className="h-12 w-full"
                                    />

                                    {errors.site_url && (
                                        <div className="text-red-500">
                                            {errors.site_url}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="mt-8 grid gap-6 md:grid-cols-2">
                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="slogan">Slogan</Label>
                                    <Input
                                        type="text"
                                        id="slogan"
                                        placeholder="EX: Your Dream Home Awaits"
                                        value={data.slogan}
                                        onChange={(e) =>
                                            setData('slogan', e.target.value)
                                        }
                                        className="h-12 w-full"
                                    />

                                    {errors.slogan && (
                                        <div className="text-red-500">
                                            {errors.slogan}
                                        </div>
                                    )}
                                </div>

                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="favicon">Favicon</Label>
                                    <Input
                                        type="file"
                                        id="favicon"
                                        name="favicon"
                                        // value={data.favicon}
                                        onChange={(e) =>
                                            setData(
                                                'favicon',
                                                e.target.files[0],
                                            )
                                        }
                                        className="h-12 w-full"
                                    />

                                    {errors.favicon && (
                                        <div className="text-red-500">
                                            {errors.favicon}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="mt-8 grid gap-6 md:grid-cols-3">
                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="logo">Logo</Label>
                                    <Input
                                        type="file"
                                        id="logo"
                                        placeholder=""
                                        name="logo"
                                        // value={data.logo}
                                        onChange={(e) =>
                                            setData('logo', e.target.files[0])
                                        }
                                        className="h-12 w-full"
                                    />

                                    {errors.logo && (
                                        <div className="text-red-500">
                                            {errors.logo}
                                        </div>
                                    )}
                                </div>

                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="logo_height">
                                        Logo Height
                                    </Label>
                                    <Input
                                        type="text"
                                        id="logo_height"
                                        placeholder="EX: 100px"
                                        value={data.logo_height}
                                        onChange={(e) =>
                                            setData(
                                                'logo_height',
                                                e.target.value,
                                            )
                                        }
                                        className="h-12 w-full"
                                    />

                                    {errors.logo_height && (
                                        <div className="text-red-500">
                                            {errors.logo_height}
                                        </div>
                                    )}
                                </div>

                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="logo_width">
                                        Logo Width
                                    </Label>
                                    <Input
                                        type="text"
                                        id="logo_width"
                                        placeholder="EX: 100px"
                                        value={data.logo_width}
                                        onChange={(e) =>
                                            setData(
                                                'logo_width',
                                                e.target.value,
                                            )
                                        }
                                        className="h-12 w-full"
                                    />

                                    {errors.logo_width && (
                                        <div className="text-red-500">
                                            {errors.logo_width}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="mt-8 grid gap-6 md:grid-cols-2">
                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="email">Contact Email</Label>
                                    <Input
                                        type="email"
                                        id="contact_email"
                                        placeholder="EX: example@example.com"
                                        value={data.contact_email}
                                        onChange={(e) =>
                                            setData(
                                                'contact_email',
                                                e.target.value,
                                            )
                                        }
                                        className="h-12 w-full"
                                    />

                                    {errors.contact_email && (
                                        <div className="text-red-500">
                                            {errors.contact_email}
                                        </div>
                                    )}
                                </div>

                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="phone">Contact Phone</Label>
                                    <Input
                                        type="tel"
                                        id="contact_phone"
                                        placeholder="EX: 123-456-7890"
                                        value={data.contact_phone}
                                        onChange={(e) =>
                                            setData(
                                                'contact_phone',
                                                e.target.value,
                                            )
                                        }
                                        className="h-12 w-full"
                                    />

                                    {errors.contact_phone && (
                                        <div className="text-red-500">
                                            {errors.contact_phone}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="mt-8 grid gap-6 md:grid-cols-2">
                                <div className="mt-8 grid w-full gap-3">
                                    <Label htmlFor="support_email">
                                        Support Email
                                    </Label>
                                    <Input
                                        type="email"
                                        id="support_email"
                                        placeholder="EX: support@example.com"
                                        value={data.support_email}
                                        onChange={(e) =>
                                            setData(
                                                'support_email',
                                                e.target.value,
                                            )
                                        }
                                        className="h-12 w-full"
                                    />

                                    {errors.support_email && (
                                        <div className="text-red-500">
                                            {errors.support_email}
                                        </div>
                                    )}
                                </div>

                                <div className="mt-8 grid w-full gap-3">
                                    <Label htmlFor="support_phone">
                                        Support Phone
                                    </Label>
                                    <Input
                                        type="tel"
                                        id="support_phone"
                                        placeholder="EX: #ff0000"
                                        value={data.support_phone}
                                        onChange={(e) =>
                                            setData(
                                                'support_phone',
                                                e.target.value,
                                            )
                                        }
                                        className="h-12 w-full"
                                    />

                                    {errors.support_phone && (
                                        <div className="text-red-500">
                                            {errors.support_phone}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="mt-8 grid gap-6 md:grid-cols-3">
                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="country">Country </Label>
                                    <Select
                                        value={data.country}
                                        onValueChange={(value) =>
                                            setData('country', value)
                                        }
                                    >
                                        <SelectTrigger className="h-12 w-full">
                                            <SelectValue
                                                placeholder={
                                                    data.country || 'Country'
                                                }
                                            />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>
                                                    Select Country
                                                </SelectLabel>
                                                <SelectItem value="afghanistan">
                                                    Afghanistan
                                                </SelectItem>
                                                <SelectItem value="albania">
                                                    Albania
                                                </SelectItem>
                                                <SelectItem value="algeria">
                                                    Algeria
                                                </SelectItem>
                                                <SelectItem value="andorra">
                                                    Andorra
                                                </SelectItem>
                                                <SelectItem value="angola">
                                                    Angola
                                                </SelectItem>
                                                <SelectItem value="argentina">
                                                    Argentina
                                                </SelectItem>
                                                <SelectItem value="armenia">
                                                    Armenia
                                                </SelectItem>
                                                <SelectItem value="australia">
                                                    Australia
                                                </SelectItem>
                                                <SelectItem value="austria">
                                                    Austria
                                                </SelectItem>
                                                <SelectItem value="azerbaijan">
                                                    Azerbaijan
                                                </SelectItem>
                                                <SelectItem value="bahamas">
                                                    Bahamas
                                                </SelectItem>
                                                <SelectItem value="bahrain">
                                                    Bahrain
                                                </SelectItem>
                                                <SelectItem value="bangladesh">
                                                    Bangladesh
                                                </SelectItem>
                                                <SelectItem value="barbados">
                                                    Barbados
                                                </SelectItem>
                                                <SelectItem value="belarus">
                                                    Belarus
                                                </SelectItem>
                                                <SelectItem value="belgium">
                                                    Belgium
                                                </SelectItem>
                                                <SelectItem value="belize">
                                                    Belize
                                                </SelectItem>
                                                <SelectItem value="benin">
                                                    Benin
                                                </SelectItem>
                                                <SelectItem value="bhutan">
                                                    Bhutan
                                                </SelectItem>
                                                <SelectItem value="bolivia">
                                                    Bolivia
                                                </SelectItem>
                                                <SelectItem value="bosnia">
                                                    Bosnia and Herzegovina
                                                </SelectItem>
                                                <SelectItem value="botswana">
                                                    Botswana
                                                </SelectItem>
                                                <SelectItem value="brazil">
                                                    Brazil
                                                </SelectItem>
                                                <SelectItem value="brunei">
                                                    Brunei
                                                </SelectItem>
                                                <SelectItem value="bulgaria">
                                                    Bulgaria
                                                </SelectItem>
                                                <SelectItem value="burkinafaso">
                                                    Burkina Faso
                                                </SelectItem>
                                                <SelectItem value="burundi">
                                                    Burundi
                                                </SelectItem>
                                                <SelectItem value="cambodia">
                                                    Cambodia
                                                </SelectItem>
                                                <SelectItem value="cameroon">
                                                    Cameroon
                                                </SelectItem>
                                                <SelectItem value="canada">
                                                    Canada
                                                </SelectItem>
                                                <SelectItem value="capeverde">
                                                    Cape Verde
                                                </SelectItem>
                                                <SelectItem value="centralafricanrepublic">
                                                    Central African Republic
                                                </SelectItem>
                                                <SelectItem value="chad">
                                                    Chad
                                                </SelectItem>
                                                <SelectItem value="chile">
                                                    Chile
                                                </SelectItem>
                                                <SelectItem value="china">
                                                    China
                                                </SelectItem>
                                                <SelectItem value="colombia">
                                                    Colombia
                                                </SelectItem>
                                                <SelectItem value="comoros">
                                                    Comoros
                                                </SelectItem>
                                                <SelectItem value="congo">
                                                    Congo
                                                </SelectItem>
                                                <SelectItem value="costarica">
                                                    Costa Rica
                                                </SelectItem>
                                                <SelectItem value="croatia">
                                                    Croatia
                                                </SelectItem>
                                                <SelectItem value="cuba">
                                                    Cuba
                                                </SelectItem>
                                                <SelectItem value="cyprus">
                                                    Cyprus
                                                </SelectItem>
                                                <SelectItem value="czechia">
                                                    Czechia
                                                </SelectItem>
                                                <SelectItem value="denmark">
                                                    Denmark
                                                </SelectItem>
                                                <SelectItem value="djibouti">
                                                    Djibouti
                                                </SelectItem>
                                                <SelectItem value="dominica">
                                                    Dominica
                                                </SelectItem>
                                                <SelectItem value="dominicanrepublic">
                                                    Dominican Republic
                                                </SelectItem>
                                                <SelectItem value="ecuador">
                                                    Ecuador
                                                </SelectItem>
                                                <SelectItem value="egypt">
                                                    Egypt
                                                </SelectItem>
                                                <SelectItem value="elsalvador">
                                                    El Salvador
                                                </SelectItem>
                                                <SelectItem value="equatorialguinea">
                                                    Equatorial Guinea
                                                </SelectItem>
                                                <SelectItem value="eritrea">
                                                    Eritrea
                                                </SelectItem>
                                                <SelectItem value="estonia">
                                                    Estonia
                                                </SelectItem>
                                                <SelectItem value="eswatini">
                                                    Eswatini
                                                </SelectItem>
                                                <SelectItem value="ethiopia">
                                                    Ethiopia
                                                </SelectItem>
                                                <SelectItem value="fiji">
                                                    Fiji
                                                </SelectItem>
                                                <SelectItem value="finland">
                                                    Finland
                                                </SelectItem>
                                                <SelectItem value="france">
                                                    France
                                                </SelectItem>
                                                <SelectItem value="gabon">
                                                    Gabon
                                                </SelectItem>
                                                <SelectItem value="gambia">
                                                    Gambia
                                                </SelectItem>
                                                <SelectItem value="georgia">
                                                    Georgia
                                                </SelectItem>
                                                <SelectItem value="germany">
                                                    Germany
                                                </SelectItem>
                                                <SelectItem value="ghana">
                                                    Ghana
                                                </SelectItem>
                                                <SelectItem value="greece">
                                                    Greece
                                                </SelectItem>
                                                <SelectItem value="grenada">
                                                    Grenada
                                                </SelectItem>
                                                <SelectItem value="guatemala">
                                                    Guatemala
                                                </SelectItem>
                                                <SelectItem value="guinea">
                                                    Guinea
                                                </SelectItem>
                                                <SelectItem value="guineabissau">
                                                    Guinea-Bissau
                                                </SelectItem>
                                                <SelectItem value="guyana">
                                                    Guyana
                                                </SelectItem>
                                                <SelectItem value="haiti">
                                                    Haiti
                                                </SelectItem>
                                                <SelectItem value="honduras">
                                                    Honduras
                                                </SelectItem>
                                                <SelectItem value="hungary">
                                                    Hungary
                                                </SelectItem>
                                                <SelectItem value="iceland">
                                                    Iceland
                                                </SelectItem>
                                                <SelectItem value="india">
                                                    India
                                                </SelectItem>
                                                <SelectItem value="indonesia">
                                                    Indonesia
                                                </SelectItem>
                                                <SelectItem value="iran">
                                                    Iran
                                                </SelectItem>
                                                <SelectItem value="iraq">
                                                    Iraq
                                                </SelectItem>
                                                <SelectItem value="ireland">
                                                    Ireland
                                                </SelectItem>
                                                <SelectItem value="israel">
                                                    Israel
                                                </SelectItem>
                                                <SelectItem value="italy">
                                                    Italy
                                                </SelectItem>
                                                <SelectItem value="jamaica">
                                                    Jamaica
                                                </SelectItem>
                                                <SelectItem value="japan">
                                                    Japan
                                                </SelectItem>
                                                <SelectItem value="jordan">
                                                    Jordan
                                                </SelectItem>
                                                <SelectItem value="kazakhstan">
                                                    Kazakhstan
                                                </SelectItem>
                                                <SelectItem value="kenya">
                                                    Kenya
                                                </SelectItem>
                                                <SelectItem value="kiribati">
                                                    Kiribati
                                                </SelectItem>
                                                <SelectItem value="korea-north">
                                                    North Korea
                                                </SelectItem>
                                                <SelectItem value="korea-south">
                                                    South Korea
                                                </SelectItem>
                                                <SelectItem value="kosovo">
                                                    Kosovo
                                                </SelectItem>
                                                <SelectItem value="kuwait">
                                                    Kuwait
                                                </SelectItem>
                                                <SelectItem value="kyrgyzstan">
                                                    Kyrgyzstan
                                                </SelectItem>
                                                <SelectItem value="laos">
                                                    Laos
                                                </SelectItem>
                                                <SelectItem value="latvia">
                                                    Latvia
                                                </SelectItem>
                                                <SelectItem value="lebanon">
                                                    Lebanon
                                                </SelectItem>
                                                <SelectItem value="lesotho">
                                                    Lesotho
                                                </SelectItem>
                                                <SelectItem value="liberia">
                                                    Liberia
                                                </SelectItem>
                                                <SelectItem value="libya">
                                                    Libya
                                                </SelectItem>
                                                <SelectItem value="liechtenstein">
                                                    Liechtenstein
                                                </SelectItem>
                                                <SelectItem value="lithuania">
                                                    Lithuania
                                                </SelectItem>
                                                <SelectItem value="luxembourg">
                                                    Luxembourg
                                                </SelectItem>
                                                <SelectItem value="madagascar">
                                                    Madagascar
                                                </SelectItem>
                                                <SelectItem value="malawi">
                                                    Malawi
                                                </SelectItem>
                                                <SelectItem value="malaysia">
                                                    Malaysia
                                                </SelectItem>
                                                <SelectItem value="maldives">
                                                    Maldives
                                                </SelectItem>
                                                <SelectItem value="mali">
                                                    Mali
                                                </SelectItem>
                                                <SelectItem value="malta">
                                                    Malta
                                                </SelectItem>
                                                <SelectItem value="marshallislands">
                                                    Marshall Islands
                                                </SelectItem>
                                                <SelectItem value="mauritania">
                                                    Mauritania
                                                </SelectItem>
                                                <SelectItem value="mauritius">
                                                    Mauritius
                                                </SelectItem>
                                                <SelectItem value="mexico">
                                                    Mexico
                                                </SelectItem>
                                                <SelectItem value="micronesia">
                                                    Micronesia
                                                </SelectItem>
                                                <SelectItem value="moldova">
                                                    Moldova
                                                </SelectItem>
                                                <SelectItem value="monaco">
                                                    Monaco
                                                </SelectItem>
                                                <SelectItem value="mongolia">
                                                    Mongolia
                                                </SelectItem>
                                                <SelectItem value="montenegro">
                                                    Montenegro
                                                </SelectItem>
                                                <SelectItem value="morocco">
                                                    Morocco
                                                </SelectItem>
                                                <SelectItem value="mozambique">
                                                    Mozambique
                                                </SelectItem>
                                                <SelectItem value="myanmar">
                                                    Myanmar
                                                </SelectItem>
                                                <SelectItem value="namibia">
                                                    Namibia
                                                </SelectItem>
                                                <SelectItem value="nauru">
                                                    Nauru
                                                </SelectItem>
                                                <SelectItem value="nepal">
                                                    Nepal
                                                </SelectItem>
                                                <SelectItem value="netherlands">
                                                    Netherlands
                                                </SelectItem>
                                                <SelectItem value="newzealand">
                                                    New Zealand
                                                </SelectItem>
                                                <SelectItem value="nicaragua">
                                                    Nicaragua
                                                </SelectItem>
                                                <SelectItem value="niger">
                                                    Niger
                                                </SelectItem>
                                                <SelectItem value="nigeria">
                                                    Nigeria
                                                </SelectItem>
                                                <SelectItem value="northmacedonia">
                                                    North Macedonia
                                                </SelectItem>
                                                <SelectItem value="norway">
                                                    Norway
                                                </SelectItem>
                                                <SelectItem value="oman">
                                                    Oman
                                                </SelectItem>
                                                <SelectItem value="pakistan">
                                                    Pakistan
                                                </SelectItem>
                                                <SelectItem value="palau">
                                                    Palau
                                                </SelectItem>
                                                <SelectItem value="palestine">
                                                    Palestine
                                                </SelectItem>
                                                <SelectItem value="panama">
                                                    Panama
                                                </SelectItem>
                                                <SelectItem value="papuanewguinea">
                                                    Papua New Guinea
                                                </SelectItem>
                                                <SelectItem value="paraguay">
                                                    Paraguay
                                                </SelectItem>
                                                <SelectItem value="peru">
                                                    Peru
                                                </SelectItem>
                                                <SelectItem value="philippines">
                                                    Philippines
                                                </SelectItem>
                                                <SelectItem value="poland">
                                                    Poland
                                                </SelectItem>
                                                <SelectItem value="portugal">
                                                    Portugal
                                                </SelectItem>
                                                <SelectItem value="qatar">
                                                    Qatar
                                                </SelectItem>
                                                <SelectItem value="romania">
                                                    Romania
                                                </SelectItem>
                                                <SelectItem value="russia">
                                                    Russia
                                                </SelectItem>
                                                <SelectItem value="rwanda">
                                                    Rwanda
                                                </SelectItem>
                                                <SelectItem value="saintkittsandnevis">
                                                    Saint Kitts and Nevis
                                                </SelectItem>
                                                <SelectItem value="saintlucia">
                                                    Saint Lucia
                                                </SelectItem>
                                                <SelectItem value="saintvincentandthegrenadines">
                                                    Saint Vincent and the
                                                    Grenadines
                                                </SelectItem>
                                                <SelectItem value="samoa">
                                                    Samoa
                                                </SelectItem>
                                                <SelectItem value="sanmarino">
                                                    San Marino
                                                </SelectItem>
                                                <SelectItem value="saotomeandprincipe">
                                                    Sao Tome and Principe
                                                </SelectItem>
                                                <SelectItem value="saudiarabia">
                                                    Saudi Arabia
                                                </SelectItem>
                                                <SelectItem value="senegal">
                                                    Senegal
                                                </SelectItem>
                                                <SelectItem value="serbia">
                                                    Serbia
                                                </SelectItem>
                                                <SelectItem value="seychelles">
                                                    Seychelles
                                                </SelectItem>
                                                <SelectItem value="sierraleone">
                                                    Sierra Leone
                                                </SelectItem>
                                                <SelectItem value="singapore">
                                                    Singapore
                                                </SelectItem>
                                                <SelectItem value="slovakia">
                                                    Slovakia
                                                </SelectItem>
                                                <SelectItem value="slovenia">
                                                    Slovenia
                                                </SelectItem>
                                                <SelectItem value="solomonislands">
                                                    Solomon Islands
                                                </SelectItem>
                                                <SelectItem value="somalia">
                                                    Somalia
                                                </SelectItem>
                                                <SelectItem value="southafrica">
                                                    South Africa
                                                </SelectItem>
                                                <SelectItem value="southsudan">
                                                    South Sudan
                                                </SelectItem>
                                                <SelectItem value="spain">
                                                    Spain
                                                </SelectItem>
                                                <SelectItem value="srilanka">
                                                    Sri Lanka
                                                </SelectItem>
                                                <SelectItem value="sudan">
                                                    Sudan
                                                </SelectItem>
                                                <SelectItem value="suriname">
                                                    Suriname
                                                </SelectItem>
                                                <SelectItem value="sweden">
                                                    Sweden
                                                </SelectItem>
                                                <SelectItem value="switzerland">
                                                    Switzerland
                                                </SelectItem>
                                                <SelectItem value="syria">
                                                    Syria
                                                </SelectItem>
                                                <SelectItem value="taiwan">
                                                    Taiwan
                                                </SelectItem>
                                                <SelectItem value="tajikistan">
                                                    Tajikistan
                                                </SelectItem>
                                                <SelectItem value="tanzania">
                                                    Tanzania
                                                </SelectItem>
                                                <SelectItem value="thailand">
                                                    Thailand
                                                </SelectItem>
                                                <SelectItem value="timorleste">
                                                    Timor-Leste
                                                </SelectItem>
                                                <SelectItem value="togo">
                                                    Togo
                                                </SelectItem>
                                                <SelectItem value="tonga">
                                                    Tonga
                                                </SelectItem>
                                                <SelectItem value="trinidadandtobago">
                                                    Trinidad and Tobago
                                                </SelectItem>
                                                <SelectItem value="tunisia">
                                                    Tunisia
                                                </SelectItem>
                                                <SelectItem value="turkey">
                                                    Turkey
                                                </SelectItem>
                                                <SelectItem value="turkmenistan">
                                                    Turkmenistan
                                                </SelectItem>
                                                <SelectItem value="tuvalu">
                                                    Tuvalu
                                                </SelectItem>
                                                <SelectItem value="uganda">
                                                    Uganda
                                                </SelectItem>
                                                <SelectItem value="ukraine">
                                                    Ukraine
                                                </SelectItem>
                                                <SelectItem value="uae">
                                                    United Arab Emirates
                                                </SelectItem>
                                                <SelectItem value="uk">
                                                    United Kingdom
                                                </SelectItem>
                                                <SelectItem value="usa">
                                                    United States
                                                </SelectItem>
                                                <SelectItem value="uruguay">
                                                    Uruguay
                                                </SelectItem>
                                                <SelectItem value="uzbekistan">
                                                    Uzbekistan
                                                </SelectItem>
                                                <SelectItem value="vanuatu">
                                                    Vanuatu
                                                </SelectItem>
                                                <SelectItem value="vatican">
                                                    Vatican City
                                                </SelectItem>
                                                <SelectItem value="venezuela">
                                                    Venezuela
                                                </SelectItem>
                                                <SelectItem value="vietnam">
                                                    Vietnam
                                                </SelectItem>
                                                <SelectItem value="yemen">
                                                    Yemen
                                                </SelectItem>
                                                <SelectItem value="zambia">
                                                    Zambia
                                                </SelectItem>
                                                <SelectItem value="zimbabwe">
                                                    Zimbabwe
                                                </SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    {errors.country && (
                                        <div className="text-red-500">
                                            {errors.country}
                                        </div>
                                    )}
                                </div>

                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="state">State </Label>
                                    <Input
                                        type="text"
                                        id="state"
                                        placeholder="State"
                                        value={data.state}
                                        onChange={(e) =>
                                            setData('state', e.target.value)
                                        }
                                        className="h-12 w-full"
                                    />

                                    {errors.state && (
                                        <div className="text-red-500">
                                            {errors.state}
                                        </div>
                                    )}
                                </div>

                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="city">City </Label>
                                    <Input
                                        type="tel"
                                        id="city"
                                        placeholder="EX: Lagos"
                                        value={data.city}
                                        onChange={(e) =>
                                            setData('city', e.target.value)
                                        }
                                        className="h-12 w-full"
                                    />

                                    {errors.city && (
                                        <div className="text-red-500">
                                            {errors.city}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="grid w-full items-center gap-3">
                                <Label htmlFor="city">Address</Label>
                                <Input
                                    type="text"
                                    id="address"
                                    placeholder="EX: 123 Main St"
                                    value={data.address}
                                    onChange={(e) =>
                                        setData('address', e.target.value)
                                    }
                                    className="h-12 w-full"
                                />

                                {errors.address && (
                                    <div className="text-red-500">
                                        {errors.address}
                                    </div>
                                )}
                            </div>

                            <div className="mt-8 grid gap-6 md:grid-cols-2">
                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="timezone">Timezone</Label>
                                    <Input
                                        type="text"
                                        id="timezone"
                                        placeholder="EX: GMT+1"
                                        value={data.timezone}
                                        onChange={(e) =>
                                            setData('timezone', e.target.value)
                                        }
                                        className="h-12 w-full"
                                    />

                                    {errors.timezone && (
                                        <div className="text-red-500">
                                            {errors.timezone}
                                        </div>
                                    )}
                                </div>

                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="currency">Currency</Label>
                                    <Input
                                        type="text"
                                        id="currency"
                                        placeholder="EX: USD"
                                        value={data.currency}
                                        onChange={(e) =>
                                            setData('currency', e.target.value)
                                        }
                                        className="h-12 w-full"
                                    />

                                    {errors.currency && (
                                        <div className="text-red-500">
                                            {errors.currency}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="mt-8 grid gap-6 md:grid-cols-2">
                                <div className="mt-8 grid w-full gap-3">
                                    <Label htmlFor="primary_color">
                                        Primary Color
                                    </Label>
                                    <Input
                                        type="color"
                                        id="primary_color"
                                        placeholder="EX: #ff0000"
                                        value={data.primary_color}
                                        onChange={(e) =>
                                            setData(
                                                'primary_color',
                                                e.target.value,
                                            )
                                        }
                                        className="h-12 w-full"
                                    />
                                </div>

                                <div className="mt-8 grid w-full gap-3">
                                    <Label htmlFor="secondary_color">
                                        Secondary Color
                                    </Label>
                                    <Input
                                        type="color"
                                        id="secondary_color"
                                        placeholder="EX: #ff0000"
                                        value={data.secondary_color}
                                        onChange={(e) =>
                                            setData(
                                                'secondary_color',
                                                e.target.value,
                                            )
                                        }
                                        className="h-12 w-full"
                                    />
                                </div>
                            </div>

                            <div className="mt-8 grid gap-6 md:grid-cols-2">
                                <div className="mt-8 grid w-full gap-3">
                                    <Label htmlFor="facebook">Facebook</Label>
                                    <Input
                                        type="url"
                                        id="facebook"
                                        placeholder="EX: https://facebook.com"
                                        value={data.facebook}
                                        onChange={(e) =>
                                            setData('facebook', e.target.value)
                                        }
                                        className="h-12 w-full"
                                    />

                                    {errors.facebook && (
                                        <div className="text-red-500">
                                            {errors.facebook}
                                        </div>
                                    )}
                                </div>

                                <div className="mt-8 grid w-full gap-3">
                                    <Label htmlFor="twitter">Twitter</Label>
                                    <Input
                                        type="url"
                                        id="twitter"
                                        placeholder="EX: https://twitter.com"
                                        value={data.twitter}
                                        onChange={(e) =>
                                            setData('twitter', e.target.value)
                                        }
                                        className="h-12 w-full"
                                    />

                                    {errors.twitter && (
                                        <div className="text-red-500">
                                            {errors.twitter}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="mt-8 grid gap-6 md:grid-cols-3">
                                <div className="mt-8 grid w-full gap-3">
                                    <Label htmlFor="instagram">Instagram</Label>
                                    <Input
                                        type="url"
                                        id="instagram"
                                        placeholder="EX: https://instagram.com"
                                        value={data.instagram}
                                        onChange={(e) =>
                                            setData('instagram', e.target.value)
                                        }
                                        className="h-12 w-full"
                                    />

                                    {errors.instagram && (
                                        <div className="text-red-500">
                                            {errors.instagram}
                                        </div>
                                    )}
                                </div>

                                <div className="mt-8 grid w-full gap-3">
                                    <Label htmlFor="linkedin">LinkedIn</Label>
                                    <Input
                                        type="url"
                                        id="linkedin"
                                        placeholder="EX: https://linkedin.com"
                                        value={data.linkedin}
                                        onChange={(e) =>
                                            setData('linkedin', e.target.value)
                                        }
                                        className="h-12 w-full"
                                    />

                                    {errors.linkedin && (
                                        <div className="text-red-500">
                                            {errors.linkedin}
                                        </div>
                                    )}
                                </div>

                                <div className="mt-8 grid w-full gap-3">
                                    <Label htmlFor="youtube">Youtube</Label>
                                    <Input
                                        type="url"
                                        id="youtube"
                                        placeholder="EX: https://youtube.com"
                                        value={data.youtube}
                                        onChange={(e) =>
                                            setData('youtube', e.target.value)
                                        }
                                        className="h-12 w-full"
                                    />

                                    {errors.youtube && (
                                        <div className="text-red-500">
                                            {errors.youtube}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="mt-8 grid gap-6 md:grid-cols-2">
                                <div className="mt-8 grid w-full gap-3">
                                    <Label htmlFor="meta_keywords">
                                        Meta Keywords
                                    </Label>
                                    <Textarea
                                        id="meta_keywords"
                                        placeholder="EX: real estate, property, homes ..."
                                        value={data.meta_keywords}
                                        onChange={(e) =>
                                            setData(
                                                'meta_keywords',
                                                e.target.value,
                                            )
                                        }
                                        className="h-12 w-full"
                                    />

                                    {errors.meta_keywords && (
                                        <div className="text-red-500">
                                            {errors.meta_keywords}
                                        </div>
                                    )}
                                </div>

                                <div className="mt-8 grid w-full gap-3">
                                    <Label htmlFor="meta_description">
                                        Meta Description
                                    </Label>
                                    <Textarea
                                        id="meta_description"
                                        placeholder="EX: Best real estate website ..."
                                        value={data.meta_description}
                                        onChange={(e) =>
                                            setData(
                                                'meta_description',
                                                e.target.value,
                                            )
                                        }
                                        className="h-12 w-full"
                                    />

                                    {errors.meta_description && (
                                        <div className="text-red-500">
                                            {errors.meta_description}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="mt-8 grid gap-6 md:grid-cols-2">
                                <div className="mt-8 grid w-full gap-3">
                                    <Label htmlFor="default_language">
                                        Default Language
                                    </Label>
                                    <Input
                                        type="text"
                                        id="default_language"
                                        placeholder="EX: en"
                                        value={data.default_language}
                                        onChange={(e) =>
                                            setData(
                                                'default_language',
                                                e.target.value,
                                            )
                                        }
                                        className="h-12 w-full"
                                    />

                                    {errors.default_language && (
                                        <div className="text-red-500">
                                            {errors.default_language}
                                        </div>
                                    )}
                                </div>

                                <div className="mt-8 grid w-full gap-3">
                                    <Label htmlFor="google_analytics_id">
                                        Google Analytics ID
                                    </Label>
                                    <Input
                                        type="tel"
                                        id="google_analytics_id"
                                        placeholder="EX: UA-XXXXXXXXX-X"
                                        value={data.google_analytics_id}
                                        onChange={(e) =>
                                            setData(
                                                'google_analytics_id',
                                                e.target.value,
                                            )
                                        }
                                        className="h-12 w-full"
                                    />

                                    {errors.google_analytics_id && (
                                        <div className="text-red-500">
                                            {errors.google_analytics_id}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="mt-8 grid gap-6 md:grid-cols-3">
                                <div className="mt-8 grid w-full gap-3">
                                    <Label htmlFor="smtp_host">SMTP Host</Label>
                                    <Input
                                        type="text"
                                        id="smtp_host"
                                        placeholder="EX: smtp.yourdomain.com"
                                        value={data.smtp_host}
                                        onChange={(e) =>
                                            setData('smtp_host', e.target.value)
                                        }
                                        className="h-12 w-full"
                                    />

                                    {errors.smtp_host && (
                                        <div className="text-red-500">
                                            {errors.smtp_host}
                                        </div>
                                    )}
                                </div>

                                <div className="mt-8 grid w-full gap-3">
                                    <Label htmlFor="smtp_port">SMTP Port</Label>
                                    <Input
                                        type="text"
                                        id="smtp_port"
                                        placeholder="EX: 587"
                                        value={data.smtp_port}
                                        onChange={(e) =>
                                            setData('smtp_port', e.target.value)
                                        }
                                        className="h-12 w-full"
                                    />

                                    {errors.smtp_port && (
                                        <div className="text-red-500">
                                            {errors.smtp_port}
                                        </div>
                                    )}
                                </div>

                                <div className="mt-8 grid w-full gap-3">
                                    <Label htmlFor="smtp_username">
                                        SMTP Username
                                    </Label>
                                    <Input
                                        type="text"
                                        id="smtp_username"
                                        placeholder="EX: user@example.com"
                                        value={data.smtp_username}
                                        onChange={(e) =>
                                            setData(
                                                'smtp_username',
                                                e.target.value,
                                            )
                                        }
                                        className="h-12 w-full"
                                    />

                                    {errors.smtp_username && (
                                        <div className="text-red-500">
                                            {errors.smtp_username}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="mt-8 grid gap-6 md:grid-cols-2">
                                <div className="mt-8 grid w-full gap-3">
                                    <Label htmlFor="smtp_password">
                                        SMTP Password
                                    </Label>
                                    <Input
                                        type="password"
                                        id="smtp_password"
                                        placeholder="EX: yourpassword"
                                        value={data.smtp_password}
                                        onChange={(e) =>
                                            setData(
                                                'smtp_password',
                                                e.target.value,
                                            )
                                        }
                                        className="h-12 w-full"
                                    />

                                    {errors.smtp_password && (
                                        <div className="text-red-500">
                                            {errors.smtp_password}
                                        </div>
                                    )}
                                </div>

                                <div className="mt-8 grid w-full gap-3">
                                    <Label htmlFor="smtp_encryption">
                                        SMTP Encryption
                                    </Label>
                                    <Input
                                        type="text"
                                        id="smtp_encryption"
                                        placeholder="EX: tls"
                                        value={data.smtp_encryption}
                                        onChange={(e) =>
                                            setData(
                                                'smtp_encryption',
                                                e.target.value,
                                            )
                                        }
                                        className="h-12 w-full"
                                    />

                                    {errors.smtp_encryption && (
                                        <div className="text-red-500">
                                            {errors.smtp_encryption}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="mt-8 grid gap-6 md:grid-cols-5">
                                <div className="mt-8 grid w-full gap-3">
                                    <div className="flex items-center space-x-2 rounded-md border p-4">
                                        <Switch
                                            id="maintenance_mode"
                                            checked={data.maintenance_mode}
                                            onCheckedChange={(value) =>
                                                setData(
                                                    'maintenance_mode',
                                                    value,
                                                )
                                            }
                                        />
                                        <Label htmlFor="maintenance_mode">
                                            Maintenance Mode
                                        </Label>
                                    </div>
                                </div>

                                <div className="mt-8 grid w-full gap-3">
                                    <div className="flex items-center space-x-2 rounded-md border p-4">
                                        <Switch
                                            id="enable_registration"
                                            checked={data.enable_registration}
                                            onCheckedChange={(value) =>
                                                setData(
                                                    'enable_registration',
                                                    value,
                                                )
                                            }
                                        />
                                        <Label htmlFor="enable_registration">
                                            Enable Registration
                                        </Label>
                                    </div>
                                </div>

                                <div className="mt-8 grid w-full gap-3">
                                    <div className="flex items-center space-x-2 rounded-md border p-4">
                                        <Switch
                                            id="enable_email_verification"
                                            checked={
                                                data.enable_email_verification
                                            }
                                            onCheckedChange={(value) =>
                                                setData(
                                                    'enable_email_verification',
                                                    value,
                                                )
                                            }
                                        />
                                        <Label htmlFor="enable_email_verification">
                                            Enable Email Verification
                                        </Label>
                                    </div>
                                </div>

                                <div className="mt-8 grid w-full gap-3">
                                    <div className="flex items-center space-x-2 rounded-md border p-4">
                                        <Switch
                                            id="enable_kyc"
                                            checked={data.enable_kyc}
                                            onCheckedChange={(value) =>
                                                setData('enable_kyc', value)
                                            }
                                        />
                                        <Label htmlFor="enable_kyc">
                                            Enable KYC
                                        </Label>
                                    </div>
                                </div>

                                <div className="mt-8 grid w-full gap-3">
                                    <div className="flex items-center space-x-2 rounded-md border p-4">
                                        <Switch
                                            id="allow_welcome_message"
                                            checked={data.allow_welcome_message}
                                            onCheckedChange={(value) =>
                                                setData(
                                                    'allow_welcome_message',
                                                    value,
                                                )
                                            }
                                        />
                                        <Label htmlFor="allow_welcome_message">
                                            Enable Welcome Message
                                        </Label>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 text-sm text-gray-500 italic dark:text-gray-400">
                                Last Updated :{' '}
                                {new Date(site.updated_at).toLocaleDateString()}
                            </div>

                            <Button
                                type="submit"
                                disabled={processing}
                                variant="secondary"
                                size="lg"
                                className="mt-10 h-12 w-full bg-amber-400 text-black hover:bg-amber-500 focus:ring-4 focus:ring-amber-300 dark:focus:ring-amber-900"
                            >
                                {processing && (
                                    <LoaderCircle className="h-4 w-4 animate-spin" />
                                )}
                                Save Changes
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
function route(arg0: string): string {
    throw new Error('Function not implemented.');
}
