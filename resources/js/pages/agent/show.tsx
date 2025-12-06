import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import * as React from 'react';
import { useRoute } from 'ziggy-js';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Agent Details',
        href: dashboard().url,
    },
];

export default function EditAgent() {
    const agent: any = usePage().props.agent || {};
    const route = useRoute();

    const [previewUrl, setPreviewUrl] = React.useState<string | null>(
        agent.passport ? `/storage/${agent.passport}` : null,
    );

    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (file) {
            setPreviewUrl(URL.createObjectURL(file));
        }
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Agent Details" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <div className="mx-auto my-10 w-3/4">
                        <form className="space-y-6">
                            <h2>Agent Information :</h2>

                            <center>
                                <div className="grid w-full max-w-sm items-center gap-3">
                                    {previewUrl && (
                                        <img
                                            src={previewUrl}
                                            alt="Passport preview"
                                            className="mt-3 h-60 w-full rounded-lg border border-gray-300 object-cover shadow-md"
                                        />
                                    )}
                                </div>
                            </center>

                            <div className="mt-8 grid gap-6 md:grid-cols-2">
                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="name">Full Name</Label>
                                    <Input
                                        type="text"
                                        value={agent.name}
                                        className="h-12 w-full border-0 capitalize"
                                        disabled
                                    />
                                </div>

                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="title">Agent Title</Label>
                                    <Input
                                        type="text"
                                        value={agent.title}
                                        className="h-12 w-full border-0 capitalize"
                                        disabled
                                    />
                                </div>
                            </div>

                            <div className="mt-8 grid gap-6 md:grid-cols-2">
                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="email">
                                        Business Email
                                    </Label>
                                    <Input
                                        type="email"
                                        value={agent.email ?? 'Not Available'}
                                        className="h-12 w-full border-0 capitalize"
                                        disabled
                                    />
                                </div>

                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="company">
                                        Company Name
                                    </Label>
                                    <Input
                                        type="text"
                                        value={agent.company ?? 'Not Available'}
                                        className="h-12 w-full border-0 capitalize"
                                        disabled
                                    />
                                </div>
                            </div>

                            <div className="mt-8 grid gap-6 md:grid-cols-2">
                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="phone">
                                        Contact Number
                                    </Label>
                                    <Input
                                        type="tel"
                                        value={agent.phone ?? 'Not Available'}
                                        className="h-12 w-full border-0"
                                        disabled
                                    />
                                </div>
                            </div>

                            <div className="mt-8 grid w-full gap-3">
                                <Label htmlFor="about">About Agent</Label>
                                <Textarea
                                    className="h-12 w-full resize-none border-0 capitalize"
                                    value={agent.about ?? 'Not Available'}
                                    disabled
                                />
                            </div>

                            <h2>Social Network :</h2>
                            <div className="mt-8 grid gap-6 md:grid-cols-2">
                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="skype">Skype URL</Label>
                                    <Input
                                        type="url"
                                        value={agent.skype ?? 'Not Available'}
                                        className="h-12 w-full border-0"
                                        disabled
                                    />
                                </div>

                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="facebook">
                                        Facebook URL
                                    </Label>
                                    <Input
                                        type="url"
                                        value={
                                            agent.facebook ?? 'Not Available'
                                        }
                                        className="h-12 w-full border-0"
                                        disabled
                                    />
                                </div>
                            </div>

                            <div className="mt-8 grid gap-6 md:grid-cols-2">
                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="twitter">Twitter URL</Label>
                                    <Input
                                        type="url"
                                        value={agent.twitter ?? 'Not Available'}
                                        className="h-12 w-full border-0"
                                        disabled
                                    />
                                </div>

                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="instagram">
                                        Instagram URL
                                    </Label>
                                    <Input
                                        type="url"
                                        value={
                                            agent.instagram ?? 'Not Available'
                                        }
                                        className="h-12 w-full border-0"
                                        disabled
                                    />
                                </div>
                            </div>

                            <Button
                                type="button"
                                onClick={() => history.back()}
                                variant="secondary"
                                size="lg"
                                className="mt-10 h-12 w-full bg-amber-400 text-black hover:bg-amber-500 focus:ring-4 focus:ring-amber-300 dark:focus:ring-amber-900"
                            >
                                Go Back
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
