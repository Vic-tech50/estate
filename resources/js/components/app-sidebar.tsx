import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import {
    BarChart3,
    FileText,
    HelpCircle,
    Layers,
    LayoutGrid,
    LayoutTemplate,
    Mail,
    MessageSquareDot,
    Send,
    Settings,
    TableProperties,
    Users,
} from 'lucide-react';
import AppLogo from './app-logo';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from './ui/dropdown-menu';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },

    {
        title: 'Properties',
        href: '/properties',
        icon: TableProperties,
    },

    {
        title: 'Agent Management',
        href: '/agent',
        icon: Users,
    },

    {
        title: 'Alerts & Notifications',
        href: '/notification',
        icon: MessageSquareDot,
    },

    // {
    //     title: 'Location',
    //     href: '/location',
    //     icon: MapPin,
    // },

    // {
    //     title: 'Bookings',
    //     href: '#',
    //     icon: Bookmark,
    // },

    {
        title: 'Blog',
        href: '/blog',
        icon: FileText,
    },

    {
        title: 'FAQS',
        href: '/faq',
        icon: HelpCircle,
    },

    {
        title: 'Testimonials',
        href: '/testimonials',
        icon: MessageSquareDot,
    },

    {
        title: 'Email Campaigns',
        href: '/newsletter',
        icon: Send,
    },

    {
        title: 'Website Content',
        href: '/site_content',
        icon: Layers,
    },

    {
        title: 'System Settings',
        href: '/site_settings',
        icon: Settings,
    },

    {
        title: 'Site Analytics',
        href: '/telescope',
        icon: BarChart3,
    },
    {
        title: 'Templates',
        href: '/site_templates',
        icon: LayoutTemplate,
    },

    // {
    //     title: 'Site Images',
    //     href: '/site_images',
    //     icon: Image,
    // },

    {
        title: 'Maintenance Requests',
        href: '/repair',
        icon: Mail,
    },
];

const agentNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutGrid,
    },
    // {
    //     title: 'HomePage',
    //     href: '/',
    //     icon: LayoutGrid,
    // },

    {
        title: 'Inbox',
        href: '/inbox',
        icon: MessageSquareDot,
    },

    {
        title: 'Blog',
        href: '/blog',
        icon: FileText,
    },

    {
        title: 'Properties',
        href: '/properties',
        icon: TableProperties,
    },
];

const footerNavItems: NavItem[] = [
    // {
    //     title: 'Repository',
    //     href: 'https://github.com/laravel/react-starter-kit',
    //     icon: Folder,
    // },
    // {
    //     title: 'Documentation',
    //     href: 'https://laravel.com/docs/starter-kits#react',
    //     icon: BookOpen,
    // },
];

export function AppSidebar() {
    const { props } = usePage();
    const user = props.auth.user;

    const navItems = user.role === 'admin' ? mainNavItems : agentNavItems;

    const link = user.role === 'agent' ? '/dashboard' : '/admin/dashboard';
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={link} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={navItems} />
            </SidebarContent>

            <DropdownMenu>
                <DropdownMenuTrigger asChild></DropdownMenuTrigger>
                <DropdownMenuContent side="right" align="start">
                    <DropdownMenuItem>
                        <span>Edit Project</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <span>Delete Project</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
