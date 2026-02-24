import { Button } from '@/components/ui/button';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

function StatCard({
    title,
    value,
    delta,
    icon,
}: {
    title: string;
    value: string;
    delta?: string;
    icon?: React.ReactNode;
}) {
    return (
        <div className="flex items-center justify-between gap-4 rounded-lg border border-sidebar-border/70 bg-white/60 p-4 shadow-sm backdrop-blur dark:border-sidebar-border dark:bg-gray-900">
            <div className="flex items-start gap-4">
                <div className="rounded-md bg-primary/10 p-2 text-primary dark:bg-primary/20">
                    {icon}
                </div>
                <div>
                    <div className="text-sm font-medium text-muted-foreground">
                        {title}
                    </div>
                    <div className="mt-1 text-2xl font-semibold">{value}</div>
                </div>
            </div>
            {delta && (
                <div className="text-success text-sm font-medium">{delta}</div>
            )}
        </div>
    );
}

export default function Dashboard() {
    let propertycount: any = usePage().props.propertycount || [];
    let pendingpropertycount: any = usePage().props.pendingpropertycount || [];
    let agentcount: any = usePage().props.agentcount || [];
    let properties: any = usePage().props.properties || [];
    let blogs: any = usePage().props.blogs || [];
    // const occupancy = useMemo(() => {
    //     const totalUnits = properties.reduce(
    //         (s: any, p: any) => s + p.units,
    //         0,
    //     );
    //     const occupied = properties.reduce(
    //         (s: any, p: any) => s + p.occupied,
    //         0,
    //     );
    //     return totalUnits > 0 ? Math.round((occupied / totalUnits) * 100) : 0;
    // }, [properties]);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-hidden rounded-xl p-6">
                {/* Top: Title + Actions */}
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-semibold">
                            Estate Admin Dashboard
                        </h1>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Overview of portfolio, occupancy, revenue and recent
                            activity
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        {/* <button className="rounded-md border px-3 py-2 text-sm hover:bg-muted">
                            Export
                        </button> */}
                        <Link
                            href="/properties/create"
                            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-95"
                        >
                            <Button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-95">
                                New Property
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid gap-4 md:grid-cols-3">
                    <StatCard
                        title="Total Properties"
                        value={propertycount || 0}
                        delta=""
                        icon={
                            <svg
                                className="h-5 w-5"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V11.5z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        }
                    />
                    <StatCard
                        title="Pending Property"
                        value={pendingpropertycount || '0'}
                        delta=""
                        icon={
                            <svg
                                className="h-5 w-5"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="9"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                />
                                <path
                                    d="M12 7v6l4 2"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        }
                    />
                    <StatCard
                        title="Total Agent"
                        value={agentcount || 0}
                        delta=""
                        icon={
                            <svg
                                className="h-5 w-5"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M12 3v18"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M8 7h8a4 4 0 010 8H8"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        }
                    />
                </div>

                {/* Main grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:items-start">
                    {/* Left: Properties table */}
                    <div className="rounded-xl border border-sidebar-border/70 bg-card p-4 md:col-span-2 dark:border-sidebar-border">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-medium">Properties</h2>
                            <div className="text-sm text-muted-foreground">
                                Showing {properties.length} properties
                            </div>
                        </div>

                        <div className="mt-4 overflow-hidden rounded-md border">
                            <table className="w-full table-fixed text-sm">
                                <thead className="bg-muted/30 text-left text-xs text-muted-foreground uppercase">
                                    <tr>
                                        <th className="w-3/12 px-4 py-3">
                                            Property
                                        </th>
                                        <th className="w-2/12 px-4 py-3">
                                            Location
                                        </th>

                                        <th className="w-2/12 px-4 py-3">
                                            Price
                                        </th>

                                        <th className="w-2/12 px-4 py-3">
                                            Rent/Sales
                                        </th>
                                        <th className="w-3/12 px-4 py-3">
                                            Manager
                                        </th>
                                        <th className="w-1/12 px-4 py-3">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {properties.map((p: any) => {
                                        return (
                                            <tr key={p.id} className="border-t">
                                                <td className="px-4 py-3 font-medium capitalize">
                                                    {p.title}
                                                </td>
                                                <td className="px-4 py-3 text-muted-foreground">
                                                    {p.address} {p.city},{' '}
                                                    {p.state}
                                                </td>
                                                <td className="px-4 py-3">
                                                    {p.currency}
                                                    {p.price}.00
                                                </td>
                                                <td className="px-4 py-3">
                                                    {p.type}
                                                </td>
                                                <td className="px-4 py-3 capitalize">
                                                    {p.agent_name}
                                                </td>
                                                <td className="px-4 py-3 font-bold text-primary capitalize">
                                                    {p.status}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-4 flex justify-end gap-2">
                            <Link href="/properties/index" className="">
                                <button className="rounded-md border px-3 py-2 text-sm hover:bg-muted">
                                    View All
                                </button>
                            </Link>

                            <Link href="/properties/create" className="">
                                <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white">
                                    Add Property
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Right: Activities + Quick Actions */}
                    <div className="space-y-4">
                        <div className="rounded-xl border border-sidebar-border/70 bg-card p-4 dark:border-sidebar-border">
                            <div className="flex items-center justify-between">
                                <h3 className="text-sm font-medium">
                                    Recent News
                                </h3>
                                <div className="text-xs text-muted-foreground">
                                    {blogs.length} News
                                </div>
                            </div>
                            <ul className="mt-3 space-y-3">
                                {blogs.map((a: any) => (
                                    <li
                                        key={a.id}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="h-8 w-8 flex-shrink-0 rounded-full bg-muted/20 text-center text-sm leading-8 capitalize">
                                            {a.agent_name.charAt(0)}
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-sm">
                                                {a.title}
                                            </div>
                                            <div className="mt-1 text-xs text-muted-foreground">
                                                {a.agent_name} • {a.time}
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-3 text-right">
                                <button className="text-xs text-primary">
                                    View all news
                                </button>
                            </div>
                        </div>

                        <div className="rounded-xl border border-sidebar-border/70 bg-card p-4 dark:border-sidebar-border">
                            <h3 className="text-sm font-medium">
                                Quick Actions
                            </h3>
                            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                                <button className="rounded-md border px-3 py-2 text-left text-sm hover:bg-muted">
                                    Create Lease
                                </button>
                                <button className="rounded-md border px-3 py-2 text-left text-sm hover:bg-muted">
                                    New Ticket
                                </button>
                                <button className="rounded-md border px-3 py-2 text-left text-sm hover:bg-muted">
                                    Collect Payment
                                </button>
                                <button className="rounded-md border px-3 py-2 text-left text-sm hover:bg-muted">
                                    Assign Staff
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom: Map / Analytics */}
                <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-xl border border-sidebar-border/70 bg-card p-4 md:col-span-2 dark:border-sidebar-border">
                        <div className="flex items-center justify-between">
                            <h3 className="text-sm font-medium">
                                Portfolio Map
                            </h3>
                            <div className="text-xs text-muted-foreground">
                                Real-time locations
                            </div>
                        </div>
                        <div className="mt-4 h-60 overflow-hidden rounded-md border">
                            {/* Replace with actual map component */}
                            <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                        </div>
                    </div>

                    <div className="rounded-xl border border-sidebar-border/70 bg-card p-4 dark:border-sidebar-border">
                        <h3 className="text-sm font-medium">
                            Tickets & Alerts
                        </h3>
                        <div className="mt-3 space-y-3">
                            <div className="flex items-start justify-between gap-3 rounded-md border p-3">
                                <div>
                                    <div className="text-sm font-medium">
                                        Leaky roof at Riverside
                                    </div>
                                    <div className="mt-1 text-xs text-muted-foreground">
                                        Assigned to: Ada • 3 open tasks
                                    </div>
                                </div>
                                <div className="text-warning text-xs">High</div>
                            </div>

                            <div className="flex items-start justify-between gap-3 rounded-md border p-3">
                                <div>
                                    <div className="text-sm font-medium">
                                        Generator maintenance overdue
                                    </div>
                                    <div className="mt-1 text-xs text-muted-foreground">
                                        Assigned to: Grace • 7 days
                                    </div>
                                </div>
                                <div className="text-xs text-muted-foreground">
                                    Medium
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 text-right">
                            <button className="rounded-md border px-3 py-2 text-sm hover:bg-muted">
                                View all tickets
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
