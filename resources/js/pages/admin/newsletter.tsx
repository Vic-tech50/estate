import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm, usePage } from '@inertiajs/react';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/js/plugins.pkgd.min.js';
import { LoaderCircle } from 'lucide-react';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import { useRoute } from 'ziggy-js';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

// import { toast } from "sonner";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Site Content',
        href: '#',
    },
];

export default function SiteContent() {
    const route = useRoute();
    let date: any = usePage().props.date || [];
    const { data, setData, post, processing, errors, progress } = useForm({
        emails: '',
        subject: '',
        message: '',
    });

    function submit(e: any) {
        e.preventDefault();
        post('/sendNewsletter');
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Site Content" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <div className="mx-auto my-10 w-3/4">
                        <form onSubmit={submit} className="space-y-6">
                            <div className="grid w-full items-center gap-3">
                                <Label htmlFor="emails">Emails</Label>
                                <Select
                                    value={data.emails}
                                    onValueChange={(value) =>
                                        setData('emails', value)
                                    }
                                >
                                    <SelectTrigger className="h-12 w-full">
                                        <SelectValue placeholder="Emails" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>
                                                Select Reciever
                                            </SelectLabel>

                                            <SelectItem value="All">
                                                All
                                            </SelectItem>
                                            <SelectItem value="Subscriber">
                                                Subscribers
                                            </SelectItem>
                                            <SelectItem value="Agent">
                                                Agent
                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                {errors.emails && (
                                    <div className="text-red-500">
                                        {errors.emails}
                                    </div>
                                )}
                            </div>

                            <div>
                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="subject">Subject</Label>
                                    <Input
                                        type="text"
                                        id="subject"
                                        placeholder="EX: Alert!"
                                        value={data.subject}
                                        onChange={(e) =>
                                            setData('subject', e.target.value)
                                        }
                                        className="h-12 w-full"
                                    />

                                    {errors.subject && (
                                        <div className="text-red-500">
                                            {errors.subject}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="mt-8 grid w-full gap-3">
                                <Label htmlFor="message">Message</Label>
                                <FroalaEditorComponent
                                    tag="textarea"
                                    model={data.message}
                                    onModelChange={(model: any) =>
                                        setData('message', model)
                                    }
                                    config={{
                                        placeholderText:
                                            'Write Your Message Here!',
                                        charCounterCount: true,
                                        colorBackground: 'black',
                                    }}
                                />
                                {errors.message && (
                                    <div className="text-red-500">
                                        {errors.message}
                                    </div>
                                )}
                            </div>

                            <div className="mt-4 text-sm text-gray-500 italic dark:text-gray-400">
                                Last Sent : {date}
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
                                Send Newsletter
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
