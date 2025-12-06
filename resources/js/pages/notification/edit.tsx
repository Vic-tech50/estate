import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm, usePage } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { useRoute } from 'ziggy-js';
import { Input } from '@/components/ui/input';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Edit Notification',
        href: dashboard().url,
    },
];

export default function EditNotification() {
    const notification: any = usePage().props.notification || [];
    const route = useRoute();
    const { data, setData, put, processing, errors, progress } = useForm({
        message: notification.message || '',
        title: notification.title || '',
        type: notification.type || '',
    });

    function submit(e: any) {
        e.preventDefault();
        put(route('notification.update', notification.id));
    }
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Notification" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <div className="mx-auto my-7 w-3/4">
                        <form onSubmit={submit}>

                                <div className="mt-8 grid gap-6 md:grid-cols-2">
                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="title">Title </Label>
                                    <Input
                                        type="text"
                                        id="title"
                                        placeholder=" Title"
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
                                    <Label htmlFor="type">Message Type </Label>
                                    <Select
                                        value={data.type}
                                        onValueChange={(value) =>
                                            setData('type', value)
                                        }
                                    >
                                        <SelectTrigger className="h-12 w-full">
                                            <SelectValue placeholder="Message Type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>
                                                    Select Type
                                                </SelectLabel>
                                                <SelectItem value="Alert">
                                                    Alert
                                                </SelectItem>
                                                <SelectItem value="Notification">
                                                    Notification
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
                            </div>

                            <div className="grid w-full gap-3 mt-4">
                                <Label htmlFor="message">Your message</Label>
                                <Textarea
                                    placeholder="Type your message here."
                                    id="message"
                                    value={data.message}
                                    onChange={(e) =>
                                        setData('message', e.target.value)
                                    }
                                />
                                {errors.message && (
                                    <div className="text-red-500">
                                        {errors.message}
                                    </div>
                                )}
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
