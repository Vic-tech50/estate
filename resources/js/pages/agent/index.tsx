import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

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
        title: 'Agent',
        href: dashboard().url,
    },
];

export default function Agent() {
    const agents: any = usePage().props.agents || [];
    const route = useRoute();

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Agent List" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <div className="mx-auto mt-10 w-3/4">
                        <Link href="/agent/create" className="float-right mb-4">
                            <Button variant="outline" size="lg">
                                Add Agent
                            </Button>
                        </Link>

                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>#</TableHead>
                                    <TableHead>Passport</TableHead>
                                    <TableHead>FullName</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>Member Since</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {agents.map((agent: any, index: number) => (
                                    <TableRow
                                        key={agent.id}
                                        className="capitalize"
                                    >
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell className="normal-case">
                                            {agent.passport ? (
                                                <img
                                                    src={agent.passport}
                                                    className="h-15 w-15 rounded-full"
                                                />
                                            ) : (
                                                <img
                                                    src="https://avatar.iran.liara.run/public"
                                                    className="h-15 w-15 rounded-full"
                                                />
                                            )}
                                        </TableCell>
                                        <TableCell>{agent.name}</TableCell>

                                        <TableCell>{agent.email}</TableCell>

                                        <TableCell>
                                            {new Date(
                                                agent.created_at,
                                            ).toLocaleDateString()}
                                        </TableCell>

                                        <TableCell>
                                            {agent.role ==
                                                    'agent' ? (
                                                        <span className="rounded-sm border border-green-300 bg-green-200 p-1.5 text-sm font-bold text-black">
                                                            Active
                                                        </span>
                                                    ) : (
                                                        <span className="rounded-sm border border-red-300 bg-red-200 p-1.5 text-sm font-bold text-black">
                                                            Blocked
                                                        </span>
                                                    )}
                                            </TableCell>
                                        <TableCell>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
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
                                                                'agent.show',
                                                                agent.id,
                                                            )}
                                                        >
                                                            View
                                                        </Link>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <Link
                                                            href={route(
                                                                'agent.edit',
                                                                agent.id,
                                                            )}
                                                        >
                                                            Edit
                                                        </Link>
                                                    </DropdownMenuItem>

                                                    <DropdownMenuItem>
                                                        <Link
                                                            href={route(
                                                                agent.role === 'blocked'
                                                                    ? 'agent.unblock'
                                                                    : 'agent.block',
                                                                agent.id,
                                                            )}
                                                        >
                                                            {agent.role === 'blocked'
                                                                ? 'Unblock'
                                                                : 'Block'}
                                                        </Link>
                                                    </DropdownMenuItem>

                                                    <DropdownMenuItem className="text-red-500">
                                                        <Link
                                                            href={route(
                                                                'agent.destroy',
                                                                agent.id,
                                                            )}
                                                            method="delete"
                                                            as="button"
                                                            onClick={(e) => {
                                                                if (
                                                                    !confirm(
                                                                        'Are you sure you want to delete this Agent?',
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
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
