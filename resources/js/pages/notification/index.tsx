import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
// import { IconGitBranch } from "@tabler/icons-react"
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Ellipsis } from 'lucide-react';
import { useRoute } from 'ziggy-js';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Notification',
        href: dashboard().url,
    },
];

export default function Notification() {
    const notifications: any = usePage().props.notifications || [];
    const route = useRoute();

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Notification" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <div className="mx-auto mt-10 w-3/4">
                        <Link
                            href={route('notification.create')}
                            className="float-right mb-4"
                        >
                            <Button variant="outline" size="lg">
                                Create Notification
                            </Button>
                        </Link>

                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>#</TableHead>
                                    <TableHead>Title</TableHead>
                                    <TableHead>Type</TableHead>
                                    <TableHead>Message</TableHead>
                                    <TableHead>Date Sent</TableHead>
                                    <TableHead></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {notifications.map(
                                    (notification: any, index: number) => (
                                        <TableRow key={notification.id}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell >{notification.title || 'No Title'}</TableCell>
                                            <TableCell>{notification.type == 'Alert' ? <p className='text-blue-500'>Alert</p>: <p className='text-green-500'>Notification</p>}</TableCell>
                                            <TableCell
                                                className="max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap"
                                                title={notification.message}
                                            >
                                                {notification.message}
                                            </TableCell>
                                            <TableCell>
                                                {new Date(
                                                    notification.created_at,
                                                ).toLocaleDateString()}
                                            </TableCell>
                                            <TableCell>
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger
                                                        asChild
                                                    >
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                        >
                                                            <Ellipsis className="h-5 w-5" />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent>
                                                        <DropdownMenuLabel>
                                                            Action
                                                        </DropdownMenuLabel>
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuItem>
                                                            <Link
                                                                href={route(
                                                                    'notification.edit',
                                                                    notification.id,
                                                                )}
                                                            >
                                                                Edit
                                                            </Link>
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem className="text-red-500">
                                                            <Link
                                                                href={route(
                                                                    'notification.destroy',
                                                                    notification.id,
                                                                )}
                                                                method="delete"
                                                                as="button"
                                                                onClick={(
                                                                    e,
                                                                ) => {
                                                                    if (
                                                                        !confirm(
                                                                            'Are you sure you want to delete this message?',
                                                                        )
                                                                    ) {
                                                                        e.preventDefault();
                                                                    }
                                                                }}
                                                            >
                                                                Delete
                                                            </Link>
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>
                                        </TableRow>
                                    ),
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
