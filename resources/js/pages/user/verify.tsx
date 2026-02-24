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
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import * as React from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Verify',
        href: dashboard().url,
    },
];

export default function Verify() {
    const { data, setData, post, processing, errors, progress } = useForm({
        country: '',
        fullname: '',
        documentnumber: '',
        expiry: '',
        backimg: null,
        frontimg: null,
        documenttype: '',
    });

    const onFileChange = (newFiles: File[]) => {
        setData('images', newFiles); // bind to inertia form
    };

    const onFileReject = React.useCallback((file: File, message: string) => {
        toast(message, {
            description: `"${file.name.length > 20 ? `${file.name.slice(0, 20)}...` : file.name}" has been rejected`,
        });
    }, []);

    function submit(e: any) {
        e.preventDefault();
        post('/verify');
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Verify Messages" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <div className="mx-auto my-10 w-3/4">
                        <div className="space-y-6">
                            <header className="mb-6 text-center">
                                <h1 className="text-2xl font-semibold">
                                    Verify Your Identity
                                </h1>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Choose a document type below and upload a
                                    clear photo. We’ll review your submission
                                    within 24–48 hours.
                                </p>
                            </header>

                            <form
                                className="grid grid-cols-1 gap-6 md:grid-cols-3"
                                onSubmit={submit}
                                encType=""
                            >
                                {/* Left: Document type */}
                                <fieldset className="rounded-lg border border-sidebar-border/70 bg-card p-4 md:col-span-1">
                                    <legend className="mb-3 text-sm font-medium">
                                        Select document type
                                    </legend>
                                    <div className="space-y-3">
                                        <label className="flex items-center gap-3 rounded-lg border p-3 hover:bg-muted">
                                            <input
                                                type="radio"
                                                name="documenttype"
                                                value="passport"
                                                onChange={(e) =>
                                                    setData(
                                                        'documenttype',
                                                        e.target.value,
                                                    )
                                                }
                                                defaultChecked
                                                className="h-4 w-4 accent-primary"
                                            />
                                            <div className="flex flex-col">
                                                <span className="font-medium">
                                                    Passport
                                                </span>
                                                <span className="text-xs text-muted-foreground">
                                                    International ID, preferred
                                                    for travel
                                                </span>
                                            </div>
                                        </label>

                                        <label className="flex items-center gap-3 rounded-lg border p-3 hover:bg-muted">
                                            <input
                                                type="radio"
                                                name="documenttype"
                                                value="drivers_license"
                                                onChange={(e) =>
                                                    setData(
                                                        'documenttype',
                                                        e.target.value,
                                                    )
                                                }
                                                className="h-4 w-4 accent-primary"
                                            />
                                            <div className="flex flex-col">
                                                <span className="font-medium">
                                                    Driver's License
                                                </span>
                                                <span className="text-xs text-muted-foreground">
                                                    Accepted in most countries
                                                </span>
                                            </div>
                                        </label>

                                        <label className="flex items-center gap-3 rounded-lg border p-3 hover:bg-muted">
                                            <input
                                                type="radio"
                                                name="documenttype"
                                                value="national_id"
                                                onChange={(e) =>
                                                    setData(
                                                        'documenttype',
                                                        e.target.value,
                                                    )
                                                }
                                                className="h-4 w-4 accent-primary"
                                            />
                                            <div className="flex flex-col">
                                                <span className="font-medium">
                                                    National ID
                                                </span>
                                                <span className="text-xs text-muted-foreground">
                                                    Government issued identity
                                                    card
                                                </span>
                                            </div>
                                        </label>

                                        <label className="flex items-center gap-3 rounded-lg border p-3 hover:bg-muted">
                                            <input
                                                type="radio"
                                                name="documenttype"
                                                value="utility_bill"
                                                onChange={(e) =>
                                                    setData(
                                                        'documenttype',
                                                        e.target.value,
                                                    )
                                                }
                                                className="h-4 w-4 accent-primary"
                                            />
                                            <div className="flex flex-col">
                                                <span className="font-medium">
                                                    Proof of Address (utility
                                                    bill)
                                                </span>
                                                <span className="text-xs text-muted-foreground">
                                                    Only for address
                                                    verification
                                                </span>
                                            </div>
                                        </label>
                                    </div>
                                </fieldset>

                                {/* Right: Form fields */}
                                <div className="rounded-lg border border-sidebar-border/70 bg-card p-6 md:col-span-2">
                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <div className="grid w-full items-center gap-3">
                                            <Label htmlFor="package">
                                                Full Name{' '}
                                                <span className="text-red-500">
                                                    *
                                                </span>
                                            </Label>
                                            <Input
                                                type="text"
                                                id="fullName"
                                                placeholder="Full Name"
                                                value={data.fullname}
                                                onChange={(e) =>
                                                    setData(
                                                        'fullname',
                                                        e.target.value,
                                                    )
                                                }
                                                className="h-12 w-full"
                                            />

                                            {errors.fullname && (
                                                <div className="text-red-500">
                                                    {errors.fullname}
                                                </div>
                                            )}
                                        </div>

                                        <div className="grid w-full items-center gap-3">
                                            <Label htmlFor="package">
                                                Document Number{' '}
                                                <span className="text-red-500">
                                                    *
                                                </span>
                                            </Label>
                                            <Input
                                                type="text"
                                                id="documentnumber"
                                                placeholder="Document Number"
                                                value={data.documentnumber}
                                                onChange={(e) =>
                                                    setData(
                                                        'documentnumber',
                                                        e.target.value,
                                                    )
                                                }
                                                className="h-12 w-full"
                                            />

                                            {errors.documentnumber && (
                                                <div className="text-red-500">
                                                    {errors.documentnumber}
                                                </div>
                                            )}
                                        </div>

                                        <div className="grid w-full items-center gap-3">
                                            <Label htmlFor="country">
                                                Issuing Country{' '}
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
                                                            Bosnia and
                                                            Herzegovina
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
                                                            Central African
                                                            Republic
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
                                                            Saint Kitts and
                                                            Nevis
                                                        </SelectItem>
                                                        <SelectItem value="saintlucia">
                                                            Saint Lucia
                                                        </SelectItem>
                                                        <SelectItem value="saintvincentandthegrenadines">
                                                            Saint Vincent and
                                                            the Grenadines
                                                        </SelectItem>
                                                        <SelectItem value="samoa">
                                                            Samoa
                                                        </SelectItem>
                                                        <SelectItem value="sanmarino">
                                                            San Marino
                                                        </SelectItem>
                                                        <SelectItem value="saotomeandprincipe">
                                                            Sao Tome and
                                                            Principe
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
                                            <Label htmlFor="package">
                                                Expiry Date{' '}
                                                <span className="text-red-500">
                                                    *
                                                </span>
                                            </Label>
                                            <Input
                                                type="date"
                                                id="expiry"
                                                placeholder="Expiry Date"
                                                value={data.expiry}
                                                onChange={(e) =>
                                                    setData(
                                                        'expiry',
                                                        e.target.value,
                                                    )
                                                }
                                                className="h-12 w-full"
                                            />

                                            {errors.expiry && (
                                                <div className="text-red-500">
                                                    {errors.expiry}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="mt-8 grid w-full items-center gap-3">
                                        <Label htmlFor="frontimg">
                                            Front of Document{' '}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </Label>
                                        <Input
                                            type="file"
                                            id="frontimg"
                                            placeholder="Thumbnail"
                                            className="h-12 w-full"
                                            onChange={(e) =>
                                                setData(
                                                    'frontimg',
                                                    e.target.files[0],
                                                )
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
                                        {errors.frontimg && (
                                            <div className="text-red-500">
                                                {errors.frontimg}
                                            </div>
                                        )}
                                    </div>

                                    <div className="mt-8 grid w-full items-center gap-3">
                                        <Label htmlFor="backimg">
                                            Back of Document{' '}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </Label>
                                        <Input
                                            type="file"
                                            id="backimg"
                                            placeholder="Thumbnail"
                                            className="h-12 w-full"
                                            onChange={(e) =>
                                                setData(
                                                    'backimg',
                                                    e.target.files[0],
                                                )
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
                                        {errors.backimg && (
                                            <div className="text-red-500">
                                                {errors.backimg}
                                            </div>
                                        )}
                                    </div>

                                    <div className="mt-6 flex items-center justify-end gap-3">
                                        <button
                                            type="reset"
                                            className="rounded-md border px-4 py-2 text-sm hover:bg-muted"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="rounded-md bg-primary px-5 py-2 text-sm font-medium text-white shadow-sm hover:brightness-95"
                                        >
                                            Submit for verification
                                        </button>
                                    </div>

                                    <p className="mt-4 text-xs text-muted-foreground">
                                        By submitting, you agree to our privacy
                                        policy. We'll only use these documents
                                        to verify your identity.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
