import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Inbox',
        href: dashboard().url,
    },
];

export default function Inbox() {
    // const dataTable = DataTable("#default-table");
    let inboxs: any = usePage().props.inboxs || [];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Inbox Messages" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <div className="mx-auto my-10 w-3/4">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full"
                            defaultValue="item-1"
                        >
                             {inboxs.length > 0 ? (
                            inboxs.map((inbox: any) => (
                            <AccordionItem value={`item-${inbox.id}`} key={inbox.id}>
                                <AccordionTrigger className = "whitespace-pre">
                                   {inbox.title}                                             {inbox.created_at_human || '—'}
                                </AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-4 text-balance">
                                    <p>
                                        {inbox.message}
                                    </p>
                                     {/* <Button
                                                    variant="link"
                                                    size="sm"
                                                >
                                                    Mark Read
                                                </Button> */}
                                </AccordionContent>
                            </AccordionItem>
                                ))
                             ) : (
                                    <p className="text-center my-10">
                                        No inbox messages found.
                                    </p>
                                )}
                           
                           
                        </Accordion>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
