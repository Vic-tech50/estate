import { useState } from "react";
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
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';

import * as TagsInput from "@diceui/tags-input";
import { RefreshCcw, X } from "lucide-react";
import * as React from "react";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Add Property',
        href: '#',
    },
];

export default function AddProperty() {
    const { data, setData, post, processing, errors, progress } = useForm({
        country: '',
        states: [] as string[],
        cities: [] as string[],
    });

    const [tricks, setTricks] = React.useState<string[]>([]);
 

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post('/location');
    }



    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Add Property" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <div className="mx-auto my-10 w-3/4">
                        <form onSubmit={submit} className="space-y-6">

                            
                          

                           
                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="country">Country  </Label>
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
                                    {errors.country && <div className = "text-red-500">{errors.country}</div>}
                                </div>
                                         <div className="mt-8 grid gap-6 md:grid-cols-2">
                                            {/* States */}
     <div>                                   
      <TagsInput.Root
        value={data.states}
        onValueChange={(values) => setData("states", values)}
        className="flex w-full flex-col gap-2"
        editable
      >
        <TagsInput.Label className="font-medium text-sm">
          States
        </TagsInput.Label>
        <div className="flex min-h-10 w-full flex-wrap items-center gap-1.5 rounded-md border px-3 py-2">
          {data.states.map((state) => (
            <TagsInput.Item key={state} value={state}>
              <TagsInput.ItemText className="truncate" />
              <TagsInput.ItemDelete className="h-4 w-4 opacity-70 hover:opacity-100">
                <X className="h-3.5 w-3.5" />
              </TagsInput.ItemDelete>
            </TagsInput.Item>
          ))}
          <TagsInput.Input
            placeholder="Add state..."
            className="flex-1 bg-transparent outline-none"
          />
        </div>
        <TagsInput.Clear className="flex h-9 items-center justify-center gap-2 rounded border bg-transparent text-zinc-800 hover:bg-zinc-100">
          <RefreshCcw className="h-4 w-4" />
          Clear
        </TagsInput.Clear>
      </TagsInput.Root>
      {errors.states && <div className="text-red-500">{errors.states}</div>}
</div>    
      {/* Cities */}
      <div>
      <TagsInput.Root
        value={data.cities}
        onValueChange={(values) => setData("cities", values)}
        className="flex w-full flex-col gap-2"
        editable
        
        readOnly={false}
      >
        <TagsInput.Label className="font-medium text-sm" data-disabled = "Disabled">
          Cities
        </TagsInput.Label>
        <div className="flex min-h-10 w-full flex-wrap items-center gap-1.5 rounded-md border px-3 py-2">
          {data.cities.map((city) => (
            <TagsInput.Item key={city} value={city}>
              <TagsInput.ItemText className="truncate" />
              <TagsInput.ItemDelete className="h-4 w-4 opacity-70 hover:opacity-100">
                <X className="h-3.5 w-3.5" />
              </TagsInput.ItemDelete>
            </TagsInput.Item>
          ))}
          <TagsInput.Input
            placeholder="Add city..."
            className="flex-1 bg-transparent outline-none"
          />
        </div>
        <TagsInput.Clear className="flex h-9 items-center justify-center gap-2 rounded border bg-transparent text-zinc-800 hover:bg-zinc-100">
          <RefreshCcw className="h-4 w-4" />
          Clear
        </TagsInput.Clear>
      </TagsInput.Root>
      {errors.cities && <div className="text-red-500">{errors.cities}</div>}
   </div>    
                            </div>

                         


                            <Button
                                type="submit"
                                 disabled={processing}
                                variant="secondary"
                                size="lg"
                                className="mt-10 h-12 w-full bg-amber-400 text-black hover:bg-amber-500 focus:ring-4 focus:ring-amber-300 dark:focus:ring-amber-900"
                            >
                                Add Location
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

