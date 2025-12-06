import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, X } from "lucide-react";
import * as React from "react";
// import { toast } from "sonner";


import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Add Agent',
        href: '#',
    },
];

export default function AddAgent() {
    const { data, setData, post, processing, errors, progress } = useForm<{
            name: string;
            title: string;
            company: string;
            email: string;
            phone: string;
            about: string;
            skype: string;
            facebook: string;
            twitter: string;
            instagram: string;
            passport: File | null;
        }>({
            name: '',
            title: '',
            company: '',
            email: '',
            phone: '',
            about: '',
            skype: '',
            facebook: '',
            twitter: '',
            instagram: '',
            passport: null,
        });

    function submit(e: any) {
  e.preventDefault();
  post('/agent');
}





    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Add Agent" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <div className="mx-auto my-10 w-3/4">
                        <form onSubmit={submit} className="space-y-6">
                            <h2>Agent Information :</h2>

<center>
 <div className="grid w-full max-w-sm items-center gap-3">
    {/* {passport && (
        <img
          src={passport}
          alt="Passport"
          className="mt-3 rounded-lg w-full h-60 border border-gray-300 shadow-md"
        />
      )} */}
      {/* <Label htmlFor="picture">Picture</Label> */}
      <Input id="picture" type="file" accept="image/*" onChange={(e) =>
                                        setData('passport', e.target.files[0])} />

      
    </div>
    </center>
                            <div className="grid w-full items-center gap-3">
                                <Label htmlFor="name">Full Name <span className="text-red-500 ">*</span></Label>
                                <Input
                                    type="text"
                                    id="name"
                                    placeholder="Full Name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData('name', e.target.value)
                                    }
                                    className="h-12 w-full"
                                />

                                {errors.name && <div className = "text-red-500">{errors.name}</div>}
                            </div>

                            <div className="mt-8 grid gap-6 md:grid-cols-2">
                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="title">
                                        Agent Title{' '}
                                        <span className="text-red-500 ">*</span>
                                    </Label>
                                    <Input
                                        type="text"
                                        id="title"
                                        placeholder="Agent Title"
                                        className="h-12 w-full"
                                        value={data.title}
                                        onChange={(e) =>
                                            setData('title', e.target.value)
                                        }
                                    />
                                    {errors.title && <div className = "text-red-500">{errors.title}</div>}
                                </div>

                          <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="company">
                                        Company Name
                                        
                                    </Label>
                                    <Input
                                        type="text"
                                        id="company"
                                        placeholder="Agent Title"
                                        className="h-12 w-full"
                                        value={data.company}
                                        onChange={(e) =>
                                            setData('company', e.target.value)
                                        }
                                    />
                                    {errors.company && <div className = "text-red-500">{errors.company}</div>}
                                </div>

                          
                            </div>

                            <div className="mt-8 grid gap-6 md:grid-cols-2">
                          <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="email">
                                        Business email
                                        <span className="text-red-500 ">*</span>
                                    </Label>
                                    <Input
                                        type="email"
                                        id="email"
                                        placeholder="Agent Title"
                                        className="h-12 w-full"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData('email', e.target.value)
                                        }
                                    />
                                    {errors.email && <div className = "text-red-500">{errors.email}</div>}
                                </div>
                                
                              <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="title">
                                    Contact
                                        <span className="text-red-500 ">*</span>
                                    </Label>
                                    <Input
                                        type="tel"
                                        id="phone"
                                        placeholder="Contact Number"
                                        className="h-12 w-full"
                                        value={data.phone}
                                        onChange={(e) =>
                                            setData('phone', e.target.value)
                                        }
                                    />
                                    {errors.phone && <div className = "text-red-500">{errors.phone}</div>}
                                </div>

                             
                            </div>

                             <div className="mt-8 grid w-full gap-3">
                                <Label htmlFor="about">About Agent</Label>
                                <Textarea
                                    placeholder="Type here..."
                                    id="about"
                                    value={data.about}
                                    onChange={(e) =>
                                        setData('about', e.target.value)
                                    }
                                />
                                {errors.about && <div className = "text-red-500">{errors.about}</div>}
                            </div>

                           


                    

                            {/* Property Details */}
                            <h2>Social Network :</h2>
                            <div className="mt-8 grid gap-6 md:grid-cols-2">
                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="skype">
                                        Skype url
                                    </Label>
                                    <Input
                                        type="url"
                                        id="skype"
                                        placeholder="Ex: https://skype.com/..."
                                        className="h-12 w-full"
                                        value={data.skype}
                                        onChange={(e) =>
                                            setData(
                                                'skype',
                                                e.target.value,
                                            )
                                        }
                                    />
                                    {errors.skype && <div className = "text-red-500">{errors.skype}</div>}
                                </div>

                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="facebook">
                                       Facebook Url
                                    </Label>
                                    <Input
                                        type="url"
                                        id="facebook"
                                        placeholder="Ex: https://facebook.com/..."
                                        className="h-12 w-full"
                                        value={data.facebook}
                                        onChange={(e) =>
                                            setData('facebook', e.target.value)
                                        }
                                    />
                                    {errors.facebook && <div className = "text-red-500">{errors.facebook}</div>}
                                </div>

                               
                            </div>

                            <div className="mt-8 grid gap-6 md:grid-cols-2">
                              <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="twitter">
                                        Twitter
                                    </Label>
                                    <Input
                                        type="url"
                                        id="twitter"
                                        placeholder="Ex: https://twitter.com/..."
                                        className="h-12 w-full"
                                        value={data.twitter}
                                        onChange={(e) =>
                                            setData('twitter', e.target.value)
                                        }
                                    />
                                    {errors.twitter && <div className = "text-red-500">{errors.twitter}</div>}
                                </div>

                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="instagram">Instagram Url</Label>
                                   <Input
                                        type="url"
                                        id="instagram"
                                        placeholder="Ex: http://instagram.com/..."
                                        className="h-12 w-full"
                                        value={data.instagram}
                                        onChange={(e) =>
                                            setData('instagram', e.target.value)
                                        }
                                    />
                                    {errors.instagram && <div className = "text-red-500">{errors.instagram}</div>}
                                </div>

                               
                            </div>

                    

                            

                             

                            <Button
                                type="submit"
                                 disabled={processing}
                                variant="secondary"
                                size="lg"
                                className="mt-10 h-12 w-full bg-amber-400 text-black hover:bg-amber-500 focus:ring-4 focus:ring-amber-300 dark:focus:ring-amber-900"
                            >
                                Add Agent
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
// function route(arg0: string): string {
//     throw new Error('Function not implemented.');
// }

