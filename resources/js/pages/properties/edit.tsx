import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
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
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm, usePage } from '@inertiajs/react';

import { LoaderCircle, Upload, X } from 'lucide-react';
import * as React from 'react';
// import { toast } from "sonner";

import {
    FileUpload,
    FileUploadDropzone,
    FileUploadItem,
    FileUploadItemDelete,
    FileUploadItemMetadata,
    FileUploadItemPreview,
    FileUploadItemProgress,
    FileUploadList,
    FileUploadTrigger,
} from '@/components/ui/file-upload';
import { useRoute } from 'ziggy-js';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Edit Property',
        href: '#',
    },
];

export default function EditProperty() {
    const property: any = usePage().props.property || [];
    const route = useRoute();
    const { data, setData, post, processing, errors, progress } = useForm({
        package: property.package || '',
        id: property.id || '',
        title: property.title || '',
        type: property.type || '',
        category: property.category || '',
        country: property.country || '',
        state: property.state || '',
        city: property.city || '',
        address: property.address || '',
        longitude: property.longitude || '',
        latitude: property.latitude || '',
        price: property.price || '',
        currency: property.currency || '',

        bedrooms: property.bedrooms || '',
        bathrooms: property.bathrooms || '',
        garage: property.garage || '',
        floor: property.floor || '',
        size: property.size || '',
        basketballCourt: property.basketballCourt || false,
        gym: property.gym || false,
        swimmingPool: property.swimmingPoo || false,
        washerDryer: property.washerDryer || false,
        noSmokeZone: property.noSmokeZone || false,
        wheelChairFriendly: property.wheelChairFriendly || false,
        parkingSpace: property.parkingSpace || false,
        airConditioned: property.airConditioned || false,
        petFriendly: property.petFriendly || false,
        Internet: property.internet || false,
        Water: property.water || false,
        video: property.video || '',
        description: property.description || '',
        thumbnail: null,
        images: [],
    });

    const onFileChange = (newFiles: File[]) => {
        setData('images', newFiles); // bind to inertia form
    };

    const onFileReject = React.useCallback((file: File, message: string) => {
        toast(message, {
            description: `"${file.name.length > 20 ? `${file.name.slice(0, 20)}...` : file.name}" has been rejected`,
        });
    }, []);

    const onFileReject3 = React.useCallback((file: File, message: string) => {
        toast(message, {
            description: `"${file.name.length > 20 ? `${file.name.slice(0, 20)}...` : file.name}" has been rejected`,
        });
    }, []);

    function submit(e: any) {
        e.preventDefault();
        post(route('update.property'), {
            forceFormData: true,
        });
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Property" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <div className="mx-auto my-10 w-3/4">
                        <form
                            onSubmit={submit}
                            className="space-y-6"
                            encType="multipart/form-data"
                        >
                            <h2>Property Information :</h2>

                            <Input
                                type="hidden"
                                name="id"
                                id="id"
                                value={data.id}
                            />
                            <div className="grid w-full items-center gap-3">
                                <Label htmlFor="package">
                                    Package Name{' '}
                                    <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    type="text"
                                    id="package"
                                    placeholder="Package Name"
                                    value={data.package}
                                    onChange={(e) =>
                                        setData('package', e.target.value)
                                    }
                                    className="h-12 w-full"
                                />

                                {errors.package && (
                                    <div className="text-red-500">
                                        {errors.package}
                                    </div>
                                )}
                            </div>

                            <div className="mt-8 grid gap-6 md:grid-cols-3">
                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="title">
                                        Property Title{' '}
                                        <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        type="text"
                                        id="title"
                                        placeholder="Property Title"
                                        className="h-12 w-full"
                                        value={data.title}
                                        onChange={(e) =>
                                            setData('title', e.target.value)
                                        }
                                    />
                                    {errors.title && (
                                        <div className="text-red-500">
                                            {errors.title}
                                        </div>
                                    )}
                                </div>

                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="type">
                                        Property Type{' '}
                                        <span className="text-red-500">*</span>
                                    </Label>
                                    <Select
                                        value={data.type}
                                        onValueChange={(value) =>
                                            setData('type', value)
                                        }
                                    >
                                        <SelectTrigger className="h-12 w-full">
                                            <SelectValue placeholder="Property Type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>
                                                    Select Property Type
                                                </SelectLabel>
                                                <SelectItem value="Sale">
                                                    Sale
                                                </SelectItem>
                                                <SelectItem value="Rent">
                                                    Rent
                                                </SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    {errors.type && (
                                        <div className="text-red-500">
                                            {errors.type}
                                        </div>
                                    )}
                                </div>

                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="category">
                                        Category{' '}
                                        <span className="text-red-500">
                                            *
                                        </span>{' '}
                                    </Label>
                                    <Select
                                        value={data.category}
                                        onValueChange={(value) =>
                                            setData('category', value)
                                        }
                                    >
                                        <SelectTrigger className="h-12 w-full">
                                            <SelectValue placeholder="Category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>
                                                    Select Category
                                                </SelectLabel>
                                                <SelectItem value="residential">
                                                    Residential
                                                </SelectItem>
                                                <SelectItem value="commercial">
                                                    Commercial
                                                </SelectItem>
                                                <SelectItem value="land">
                                                    Land
                                                </SelectItem>
                                                <SelectItem value="other">
                                                    Other
                                                </SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    {errors.category && (
                                        <div className="text-red-500">
                                            {errors.category}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="mt-8 grid gap-6 md:grid-cols-3">
                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="country">
                                        Country{' '}
                                        <span className="text-red-500">
                                            *
                                        </span>{' '}
                                    </Label>
                                    <Select
                                        value={data.country}
                                        onValueChange={(value) =>
                                            setData('country', value)
                                        }
                                    >
                                        <SelectTrigger className="h-12 w-full">
                                            <SelectValue placeholder="Country" />
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
                                    <Label htmlFor="state">
                                        State{' '}
                                        <span className="text-red-500">
                                            *
                                        </span>{' '}
                                    </Label>
                                    <Select
                                        value={data.state}
                                        onValueChange={(value) =>
                                            setData('state', value)
                                        }
                                    >
                                        <SelectTrigger className="h-12 w-full">
                                            <SelectValue placeholder="State" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>
                                                    Select State
                                                </SelectLabel>
                                                <SelectItem value="Enugu">
                                                    Enugu
                                                </SelectItem>
                                                <SelectItem value="Lagos">
                                                    Lagos
                                                </SelectItem>
                                                <SelectItem value="oyo">
                                                    Oyo
                                                </SelectItem>
                                                <SelectItem value="Akwa ibom">
                                                    Akwa Ibom
                                                </SelectItem>
                                                <SelectItem value="kaduna">
                                                    Kaduna
                                                </SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    {errors.state && (
                                        <div className="text-red-500">
                                            {errors.state}
                                        </div>
                                    )}
                                </div>

                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="city">
                                        City{' '}
                                        <span className="text-red-500">
                                            *
                                        </span>{' '}
                                    </Label>
                                    <Select
                                        value={data.city}
                                        onValueChange={(value) =>
                                            setData('city', value)
                                        }
                                    >
                                        <SelectTrigger className="h-12 w-full">
                                            <SelectValue placeholder="City" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>
                                                    Select City
                                                </SelectLabel>
                                                <SelectItem value="Enugu">
                                                    Enugu
                                                </SelectItem>
                                                <SelectItem value="Ikeja">
                                                    Ikeja
                                                </SelectItem>
                                                <SelectItem value="ibadan">
                                                    Ibadan
                                                </SelectItem>
                                                <SelectItem value="akwa ibom">
                                                    Akwa Ibom
                                                </SelectItem>
                                                <SelectItem value="kaduna">
                                                    Kaduna
                                                </SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    {errors.city && (
                                        <div className="text-red-500">
                                            {errors.city}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="mt-8 grid w-full items-center gap-3">
                                <Label htmlFor="address">
                                    Address{' '}
                                    <span className="text-red-500">*</span>{' '}
                                </Label>
                                <Input
                                    type="text"
                                    id="address"
                                    placeholder="Enter Address"
                                    className="h-12 w-full"
                                    value={data.address}
                                    onChange={(e) =>
                                        setData('address', e.target.value)
                                    }
                                />
                                {errors.address && (
                                    <div className="text-red-500">
                                        {errors.address}
                                    </div>
                                )}
                            </div>

                            <div className="mt-8 grid gap-6 md:grid-cols-2">
                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="longitude">Longitude</Label>
                                    <Input
                                        type="text"
                                        id="longitude"
                                        placeholder="Ex:7.490572"
                                        className="h-12 w-full"
                                        value={data.longitude}
                                        onChange={(e) =>
                                            setData('longitude', e.target.value)
                                        }
                                    />
                                    {errors.longitude && (
                                        <div className="text-red-500">
                                            {errors.longitude}
                                        </div>
                                    )}
                                </div>

                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="latitude">Latitude</Label>
                                    <Input
                                        type="text"
                                        id="latitude"
                                        placeholder="Ex:103.812530"
                                        className="h-12 w-full"
                                        value={data.latitude}
                                        onChange={(e) =>
                                            setData('latitude', e.target.value)
                                        }
                                    />
                                    {errors.latitude && (
                                        <div className="text-red-500">
                                            {errors.latitude}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="mt-8 grid gap-6 md:grid-cols-2">
                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="price">
                                        Property Price{' '}
                                        <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        type="number"
                                        id="price"
                                        placeholder="Ex: 2500000"
                                        className="h-12 w-full"
                                        value={data.price}
                                        onChange={(e) =>
                                            setData('price', e.target.value)
                                        }
                                    />
                                    {errors.price && (
                                        <div className="text-red-500">
                                            {errors.price}
                                        </div>
                                    )}
                                </div>

                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="currency">
                                        Currency{' '}
                                        <span className="text-red-500">*</span>
                                    </Label>
                                    <Select
                                        value={data.currency}
                                        onValueChange={(value) =>
                                            setData('currency', value)
                                        }
                                    >
                                        <SelectTrigger className="h-12 w-full">
                                            <SelectValue placeholder="Currency" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>
                                                    Select Currency
                                                </SelectLabel>
                                                <SelectItem value="usd">
                                                    USD
                                                </SelectItem>
                                                <SelectItem value="eur">
                                                    EUR
                                                </SelectItem>
                                                <SelectItem value="ngn">
                                                    NGN
                                                </SelectItem>
                                                <SelectItem value="rand">
                                                    Rand
                                                </SelectItem>
                                                <SelectItem value="pound">
                                                    Pound
                                                </SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    {errors.currency && (
                                        <div className="text-red-500">
                                            {errors.currency}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Property Details */}
                            <h2>Property Details :</h2>
                            <div className="mt-8 grid gap-6 md:grid-cols-2">
                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="bedrooms">
                                        Number Of Bedroom
                                    </Label>
                                    <Input
                                        type="number"
                                        id="bedrooms"
                                        placeholder="Ex: 4"
                                        className="h-12 w-full"
                                        value={data.bedrooms}
                                        onChange={(e) =>
                                            setData('bedrooms', e.target.value)
                                        }
                                    />
                                    {errors.bedrooms && (
                                        <div className="text-red-500">
                                            {errors.bedrooms}
                                        </div>
                                    )}
                                </div>

                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="bathrooms">
                                        Number Of Bathrooms
                                    </Label>
                                    <Input
                                        type="number"
                                        id="bathrooms"
                                        placeholder="Ex: 3"
                                        className="h-12 w-full"
                                        value={data.bathrooms}
                                        onChange={(e) =>
                                            setData('bathrooms', e.target.value)
                                        }
                                    />
                                    {errors.bathrooms && (
                                        <div className="text-red-500">
                                            {errors.bathrooms}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="mt-8 grid gap-6 md:grid-cols-3">
                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="garage">
                                        Number Of Garage
                                    </Label>
                                    <Input
                                        type="number"
                                        id="garage"
                                        placeholder="Ex: 2"
                                        className="h-12 w-full"
                                        value={data.garage}
                                        onChange={(e) =>
                                            setData('garage', e.target.value)
                                        }
                                    />
                                </div>

                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="floor">Select Floor</Label>
                                    <Select
                                        value={data.floor}
                                        onValueChange={(value) =>
                                            setData('floor', value)
                                        }
                                    >
                                        <SelectTrigger className="h-12 w-full">
                                            <SelectValue placeholder="Floor" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>
                                                    Select Floor
                                                </SelectLabel>
                                                <SelectItem value="First Floor">
                                                    First Floor
                                                </SelectItem>
                                                <SelectItem value="Second Floor">
                                                    Second Floor
                                                </SelectItem>
                                                <SelectItem value="Third Floor">
                                                    Third Floor
                                                </SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    {errors.floor && (
                                        <div className="text-red-500">
                                            {errors.floor}
                                        </div>
                                    )}
                                </div>

                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="size">
                                        Size of Room in Sqft
                                    </Label>
                                    <Input
                                        type="number"
                                        id="size"
                                        placeholder="Ex: 1200"
                                        className="h-12 w-full"
                                        value={data.size}
                                        onChange={(e) =>
                                            setData('size', e.target.value)
                                        }
                                    />
                                    {errors.size && (
                                        <div className="text-red-500">
                                            {errors.size}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="mt-8 grid grid-cols-2 gap-2 md:grid-cols-9">
                                <Label className="flex items-start gap-3 rounded-lg border p-3 hover:bg-accent/50 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
                                    <Checkbox
                                        id="toggle-2"
                                        checked={
                                            data.basketballCourt ===
                                            'Basketball Court'
                                        }
                                        onCheckedChange={(checked) =>
                                            setData(
                                                'basketballCourt',
                                                checked
                                                    ? 'Basketball Court'
                                                    : '',
                                            )
                                        }
                                        value="Basketball Court"
                                        className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                                    />
                                    <div className="grid gap-1.5 font-normal">
                                        <p className="text-sm leading-none font-medium">
                                            Basketball court
                                        </p>
                                    </div>
                                </Label>

                                {/*  */}
                                <Label className="flex items-start gap-3 rounded-lg border p-3 hover:bg-accent/50 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
                                    <Checkbox
                                        id="toggle-3"
                                        checked={data.gym === 'Gym'}
                                        onCheckedChange={(checked) =>
                                            setData('gym', checked ? 'Gym' : '')
                                        }
                                        value="Gym"
                                        className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                                    />
                                    <div className="grid gap-1.5 font-normal">
                                        <p className="text-sm leading-none font-medium">
                                            Gym
                                        </p>
                                    </div>
                                </Label>

                                <Label className="flex items-start gap-3 rounded-lg border p-3 hover:bg-accent/50 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
                                    <Checkbox
                                        id="toggle-4"
                                        checked={
                                            data.swimmingPool ===
                                            'Swimming Pool'
                                        }
                                        onCheckedChange={(checked) =>
                                            setData(
                                                'swimmingPool',
                                                checked ? 'Swimming Pool' : '',
                                            )
                                        }
                                        value="Swimming Pool"
                                        className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                                    />
                                    <div className="grid gap-1.5 font-normal">
                                        <p className="text-sm leading-none font-medium">
                                            Swimming Pool
                                        </p>
                                    </div>
                                </Label>

                                <Label className="flex items-start gap-3 rounded-lg border p-3 hover:bg-accent/50 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
                                    <Checkbox
                                        id="toggle-5"
                                        checked={
                                            data.washerDryer ===
                                            'Washer And Dryer'
                                        }
                                        onCheckedChange={(checked) =>
                                            setData(
                                                'washerDryer',
                                                checked
                                                    ? 'Washer And Dryer'
                                                    : '',
                                            )
                                        }
                                        value="Washer And Dryer"
                                        className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                                    />
                                    <div className="grid gap-1.5 font-normal">
                                        <p className="text-sm leading-none font-medium">
                                            Washer And Dryer
                                        </p>
                                    </div>
                                </Label>

                                <Label className="flex items-start gap-3 rounded-lg border p-3 hover:bg-accent/50 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
                                    <Checkbox
                                        id="toggle-6"
                                        checked={
                                            data.noSmokeZone === 'No Smoke Zone'
                                        }
                                        onCheckedChange={(checked) =>
                                            setData(
                                                'noSmokeZone',
                                                checked ? 'No Smoke Zone' : '',
                                            )
                                        }
                                        value="No Smoke Zone"
                                        className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                                    />
                                    <div className="grid gap-1.5 font-normal">
                                        <p className="text-sm leading-none font-medium">
                                            No Smoke Zone
                                        </p>
                                    </div>
                                </Label>

                                <Label className="flex items-start gap-3 rounded-lg border p-3 hover:bg-accent/50 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
                                    <Checkbox
                                        id="toggle-7"
                                        checked={
                                            data.wheelChairFriendly ===
                                            'WheelChair Friendly'
                                        }
                                        onCheckedChange={(checked) =>
                                            setData(
                                                'wheelChairFriendly',
                                                checked
                                                    ? 'WheelChair Friendly'
                                                    : '',
                                            )
                                        }
                                        value="WheelChair Friendly"
                                        className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                                    />
                                    <div className="grid gap-1.5 font-normal">
                                        <p className="text-sm leading-none font-medium">
                                            WheelChair Friendly
                                        </p>
                                    </div>
                                </Label>

                                <Label className="flex items-start gap-3 rounded-lg border p-3 hover:bg-accent/50 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
                                    <Checkbox
                                        id="toggle-7"
                                        checked={
                                            data.parkingSpace ===
                                            'Parking Space'
                                        }
                                        onCheckedChange={(checked) =>
                                            setData(
                                                'parkingSpace',
                                                checked ? 'Parking Space' : '',
                                            )
                                        }
                                        value="Parking Space"
                                        className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                                    />
                                    <div className="grid gap-1.5 font-normal">
                                        <p className="text-sm leading-none font-medium">
                                            Parking Space
                                        </p>
                                    </div>
                                </Label>

                                <Label className="flex items-start gap-3 rounded-lg border p-3 hover:bg-accent/50 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
                                    <Checkbox
                                        id="toggle-2"
                                        checked={
                                            data.airConditioned ===
                                            'Air Conditioned'
                                        }
                                        onCheckedChange={(checked) =>
                                            setData(
                                                'airConditioned',
                                                checked
                                                    ? 'Air Conditioned'
                                                    : '',
                                            )
                                        }
                                        value="Air Conditioned"
                                        className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                                    />
                                    <div className="grid gap-1.5 font-normal">
                                        <p className="text-sm leading-none font-medium">
                                            Air Conditioned
                                        </p>
                                    </div>
                                </Label>

                                <Label className="flex items-start gap-3 rounded-lg border p-3 hover:bg-accent/50 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
                                    <Checkbox
                                        id="toggle-2"
                                        checked={
                                            data.petFriendly === 'Pet Friendly'
                                        }
                                        onCheckedChange={(checked) =>
                                            setData(
                                                'petFriendly',
                                                checked ? 'Pet Friendly' : '',
                                            )
                                        }
                                        value="Pet Friendly"
                                        className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                                    />
                                    <div className="grid gap-1.5 font-normal">
                                        <p className="text-sm leading-none font-medium">
                                            Pet Friendly
                                        </p>
                                    </div>
                                </Label>

                                <Label className="flex items-start gap-3 rounded-lg border p-3 hover:bg-accent/50 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
                                    <Checkbox
                                        id="toggle-2"
                                        checked={data.Internet === 'Internet'}
                                        onCheckedChange={(checked) =>
                                            setData(
                                                'Internet',
                                                checked ? 'Internet' : '',
                                            )
                                        }
                                        value="Internet"
                                        className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                                    />
                                    <div className="grid gap-1.5 font-normal">
                                        <p className="text-sm leading-none font-medium">
                                            Internet
                                        </p>
                                    </div>
                                </Label>

                                <Label className="flex items-start gap-3 rounded-lg border p-3 hover:bg-accent/50 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
                                    <Checkbox
                                        id="toggle-2"
                                        checked={data.Water === 'Water'}
                                        onCheckedChange={(checked) =>
                                            setData(
                                                'Water',
                                                checked ? 'Water' : '',
                                            )
                                        }
                                        value="Water"
                                        className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                                    />
                                    <div className="grid gap-1.5 font-normal">
                                        <p className="text-sm leading-none font-medium">
                                            Water
                                        </p>
                                    </div>
                                </Label>
                            </div>

                            <div className="mt-8 grid w-full items-center gap-3">
                                <Label htmlFor="video">
                                    Property Video Link
                                </Label>
                                <Input
                                    type="url"
                                    id="video"
                                    placeholder="Ex: https://www.youtube.com/watch?v=abc123"
                                    className="h-12 w-full"
                                    value={data.video}
                                    onChange={(e) =>
                                        setData('video', e.target.value)
                                    }
                                />
                                {errors.video && (
                                    <div className="text-red-500">
                                        {errors.video}
                                    </div>
                                )}
                            </div>

                            <div className="mt-8 grid w-full gap-3">
                                <Label htmlFor="message">Description</Label>
                                <Textarea
                                    placeholder="Type your message here."
                                    id="message"
                                    value={data.description}
                                    onChange={(e) =>
                                        setData('description', e.target.value)
                                    }
                                />
                                {errors.description && (
                                    <div className="text-red-500">
                                        {errors.description}
                                    </div>
                                )}
                            </div>

                            <div className="mt-8 grid w-full items-center gap-3">
                                <Label htmlFor="thumbnail">
                                    Property Thumbnail
                                </Label>
                                <Input
                                    type="file"
                                    id="thumbnail"
                                    placeholder="Thumbnail"
                                    className="h-12 w-full"
                                    onChange={(e) =>
                                        setData('thumbnail', e.target.files[0])
                                    }
                                />
                                {progress && (
                                    <progress
                                        value={progress.percentage}
                                        max="100"
                                    >
                                        {progress.percentage}%
                                    </progress>
                                )}
                                {errors.thumbnail && (
                                    <div className="text-red-500">
                                        {errors.thumbnail}
                                    </div>
                                )}
                            </div>

                            {/* <div className="mt-8 grid w-full items-center gap-3">
                                <Label htmlFor="images">
                                    Gallery
                                </Label>
                                <Input
                                    type="file"
                                    id="images"
                                    placeholder="Gallery"
                                    className="h-12 w-full"
                                    multiple
                                    onChange={(e) =>
                                        setData('images', e.target.files)
                                    }
                                />
                                {progress && (
                                    <progress
                                        value={progress.percentage}
                                        max="100"
                                    >
                                        {progress.percentage}%
                                    </progress>
                                )}
                            </div> */}
                            <FileUpload
                                value={data.images}
                                onValueChange={onFileChange}
                                maxFiles={10}
                                maxSize={5 * 1024 * 1024}
                                className="w-full"
                                onFileReject={onFileReject}
                                multiple
                            >
                                <FileUploadDropzone className="w-full">
                                    <div className="flex flex-col items-center gap-1 text-center">
                                        <div className="flex items-center justify-center rounded-full border p-2.5">
                                            <Upload className="size-6 text-muted-foreground" />
                                        </div>
                                        <p className="text-sm font-medium">
                                            Drag & drop files here
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            Or click to browse (max 10 files, up
                                            to 5MB each)
                                        </p>
                                    </div>
                                    <FileUploadTrigger asChild>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="mt-2 w-fit"
                                        >
                                            Browse files
                                        </Button>
                                    </FileUploadTrigger>
                                </FileUploadDropzone>

                                <FileUploadList orientation="horizontal">
                                    {data.images.map((file, index) => (
                                        <FileUploadItem
                                            key={index}
                                            value={file}
                                            className="p-0"
                                        >
                                            <FileUploadItemPreview className="size-20">
                                                {/* Show Inertia's progress if available */}
                                                {progress ? (
                                                    <FileUploadItemProgress
                                                        variant="fill"
                                                        style={{
                                                            width: `${progress.percentage}%`,
                                                        }}
                                                    />
                                                ) : (
                                                    <FileUploadItemProgress variant="fill" />
                                                )}
                                            </FileUploadItemPreview>
                                            <FileUploadItemMetadata className="sr-only" />
                                            <FileUploadItemDelete asChild>
                                                <Button
                                                    type="button"
                                                    variant="secondary"
                                                    size="icon"
                                                    className="absolute -top-1 -right-1 size-5 rounded-full"
                                                    onClick={() => {
                                                        setData(
                                                            'images',
                                                            data.images.filter(
                                                                (_, i) =>
                                                                    i !== index,
                                                            ),
                                                        );
                                                    }}
                                                >
                                                    <X className="size-3" />
                                                </Button>
                                            </FileUploadItemDelete>
                                        </FileUploadItem>
                                    ))}
                                </FileUploadList>
                            </FileUpload>

                            {progress && (
                                <progress value={progress.percentage} max="100">
                                    {progress.percentage}%
                                </progress>
                            )}

                            {errors.images && (
                                <p className="text-sm text-red-500">
                                    {errors.images}
                                </p>
                            )}

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
                                Edit Property
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
