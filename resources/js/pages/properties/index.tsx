import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
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
        title: 'Properties',
        href: dashboard().url,
    },
];

export default function Properties() {
    let properties: any = usePage().props.properties || [];
    let agentproperties: any = usePage().props.agentproperties || [];
    const route = useRoute();
    const { auth }: any = usePage().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Properties" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <div className="mx-auto mt-10 w-3/4">
                        <Link
                            href="/properties/create"
                            className="float-right mb-4"
                        >
                            <Button variant="outline" size="lg">
                                Add Property
                            </Button>
                        </Link>

                        <Table>
                            <TableCaption>
                                A list of your recent Properties.
                            </TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>#</TableHead>
                                    <TableHead>Image</TableHead>
                                    <TableHead>Property Title</TableHead>
                                    <TableHead>Property Type</TableHead>
                                    <TableHead>Category</TableHead>
                                    <TableHead>Price</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Date</TableHead>
                                    <TableHead></TableHead>
                                </TableRow>
                            </TableHeader>
                            {auth.user.role == 'agent' ? (
                                <TableBody>
                                    {agentproperties.map(
                                        (property: any, index: number) => (
                                            <TableRow
                                                key={property.id}
                                                className="capitalize"
                                            >
                                                <TableCell>
                                                    {index + 1}
                                                </TableCell>
                                                <TableCell className="normal-case">
                                                    {property.thumbnail ? (
                                                        <img
                                                            src={
                                                                property.thumbnail
                                                            }
                                                            className="h-15 w-15 rounded-full"
                                                        />
                                                    ) : (
                                                        <img
                                                            src="https://avatar.iran.liara.run/public"
                                                            className="h-15 w-15 rounded-full"
                                                        />
                                                    )}
                                                </TableCell>
                                                <TableCell>
                                                    {property.title}
                                                </TableCell>

                                                <TableCell>
                                                    {property.type}
                                                </TableCell>

                                                <TableCell>
                                                    {property.category}
                                                </TableCell>

                                                <TableCell>
                                                    {property.price}
                                                </TableCell>

                                                <TableCell>
                                                    {property.status ==
                                                    'available' ? (
                                                        <span className="rounded-sm border border-green-300 bg-green-200 p-1.5 text-sm font-bold text-black">
                                                            {property.status}
                                                        </span>
                                                    ) : (
                                                        <span className="rounded-sm border border-red-300 bg-red-200 p-1.5 text-sm font-bold text-black">
                                                            {property.status}
                                                        </span>
                                                    )}
                                                </TableCell>

                                                <TableCell>
                                                    {new Date(
                                                        property.created_at,
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
                                                                        'properties.show',
                                                                        property.id,
                                                                    )}
                                                                >
                                                                    View
                                                                </Link>
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem>
                                                                <Link  href={route(
                                                                        'properties.edit',
                                                                        property.id,
                                                                    )}>
                                                                    Edit
                                                                </Link>
                                                            </DropdownMenuItem>
                                                            <DropdownMenuSeparator />
                                                            <DropdownMenuItem className="text-red-500">
                                                                <Link
                                                                    href={route(
                                                                        'properties.destroy',
                                                                        property.id,
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
                            ) : (
                                <TableBody>
                                    {properties.map(
                                        (property: any, index: number) => (
                                            <TableRow
                                                key={property.id}
                                                className="capitalize"
                                            >
                                                <TableCell>
                                                    {index + 1}
                                                </TableCell>
                                                <TableCell className="normal-case">
                                                    {property.thumbnail ? (
                                                        <img
                                                            src={
                                                                property.thumbnail
                                                            }
                                                            className="h-15 w-15 rounded-full"
                                                        />
                                                    ) : (
                                                        <img
                                                            src="https://avatar.iran.liara.run/public"
                                                            className="h-15 w-15 rounded-full"
                                                        />
                                                    )}
                                                </TableCell>
                                                <TableCell>
                                                    {property.title}
                                                </TableCell>

                                                <TableCell>
                                                    {property.type}
                                                </TableCell>

                                                <TableCell>
                                                    {property.category}
                                                </TableCell>

                                                <TableCell>
                                                    {property.price}
                                                </TableCell>

                                                <TableCell>
                                                    {property.status ==
                                                    'available' ? (
                                                        <span className="rounded-sm border border-green-300 bg-green-200 p-1.5 text-sm font-bold text-black">
                                                            {property.status}
                                                        </span>
                                                    ) : (
                                                        <span className="rounded-sm border border-red-300 bg-red-200 p-1.5 text-sm font-bold text-black">
                                                            {property.status}
                                                        </span>
                                                    )}
                                                </TableCell>

                                                <TableCell>
                                                    {new Date(
                                                        property.created_at,
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
                                                                        'properties.show',
                                                                        property.id,
                                                                    )}
                                                                >
                                                                    View
                                                                </Link>
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem>
                                                                <Link
                                                                    href={route(
                                                                        'properties.edit',
                                                                        property.id,
                                                                    )}
                                                                >
                                                                    Edit
                                                                </Link>
                                                            </DropdownMenuItem>
                                                            <DropdownMenuSeparator />
                                                            <DropdownMenuItem className="text-red-500">
                                                                <Link
                                                                    href={route(
                                                                        'properties.destroy',
                                                                        property.id,
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
                            )}
                        </Table>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
