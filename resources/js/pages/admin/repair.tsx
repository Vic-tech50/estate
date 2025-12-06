import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Repair',
        href: dashboard().url,
    },
];

export default function Repair() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Repair Website" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <div className="mx-auto my-10 w-2/3">
                        <div className="grid gap-2 md:grid-cols-4 md:gap-10">
                            <Link
                                href="/optimize"
                                method="post"
                                as="button"
                                className="rounded bg-green-500 p-3 sm:w-full"
                            >
                                Optimize Website
                            </Link>
                            <p className="col-span-3">
                                Optimize Website: Cache framework bootstrap,
                                configuration and metadat to increase
                                performance
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
